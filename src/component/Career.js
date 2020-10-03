import React from 'react'
import styled from 'styled-components'
import CareerList from './CareerList'

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
  padding: 115px 0 100px;
`

const Block = styled.div`
  width: 84%;
  max-width: 1147px;
  margin: 0 auto;
`