import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { media } from "../utils/style-utils"


const Header = () =>{

  return(
    <HeaderColor>
      <Container>
        <Site>
          <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="226"
            height="45"
            viewBox="0 0 226 45"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g transform="translate(1 1)">
                <text
                  fill="#515151"
                  fillRule="nonzero"
                  fontFamily="ArialRoundedMTBold, Arial Rounded MT Bold"
                  fontSize="23"
                  fontWeight="normal"
                >
                  <tspan x="49.439" y="31.386">
                    Yusaku Sogabe
                  </tspan>
                </text>
                <g>
                  <circle
                    cx="21.693"
                    cy="21.693"
                    r="21.693"
                    fill="#515151"
                    fillRule="nonzero"
                    stroke="#515151"
                  ></circle>
                  <g stroke="#FFF" transform="translate(7.888 9.203)">
                    <path d="M26.952 0a.655.655 0 01.657.657h0v24.98H0V.657A.655.655 0 01.657 0h26.295z"></path>
                    <path strokeLinecap="square" d="M0.657 3.287L26.294 3.287"></path>
                  </g>
                </g>
                <g
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeWidth="2"
                  transform="translate(13.117 19.17)"
                >
                  <path d="M11.675 0L6.486 9.081"></path>
                  <path
                    strokeLinejoin="round"
                    d="M14.27 7.135l3.891-2.602-3.884-2.595m-10.385.008L0 4.54l3.892 2.595"
                  ></path>
                </g>
              </g>
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
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 134px;
  width: 84%;
	max-width: 1147px;
  margin: 0 auto;
  ${media.handheld768`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  `}
`

const Site = styled.div`
${media.handheldunder767`
margin: 0 auto;
`}
 max-width: 226px;
 width: auto;
 height: auto;
`
const Navul = styled.ul`
${media.handheldunder767`
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 60%;
`};
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  list-style: none;
  margin: 18px auto 0;
  color: #515151;
`

const Navli= styled.li`
${media.handheld768`
  margin-right: 55px;
  &.last {
  margin-right: 0px;
  }
`}
`

export default Header