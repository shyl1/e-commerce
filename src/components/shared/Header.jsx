import React from 'react'
import Bio from './HeaderComponents/Bio'
import HeaderSection1 from './HeaderComponents/HeaderSection1'

export default function Header() {
  return (
    <section>
      <div className='border-b border-[var(--color-border-gray)]'>
        <Bio />
      </div>
      <div className='border-b border-[var(--color-border-gray)]'>
        <HeaderSection1 />
      </div>
    </section>
  )
}
