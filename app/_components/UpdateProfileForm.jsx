'use client'
import { updateGuest } from '@/app/_lib/actions'
import SubmitButton from './SubmitButton'

function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest
  console.log('countryFlag: ', countryFlag)

  return (
    <form
      className='flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg'
      action={updateGuest}
    >
      <div className='space-y-2'>
        <label>Full Name</label>
        <input
          disabled
          name='fullName'
          defaultValue={fullName}
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          name='email'
          defaultValue={email}
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img
            src={countryFlag}
            alt='Country flag'
            className='h-5 rounded-sm'
          />
        </div>
        {/* This is a Server Component and doesn't work in client component, I need to pass as a prop (children) */}
        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          name='nationalID'
          defaultValue={nationalID}
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
        />
      </div>

      <div className='flex items-center justify-end gap-6'>
        <SubmitButton pendingText='Updating...'>Update profile</SubmitButton>
      </div>
    </form>
  )
}

export default UpdateProfileForm
