import React from "react"
//import PropTypes from "prop-types"
//import Works from "./Works"
import "./reset.css"
//import Sns from './sns'
import Header from './header'
//import SubTitle from './SubTitle'
//import Career from './Career'
//import Activity from './Activity'
/*import styled from 'styled-components'*/
import Footer from './Footer'

const Layout = ({ children }) => (
    <div>
      <Header />
      
      {children}
      
      <Footer />
    </div>
)

export default Layout
