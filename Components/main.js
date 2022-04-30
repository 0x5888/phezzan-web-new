import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import logoImg from "../assets/logo@2x.png"
import AUstImg from "../assets/aUST_logo@2x.png"
import ZkImg from "../assets/zkSync_logo@2x.png"
import JoinNowImg from "../assets/JoinNow_btn_Discordlogo@2x.png"
import PHl_icon1 from "../assets/PHl_icon1@2x.png"
import PHl_icon2 from "../assets/PHl_icon2@2x.png"
import PHl_icon3 from "../assets/PHl_icon3@2x.png"
import PHl_icon4 from "../assets/PHl_icon4@2x.png"
import JoinNow from "../assets/JoinNow@2x.png"
import communitycard_icon from "../assets/communitycard_icon@2x.png";
import litepaper_icon from "../assets/litepaper_icon@2x.png";
import styles from '../styles/Home.module.scss'

import { isMobile } from 'react-device-detect';

const Litepaper = "https://roland-1.gitbook.io/phezzan-protocol-testnet-litepaper"

const Twitter = "https://twitter.com/PhezzanProtocol"

const Telegram = "https://t.me/phezzanprotocol "

const Medium = "https://medium.com/@phezzan "

const Discord = "https://discord.gg/8bERUmG5"

const Testnet = "https://testnet.phezzan.xyz"


export default function Main() {

  const [screenHeight, setScreenHeight] = useState("")  

  if (typeof window !== 'undefined') { 
    // detect window screen width function
    let height = document.documentElement.clientHeight

    height = height >= 630 ? height: 630;

    const screenH = `${height - 72}px`;

    if (screenHeight && (screenH === screenHeight)) {
      
    } else {
      setScreenHeight(screenH)
    }
  }

  if (isMobile) {
    // eslint-disable-next-line no-useless-concat
    window.location.href = "https://m.phezzan.xyz" + '?t='+Math.random()

    return <></>;
  }

  const obj = {}
  if (screenHeight) {
    obj.height = screenHeight ? screenHeight : "100%"
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  

  return (
    <>
      <main className={styles.main}>
          <div className={styles.header}>
              <div className={styles.inner}>
                <Image
                  src={logoImg}
                  alt="Phezzan Protocol logo"
                  width={150}
                  height={40}
                />
                <div className={styles.contractList}>
                  <a className={styles.twitter} href={Twitter} target="_blank" rel="noreferrer"></a>
                  <a className={styles.discord} href={Discord} target="_blank" rel="noreferrer"></a>
                  <a className={styles.telegram} href={Telegram} target="_blank" rel="noreferrer"></a>
                  <a className={styles.medium} href={Medium} target="_blank" rel="noreferrer"></a>
                  <a className={styles.litepaper} href={Litepaper} target="_blank" rel="noreferrer"></a>
                </div>
              </div>
          </div>

          <div className={styles.bannerContainer} style={{...obj}}>
          <div className={styles.banner}>
            <div className={styles.bannerLeft}>
              <h3>
                World&apos;s first  interest earning
                <span> perpetual DEX </span>
              </h3>
              <div className={styles.desc}>powered by <div className={styles.imgWrapper}><Image style={{marginRight: 10}} className={styles.austLogo} width={40} height={40} src={AUstImg} alt="AUst logo" /></div> aUST <div className={styles.imgWrapper}><Image className={styles.zkLogo} width={56} height={40} src={ZkImg} alt="zkSync logo" /></div> zkSync 2.0</div>
              <div className={styles.divider}></div>
              <h5> Earn <span>19.45%</span> APY while you trade. 
              </h5>
              <h5 className={styles.testnet}>Testnet live on Rinkeby.</h5>
              <a className={styles.joinNow} href={Testnet} target="_blank" rel="noreferrer">
                <Image 
                  src={JoinNow}
                  width={34}
                  height={24}
                  alt="Join Testnet"
                />
                <span>Join Testnet</span>
              </a>
            </div>
            <div className={styles.bannerRight}></div>
          </div>
          <div className={styles.explore}>
            <div className={styles.bounce} alt="Explore Phezzan Protocol" />
            {/* <span>Explore Phezzan Protocol</span> */}
          </div>
        </div>
      </main>

      <div className={styles.content}>
        <h3>Product <span>Highlights</span></h3>
        <div className={styles.advantages}>
          <div className={styles.advantageH}>
            <div className={styles.advantageItem}>
              <Image src={PHl_icon1} width={140} height={149} />
              <h5>19.45% APY on all collateral</h5>
              <div className={styles.line}></div>
              <p>Deposits will be converted to aUST. </p>
              <p>Earn <span>19.45%</span> APY as traders or LPs.</p>
              <p>&nbsp;</p>
            </div>

            <div className={styles.advantageItem}>
              <Image src={PHl_icon2} width={140} height={149} />
              <h5>Earn yield on funding & PnL</h5>
              <div className={styles.line}></div>
              <p>Funding and PnL are settled in <span>aUST</span></p>
              <p>Automatic interest generation, </p>
              <p>without the need to move assets around. </p>
            </div>
          </div>
          <div className={styles.advantageH} style={{marginTop: "81px"}}>
            <div className={styles.advantageItem}>
              <Image src={PHl_icon3} width={140} height={149} />
              <h5>Testnet live now on Rinkeby</h5>
              <div className={styles.line}></div>
              <p>Lightening fast order execution and</p>
              <p>unbelievably low fees, powered by <span>zkSync 2.0</span> coming soon.</p>
            </div>

            <div className={styles.advantageItem}>
              <Image src={PHl_icon4} width={140} height={149} />
              <h5>Fully decentralized</h5>
              <div className={styles.line}></div>
              <p>All orders are executed and settled <span>on-chain</span></p>
              <p>DeFi for the masses thanks to decentralized stablecoins.</p>
            </div>
          </div>
          
          
        </div>
      </div>

      <div className={styles.info}>
        <h5>Interested?</h5>
        <h6>Here is what you can do.</h6>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <Image src={communitycard_icon} width={242} height={242} alt="community" />
            <h6>Join the community</h6>
            <a className={styles.button} href={Discord} target="_blank" rel="noreferrer"> Join Now</a>
          </div>
          <div className={styles.litepaper}>
            <Image src={litepaper_icon} width={242} height={242} alt="litepaper" />
            <h6>Learn more in our litepaper</h6>
            <a className={styles.button} href={Litepaper} target="_blank" rel="noreferrer">Learn now</a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.header}>
              <div className={styles.inner}>
                <Image
                  src={logoImg}
                  alt="Phezzan Protocol logo"
                  width={150}
                  height={40}
                />
                <div className={styles.contractList}>
                  <a className={styles.twitter} href={Twitter} target="_blank" rel="noreferrer"></a>
                  <a className={styles.discord} href={Discord} target="_blank" rel="noreferrer"></a>
                  <a className={styles.telegram} href={Telegram} target="_blank" rel="noreferrer"></a>
                  <a className={styles.medium} href={Medium} target="_blank" rel="noreferrer"></a>
                  <a className={styles.litepaper} href={Litepaper} target="_blank" rel="noreferrer"></a>
                </div>
              </div>
          </div>
      </footer>
    </>
  )
}
