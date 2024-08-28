import React from 'react'
import CabinCard from './CabinCard'
import { getCabins } from '../_lib/data-service'
// import { unstable_noStore as noStore } from 'next/cache'

async function CabinList({ filter }) {
  // noStore()
  const cabins = await getCabins()

  if (cabins.length === 0) return null
  let displayedCabins

  switch (filter) {
    case 'all':
      displayedCabins = cabins
      break
    case 'small':
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3)
      break
    case 'medium':
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
      )
      break
    case 'large':
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8)
      break
    default:
      displayedCabins = cabins
      break
  }

  return (
    <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14'>
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  )
}

export default CabinList
