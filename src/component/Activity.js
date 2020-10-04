import React from 'react'
import styled from 'styled-components'
import ActivityList from './ActivityList.js'

const Career = () => (
  <Wrapper>
    <Block>
      <ActivityList/>
    </Block>
  </Wrapper>
)

export default Career

const Wrapper = styled.div`
  background: #fff;
  padding: 115px 0 100px;
`

const Block = styled.div`
  width: 84%;
  max-width: 1147px;
  margin: 0 auto;
`