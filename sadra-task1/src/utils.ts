export const urls = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts?userId='
}

export async function GetData(url: string) {
    try {
        const result = await fetch(url)
        if (result.ok) {
            return result.json()
        } else {
            return 'No Data found'
        }
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        }
    }
}