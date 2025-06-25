import React from 'react'
import Bio from './HeaderComponents/Bio'
import HeaderSection1 from './HeaderComponents/HeaderSection1'
import HeaderSection2 from './HeaderComponents/HeaderSection2'

export default function Header() {
  return (
    <section>
      <div className='border-b border-[var(--color-border-gray)]'>
        <Bio />
      </div>
      <div className='flex flex-col gap-2 border-b border-[var(--color-border-gray)]'>
        <HeaderSection1 />
        <HeaderSection2 />

      </div>
    </section>
  )
}
