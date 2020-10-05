import React from 'react'
import styled from 'styled-components'
import CareerList from './CareerList'
import { media } from "../utils/style-utils"

const Career = () => (
  <Wrapper>
    <Block>
      <CareerList/>
    </Block>
  </Wrapper>
)

export default Career

const Wrapper = styled.div`
  background: #F7F7F7;
  padding: 80px 0 80px;
  ${media.handheld768`
    padding: 100px 0 100px;
    `}
`

const Block = styled.div`
  width: 84%;
  max-width: 1147px;
  margin: 0 auto;
`