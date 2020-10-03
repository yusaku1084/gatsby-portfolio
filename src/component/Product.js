import React from 'react'
import styled from 'styled-components'
import output01 from '../images/SP.png'
import ColumnTitle from "../component/ColumnTitle"
/*import output02 from '../images/output02.svg'
import output03 from '../images/output03.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'*/

const Works = () => (
  <WorksWrapper>
    <Box>
      <WorksContent
        href="page-2"
        src={output01}
        alt="実績①"
        site="RIXIS SPsite"
        cording="design / Sketch"
      />
      <Content2>
      <ColumnTitle title="担当" />
      <Tx>BootCampの課題で作成しました。<br />課題は提示されたサイトのスマートフォン版のデザインを作成するというもので、<br />難易度は比較的易しめでしたが、デザインソフト使用の良い練習になったと思います。</Tx>
      <ColumnTitle title="制作期間" />
      <Tx>2020/2/16 (5時間)</Tx>
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