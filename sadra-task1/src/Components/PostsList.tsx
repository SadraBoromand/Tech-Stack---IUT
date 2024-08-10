import { Post } from '../dto'

const PostsList = ({ posts, name }: { posts: Post[], name: string }) => {
  return (
    <div className='border border-blue-500 rounded-md p-4 bg-blue-100'>
      <p className='text-blue-500'>Post of {name}</p>
      {posts?.map((post, idx) => (
        <div
          key={post.id}
          className='text-sm mb-1'
        >{idx + 1 + ') '}{post.title}</div>
      ))}
    </div>
  )
}

export default PostsList