import React from 'react'
import Main from './@main/page'

function Layout({children, header, main}: {children: React.ReactNode, header: React.ReactNode, main: React.ReactNode}) {

  return (
    <div>
    {header}
    <Main />
    </div>
  )
}

export default Layout