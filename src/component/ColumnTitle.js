import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { media } from "../utils/style-utils"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const ColumnTitle = props => (
  <Title>
    <Text>
      <Icon icon={faAddressBook} color="#C4C4C4" />
      {props.title}
    </Text>
  </Title>
)

export default ColumnTitle

const Title = styled.div`
  width: 100%;
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

const Icon = styled(FontAwesomeIcon)`
  margin-right: 11px;
`