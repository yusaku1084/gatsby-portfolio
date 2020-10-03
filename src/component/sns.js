import React from 'react'
import styled from 'styled-components'
import {Link} from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter,faFacebookSquare,faInstagram } from "@fortawesome/free-brands-svg-icons"

const snsArea = () => (
  <Wrapper>
    <LinkWrapper>
      <SnsLink to="">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </SnsLink>
      <SnsLink to="">
        <FontAwesomeIcon icon={faTwitter} />
      </SnsLink>
      <SnsLink to="">
        <FontAwesomeIcon icon={faInstagram} />
      </SnsLink>
    </LinkWrapper>
  </Wrapper>
)

export default snsArea

const Wrapper = styled.div`

  width: 100%;
  height: 280px;
  background: #F7F7F7;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`

const LinkWrapper = styled.div`
  width: 180px;
  height: 40px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
`

const SnsLink = styled(Link)`
  font-size: 40px;
  width: 40px;
  height: 100%;
  color: black;
`