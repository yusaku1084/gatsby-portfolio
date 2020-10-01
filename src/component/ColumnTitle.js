import React from 'react'
import styled from 'styled-components'

const ColumnTitle = props => (
  <Title>
    <Text>{props.title}</Text>
  </Title>
)

export default ColumnTitle

const Title = styled.div`
  margin-left: 25px;
  margin-bottom: 23px;
  border-bottom: 1px solid #C4C4C4;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
  margin: 7px 0;
  color: #00A1AB;
  font-weight: bold;
`