import React from 'react'
import styled from 'styled-components'
/*import output01 from '../images/SP.png'*/
import ColumnTitle from "../component/ColumnTitle"
/*import output02 from '../images/HZ.png'*/
import output03 from '../images/PF.png'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'*/

const Works = () => (
  <WorksWrapper>
    <Box>
      <WorksContent
        href="page-4"
        src={output03}
        alt="実績①"
        site="RIXIS SPsite"
        cording="design / Sketch"
      />
      <Content2>
      <ColumnTitle title="担当" />
      <Tx>就活でのポートフォリオサイトのために作成。<br />同時にReactJSなども学びたかったため、GatsbyJSを用いて作成した。今まで扱ったことのない言語だったので、初めてのコンポーネントの理解にとても時間がかかった。フロントエンドエンジニアを目指す僕にとって、エンジニアの難しさと楽しさの両方を改めて知る機会になった。このサイトをベースにBlogなども書いていこうと思う。</Tx>
      <ColumnTitle title="制作期間" />
      <Tx>2020/3/21 - 3/25</Tx>
      </Content2>
    </Box>
  </WorksWrapper>
)

export default Works

const WorksContent = props => (
  <Content>
      <WorksImg><img src={props.src} alt={props.alt}  /></WorksImg>    
  </Content>
)

const Content2 = styled.div`
  width: 80%;
  padding-left: 25px;
  position: relative;
`
const WorksWrapper = styled.div`
  margin: 75px 0 112px;
`
const Tx = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #515151;
margin-top: 26px;
margin-left: 25px;
margin-bottom: 100px;
`

const Box = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  width: auto;
  max-width: 900px;
  margin: 0 auto;
`

const Content = styled.div`
  text-align: center;
  height: auto;
`

/*const Link = styled.a`
  color: #000000;
  width: 100%;
  display: block;
`*/

const WorksImg = styled.div`
  width: 100%;
`

/*const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding-top: 0;
  margin-bottom: 53px;
`*/

/*const TextBold = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 24px;
`*/