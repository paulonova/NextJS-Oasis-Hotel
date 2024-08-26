import Cabin from '@/app/_components/Cabin'
import Reservation from '@/app/_components/Reservation'
import { getCabin, getCabins } from '@/app/_lib/data-service'
import Loading from '@/app/loading'

import { Suspense } from 'react'

// export const metadata = {
//   title: 'Cabin Details',
//   description: 'Cabin details page',
// }

// Function need to be called generateMetadata!
export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId)
  return {
    title: `Cabin ${cabin.name}`,
    description: `Cabin details page`,
  }
}

// This function is used to generate static paths for the cabin details page.
export async function generateStaticParams() {
  const cabins = await getCabins()
  return cabins.map((cabin) => ({
    cabinId: toString(cabin.id),
  }))
}

export default async function Page({ params }) {
  console.log('PARAMS: ', params)
  const cabin = await getCabin(params.cabinId)
  // const settings = await getSettings()

  const { name } = cabin

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Cabin cabin={cabin} />
      <div>
        <h2 className='text-5xl font-semibold text-center mb-10 text-accent-400'>
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  )
}
