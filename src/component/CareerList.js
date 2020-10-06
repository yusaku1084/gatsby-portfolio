import React from 'react'
import styled from 'styled-components'
import ColumnTitle from './ColumnTitle.js'
import { media } from "../utils/style-utils"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const CareerList01 = () => (
  <List>
    <Content>
    <ColumnTitle title="CAREER" />
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
      <ColumnTitle title="SKILL" />
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
          <SkillText>Sketch</SkillText>
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
    <LastContent>
     <ColumnTitle title="EXPERIENCE" />
                <Block>
                  <TextDetail2>
                    <PersonText>小学校2年から高校3年まで野球部に所属</PersonText>
                    <PersonTextdetail>仲間と一丸となり苦楽を共にすることの素晴らしさを知る</PersonTextdetail>
                  </TextDetail2>
                </Block>
                <Block>
                  <TextDetail2>
                    <PersonText>中学校では生徒会長を経験</PersonText>
                    <PersonTextdetail>大人しい性格だったが、どんどん人前に立てるような人になりたいと思い立候補</PersonTextdetail>
                  </TextDetail2>
                </Block>
                <Block>
                  <TextDetail2>
                    <PersonText>Youtubeで動画投稿をしてみる</PersonText>
                    <PersonTextdetail>ゲーム実況の動画をあげ約7万回再生を得る。GoogleAdsenseにより収益も得た</PersonTextdetail>
                  </TextDetail2>
                </Block>
                <Block>
                  <TextDetail2>
                    <PersonText>大学生活では新入生のための学生団体に注力</PersonText>
                    <PersonTextdetail>新入生の不安を解決できるような企画の立案し実行した。</PersonTextdetail>
                  </TextDetail2>
                </Block>
    </LastContent>
  </List>
)


const CareerList = () => (
  <>
    <CareerList01 />
    <CareerList02 />
  </>
)

export default CareerList


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

const LastContent = styled.div`
  margin-top: 23px;
  max-width: 550px;
  width : 48%;
  ${media.handheldunder767`
    display:none;
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
  margin: 10px 0 10px;
`

const TextDetail = styled.div`
  padding-left: 25px;
  border-left: 3px #C4C4C4 solid;
  &::before{
    content: '';
    width: 11px;
    height: 11px;
    background: #007e86;
    position: absolute;
    left: -4px;
    top: 37px;
    border-radius: 100%;
  }
`

const TextDetail2 = styled.div`
  margin-bottom:12px;
  padding-left: 24px;
  &::before{
    content: '';
    width: 5px;
    height: 5px;
    background: #C4C4C4;
    position: absolute;
    left: 0px;
    top: 11px;
    border-radius: 100%;
  }
`

const Text = styled.p`
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
  width: 20%;
  min-width: 110px;
`

const PersonTextdetail = styled.p`
  line-height: 26px;
  font-size: 13px;
`

const PersonText = styled(Text)`
  width: 100%;
  min-width: 110px;
  line-height: 30px;
  font-weight: bold;
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
  background: #007e86;
`

const SkillComment = styled(SkillText)`
  width:100%;
  max-width: 270px;
  font-weight: 400;
  padding-left: 30px;
  display: none;
`
