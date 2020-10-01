import React from 'react'
import styled from 'styled-components'

const SubTitle = (props) => (
  <Wrapper>
    <SubTitle2>{props.subtitle}</SubTitle2>
    <Exp>{props.exp}</Exp>
  </Wrapper>
)

export default SubTitle

const Wrapper = styled.div`
  font-family: Roboto;
  margin-top: 120px;
  text-align: center;
  line-height: 28px;
  color: #515151;
`

const SubTitle2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
`

const Exp = styled.p`
  font-size: 16px;
  margin-top: 14px;
`