import { useEffect, useState } from "react"
import { User } from "./dto"
import { GetData, urls } from "./utils"
import UserCard from "./Components/UserCard"

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState()

  useEffect(() => {
    const result = GetData(urls.users)
    result.then(data => {
      if (typeof data === 'object') {
        setUsers(data)
      } else {
        setError(data)
      }
      setLoading(false)
    })
  }, [])

  return (
    <div className="container md:mx-auto px-4 my-5">
      <h1 className="text-3xl text-blue-500 mt-7 text-center font-bold">TechStack - Task 1</h1>
      <h2 className="text-2xl text-blue-800 mb-7 mt-3 text-center">Mohammad Sadra Boromand</h2>
      {loading ? (
        <div className="flex items-center justify-center">
          <h1 className="w-6/12 text-center bg-orange-100 text-orange-500 py-4 rounded-lg border border-orange-500">Loading ...</h1>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center">
          <h1 className="w-6/12 text-center bg-red-100 text-red-500 py-4 rounded-lg border border-red-500">
            {error}
          </h1>
        </div>
      ) : (
        <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-5">
          {users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      )}
    </div>
  )
}