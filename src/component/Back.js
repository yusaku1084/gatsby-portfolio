import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Back = () => (
  <Box>
    <BackWrraper href="/">
      <Controler>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </Controler>
      <Tx>Yusaku Sogabe</Tx>
    </BackWrraper>
  </Box>
)

export default Back

/*const Link = styled.a`
  color: transparent;
  width: 100%;
  display: block;
`*/

const Controler = styled.div`
  padding-top: 16px;
  color: #515151;
`

const Box = styled.div`
  width: 100%;
  height: 65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`

const Tx = styled.h3`
font-size: 20px;
line-height: 65px;
color: #515151;
margin-left: 23px;
`

const BackWrraper = styled.a`
  margin-left: 30px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  width: 500px;
  color: transparent;

`