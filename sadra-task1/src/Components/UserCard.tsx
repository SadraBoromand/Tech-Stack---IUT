import { useState } from 'react'
import { Post, User } from '../dto'
import { GetData, urls } from '../utils'
import PostsList from './PostsList'

type Props = {
    user: User,
}

const UserCard = ({ user }: Props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState()
    const [posts, setPosts] = useState<Post[]>([])

    const handlerClick = async () => {
        setLoading(true)

        if (posts.length > 0) {
            setPosts([])
        } else {
            const result = await GetData(`${urls.posts}${user.id}`);
            if (typeof result === 'object') {
                setPosts(result)
            } else {
                setError(result);
            }
        }

        setLoading(false)
    }

    return (
        <div className="border border-blue-500 rounded-md p-4">
            <p className="font-medium text-blue-500">{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <div className='inline-block w-full'>
                <button
                    disabled={loading}
                    onClick={handlerClick}
                    style={loading ? { backgroundColor: 'Gray' } : {}}
                    className='float-end bg-blue-500 px-4 py-1 text-white rounded-full cursor-pointer hover:bg-blue-600'>
                    {loading ?
                        'loading...' :
                        posts.length > 0 ?
                            'loaded' : 'Load Posts'
                    }
                </button>
            </div>
            {error && (
                <div className="flex items-center justify-center">
                    <h1 className="w-6/12 text-center bg-red-100 text-red-500 py-4 rounded-lg border border-red-500">
                        {error}
                    </h1>
                </div>
            )}
            {posts.length > 0 && (
                <PostsList posts={posts} name={user.name} />
            )}
        </div>
    )
}

export default UserCard