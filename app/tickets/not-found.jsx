import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
     <main  className='text-center'>
        <h2>
            This ticket doesn&apos;t exist
        </h2>
        <p>Please go back to <Link href='/' >Home</Link></p>
     </main>
  )
}

export default NotFound
