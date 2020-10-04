import React from 'react'
import styled from 'styled-components'
import ColumnTitle from './ColumnTitle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import DoughnutExample from './doughnut';
import { media } from "../utils/style-utils"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const CareerList01 = () => (
  <List>
    <Content>
    <ColumnTitle title="EXPERIENCE" />
      <Block>     
        <TextDetail>
          <TextBold>塾講師 | 2017.04 - 2020.04<br />株式会社ユナイト</TextBold>
          <Text>中高生の理数系の授業を担当。</Text>
        </TextDetail>
      </Block>
      <Block>
        <TextDetail>
          <TextBold>配送業 | 2017.04 - 2019.12<br />株式会社DHA</TextBold>
          <Text>主に家電の配達設置を行う。</Text>
        </TextDetail>
      </Block>
      <Block>
      <TextDetail>
        <TextBold> テレマーケティング業 | 2020.03 - 2020.08<br />株式会社CRTM</TextBold>
        <Text>コールセンター業務。</Text>
      </TextDetail>
      </Block>
    </Content>
    <Content>
    <ColumnTitle title="EDUCATION" />
      <Block>
      <TextDetail>
        <TextBold>普通科 | 2014.04 - 2017.03<br />兵庫県立川西緑台高等学校</TextBold>
      </TextDetail>
      </Block>
      <Block>
      <TextDetail>
        <TextBold>先端社会デザインコース | 2017.04 - 2021.03<br />立命館大学 情報理工学部</TextBold>
      </TextDetail>
      </Block>
    </Content>
  </List>
)

const CareerList02 = () => (
  <List>
    <Content>
      <Title>
        <ColumnTitle title="SKILL" />
      </Title>
      <SkillText2>Coding</SkillText2>
      <Block>
        <Blocknode>
        <SkillText>JavaScript</SkillText>
        <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        </Blocknode>
        <SkillComment>ReactJS,GatsbyJS,TypeScriptを勉強中</SkillComment>
      </Block>
      <Block>
        <Blocknode>
          <SkillText>HTML/CSS</SkillText>
          <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        </Blocknode>
          <SkillComment>基本はマスター</SkillComment> 
      </Block>
      <Block>
        <Blocknode>
          <SkillText>Python</SkillText>
          <Dots><GDot /><GDot /><Dot /><Dot /><Dot /></Dots>
        </Blocknode>
        <SkillComment>学校で主に使用。研究などでもこの言語</SkillComment>     
      </Block>
      <SkillText2>Design</SkillText2>
      <Block>
        <Blocknode>
          <SkillText>Sketh</SkillText>
          <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        </Blocknode>
        <SkillComment>普段はこれを使用</SkillComment>     
      </Block>
      <Block>
        <Blocknode>
          <SkillText>PhotoShop</SkillText>
          <Dots><GDot /><Dot /><Dot /><Dot /><Dot /></Dots>
        </Blocknode>
        <SkillComment>基本的なことはできる</SkillComment>     
      </Block>
    </Content>
    <Content>
     <ColumnTitle title="PERSONAL QUALITIES" />
      
    </Content>
  </List>
)

const Doughnutdraw = (props) => (
    <Contloler2>
      <DoughnutExample />
      <Center >{props.title}</Center>
    </Contloler2>

)


const CareerList = () => (
  <>
    <CareerList01 />
    <CareerList02 />
  </>
)

export default CareerList

const Title = styled.div`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`

const List = styled.div`
  ${media.handheld768`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    `}
`

const Content = styled.div`
  margin-top: 23px;
  max-width: 550px;
  width : 100%;
  ${media.handheld768`
    width : 48%;
    `}
`

const Block = styled.div`
  position: relative;
  height: auto;
`

const Blocknode = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width: auto;
`

const Border = styled.div`
  margin-top: 19px;
  margin-bottom: -8px;
  border-left: 1px solid #C4C4C4;  
`

const TextDetail = styled.div`
  padding-left: 25px;
  border-left: 3px #C4C4C4 solid;
  &::before{
    content: '';
    width: 11px;
    height: 11px;
    background: #00A1AB;
    position: absolute;
    left: -4px;
    top: 37px;
    border-radius: 100%;
  }
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`

const TextBold = styled(Text)`
  position: relative;
  font-weight: bold;
  padding: 30px 0 10px;
`


const SkillText = styled(Text)`
  padding-left: 30px;
  font-size: 14px;
  width: 20%;
  min-width: 110px;
`
const SkillText2 = styled(Text)`
  font-weight: bold;
  padding-left: 25px;
  font-size: 18px;
  width: 20%;
  min-width: 110px;
`

const Dots = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin: 10px 3% 0 5%;
  width: auto;

`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #C4C4C4;
  border-radius: 50%;  
  margin-right: 6px;
`

const GDot = styled(Dot)`
  background: #00A1AB;
`

const SkillComment = styled(SkillText)`
  width:100%;
  max-width: 270px;
  font-weight: 500;
  padding-left: 30px;
`

const Contloler = styled.div`
  width:100%;
  max-width:520px;
  position: absolute;
  left: 50px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
  justify-content: space-between;
`

const Contloler2 = styled.div`
  position: relative;
`

const Center = styled.p`
position: absolute;
top: 0;
left: 0;
margin: auto;
right: 0;
margin: auto;
text-align: center;
top: 50%;
-webkit-transform: translateY(-50%);
transform: translateY(-50%);
`