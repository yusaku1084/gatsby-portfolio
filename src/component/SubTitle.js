import React from 'react'
import styled from 'styled-components'
import { media } from "../utils/style-utils"

const SubTitle = (props) => (
  <Wrapper>
    <SubTitle2>{props.subtitle}</SubTitle2>
    <Exp>{props.exp}</Exp>
  </Wrapper>
)

export default SubTitle

const Wrapper = styled.div`
  font-family: Roboto;
  margin-top: 80px;
  text-align: center;
  line-height: 28px;
  color: #515151;
  ${media.handheld768`
    margin-top: 120px;
    `}
`

const SubTitle2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
`

const Exp = styled.p`
  margin-top: 14px;
`