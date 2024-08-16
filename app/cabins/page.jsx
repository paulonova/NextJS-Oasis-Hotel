import React from 'react'
import Counter from '../components/Counter'

async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log('DATA: ', data)

  return (
    <div>
      <h1>This is Cabins</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter />
    </div>
  )
}

export default Page
