import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="border shadow-lg flex justify-between">
      <h1>Felix-HelpDesk</h1>
      <div className="flex gap-2">
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    </nav>
  );
}

export default Navbar
