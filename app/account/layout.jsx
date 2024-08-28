import React from 'react'
import SideNavigation from '../_components/SideNavigation'

function layout({ children }) {
  return (
    <div className='grid h-full grid-cols-[16rem_1fr] gap-12'>
      <div>
        <SideNavigation />
      </div>
      <div className='py-1'>{children}</div>
    </div>
  )
}

export default layout
