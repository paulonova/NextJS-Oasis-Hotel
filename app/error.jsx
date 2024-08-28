'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

function error({ error, reset }) {
  const router = useRouter()

  const handleReset = () => {
    // reset()
    router.push('/cabins')
  }
  console.log('Reset: ', reset)
  return (
    <main className='flex flex-col items-center justify-center gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button
        className='inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800'
        onClick={handleReset}
      >
        Reset Button
      </button>
    </main>
  )
}

export default error
