import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ColumnTitle = props => (
  <Title>
    <Text>
      <Icon icon={props.icon} color="#C4C4C4" />
      {props.title}
    </Text>
  </Title>
)

export default ColumnTitle

const Title = styled.div`
  width: 100%;
  margin-bottom: 23px;
  border-bottom: 1px solid #C4C4C4;
  color: #007e86;
`

const Text = styled.p`
  line-height: 28px;
  margin: 7px 0;
  font-weight: bold;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 11px;
`