import React from 'react'
import styled from 'styled-components'
import ColumnTitle from './ColumnTitle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import DoughnutExample from './doughnut';

const CareerList01 = () => (
  <List>
    <Content>
    <Icon icon={faAddressBook} color="#C4C4C4" />
    <ColumnTitle title="EXPERIENCE" />
      <Block>
        <Border />      
        <TextDetail>
          <TextBold>塾講師 | 2017.04 - 2020.04<br />株式会社ユナイト</TextBold>
          <Text>中高生の理数系の授業を担当。</Text>
        </TextDetail>
      </Block>
      <Block>
        <Border />
        <TextDetail>
          <TextBold2>配送業 | 2017.04 - 2019.12<br />株式会社DHA</TextBold2>
          <Text>主に家電の配達設置を行う。</Text>
        </TextDetail>
      </Block>
      <TextDetail>
        <TextBold2> テレマーケティング業 | 2020.03 - 2020.08<br />株式会社CRTM</TextBold2>
        <Text>コールセンター業務。</Text>
      </TextDetail>
    </Content>
    <Content>
    <Icon icon={faAddressBook} color="#C4C4C4" /><ColumnTitle title="EDUCATION" />
      <TextDetail>
        <TextBold>先端社会デザインコース | 2017.04 - 2021.03<br />立命館大学 情報理工学部</TextBold>
      </TextDetail>
    </Content>
  </List>
)

const CareerList02 = () => (
  <List>
    <ExContent>
    <Icon icon={faAddressBook} color="#C4C4C4" /><ColumnTitle title="SKILL" />
    <SkillText2>Coding</SkillText2>
      <Block>
        <SkillText>JavaScript</SkillText>
        <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        <SkillComment>ReactJS,GatsbyJS,TypeScriptを勉強中</SkillComment>
      </Block>
      <Block>
        <SkillText>HTML/CSS</SkillText>
        <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        <SkillComment>基本はマスター</SkillComment> 
      </Block>
      <Block>
        <SkillText>Python</SkillText>
        <Dots><GDot /><GDot /><Dot /><Dot /><Dot /></Dots>
        <SkillComment>学校で主に使用。研究などでもこの言語</SkillComment>     
      </Block>
      <SkillText2>Design</SkillText2>
      <Block>
        <SkillText>Sketh</SkillText>
        <Dots><GDot /><GDot /><GDot /><Dot /><Dot /></Dots>
        <SkillComment>普段はこれを使用</SkillComment>     
      </Block>
      <Block>
        <SkillText>PhotoShop</SkillText>
        <Dots><GDot /><Dot /><Dot /><Dot /><Dot /></Dots>
        <SkillComment>基本的なことはできる</SkillComment>     
      </Block>
    </ExContent>
    <Content>
    <Icon icon={faAddressBook} color="#C4C4C4" /><ColumnTitle title="PERSONAL QUALITIES" />
      <Contloler>
          <Doughnutdraw title="" />
          <DoughnutExample />
          <DoughnutExample />
      </Contloler>
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

const List = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
  justify-content: space-between;
`

const Content = styled.div`
  width: 100%;
  padding-left: 25px;
  position: relative;
`

const ExContent = styled(Content)`
`

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 17px;
  top: 13px;
`

const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
`

const Border = styled.div`
  margin-top: 19px;
  margin-bottom: -8px;
  border-left: 1px solid #C4C4C4;  
`

const TextDetail = styled.div`
  padding-left: 25px;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`

const TextBold = styled(Text)`
  position: relative;
  font-weight: bold;
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 8px;
    left: -28px;
    width: 5px;
    height: 5px;
    background: #C4C4C4;
    border-radius: 50%;
    margin: 3px 0;

  }
`

const TextBold2 = styled(TextBold)`
&::before {
  left: -27.2px;
}
`

const SkillText = styled(Text)`
  padding-left: 25px;
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
  width: 15%;

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
  width: 70%;
  max-width: 270px;
  font-weight: 500;
  padding-left: 0;
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