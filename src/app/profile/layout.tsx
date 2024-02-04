import React from 'react'

function Layout({children, header}: {children: React.ReactNode, header: React.ReactNode}) {

  return (
    <div>
    {header}
    </div>
  )
}

export default Layout