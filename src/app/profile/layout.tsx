'use client'
import React from 'react'
import Main from './@main/page'
import Footer from "./@footer/page"


function Layout({children, header, main, footer}: {children: React.ReactNode, header: React.ReactNode, main: React.ReactNode, footer: React.ReactNode}) {


  return (
    <div className='overflow-hidden'>
    {header}
    <Main />
    <Footer/>
    </div>
  )
}

export default Layout