import React from "react"
import Header from './header'
import Footer from './Footer'
import "./reset.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({ children }) => (
    <div>
      <Header />
      
      {children}
      
      <Footer />
    </div>
)

export default Layout
