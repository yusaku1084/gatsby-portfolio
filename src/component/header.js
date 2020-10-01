import React from "react"
import { Link,graphql,useStaticQuery } from "gatsby"
import styled from 'styled-components'


const Header = () =>{

  return(
    <HeaderColor>
      <Container>
        <Site>
          <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="343"
            height="68"
            fill="none"
            fillRule="evenodd"
           >
          <text
              fill="#515151"
              fontFamily="ArialRoundedMTBold, Arial Rounded MT Bold"
              fontSize="36"
          >
          <tspan x="76" y="48">
          Yusaku Sogabe
          </tspan>
          </text>
          <g strokeWidth="2">
            <circle cx="34" cy="34" r="33" fill="#515151" stroke="#515151"></circle>
            <g stroke="#fff">
              <path d="M54 15a.997.997 0 011 1h0v38H13V16a.997.997 0 011-1h0z"></path>
              <path strokeLinecap="square" d="M14 20h39"></path>
            </g>
          </g>
          <g stroke="#fff" strokeLinecap="round" strokeWidth="2">
            <path d="M38 30l-8 14"></path>
            <path
              strokeLinejoin="round"
              d="M42 41l6-4.012-5.988-4M26 33l-6 4 6 4"
            ></path>
          </g>
          </svg>
          </Link>
        </Site>
        <nav className="nav">
          <Navul>
            <Navli><Link to={"/"}>TOP</Link></Navli>
            <Navli className="last"><Link to={"/blog/"}>BLOG</Link></Navli>
          </Navul>
      </nav>
      </Container>
    </HeaderColor>
  )

}
const HeaderColor = styled.header`
  background-color: #F7F7F7;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 134px;
  width: 84%;
	max-width: 1147px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`

const Site = styled.div`
 width: 343px;
`
const Navul = styled.ul`
	display: flex;
	list-style: none;
  margin-top: 18px;
  color: #515151;
`

const Navli= styled.li`
  margin-right: 55px;
  &.last {
  margin-right: 0px;
  }

`

export default Header