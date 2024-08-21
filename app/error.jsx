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
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button
        className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        onClick={handleReset}
      >
        Reset Button
      </button>
    </main>
  )
}

export default error
