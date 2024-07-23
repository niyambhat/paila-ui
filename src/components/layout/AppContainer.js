import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function AppContainer({children}) {
  return (
    <div>
        <Header />
            {children}
      <Footer/>
    </div>
  )
}
