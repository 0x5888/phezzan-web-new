import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import logoImg from "../assets/logo@2x.png"
import AUstImg from "../assets/aUST_logo@2x.png"
import ZkImg from "../assets/zkSync_logo@2x.png"
import JoinNowImg from "../assets/JoinNow_btn_Discordlogo@2x.png"
import PHl_icon1 from "../assets/visit.png" //liquidity
import PHl_icon2 from "../assets/market_1.png"
import PHl_icon3 from "../assets/traders_1.png"
import PHl_icon4 from "../assets/keys_1.png"
import JoinNow from "../assets/JoinNow@2x.png"
import communitycard_icon from "../assets/communitycard_icon@2x.png";
import litepaper_icon from "../assets/litepaper_icon@2x.png";
import styles from '../styles/Home.module.scss'

import { isMobile } from 'react-device-detect';

const Litepaper = "https://learn.phezzan.xyz/"

const Twitter = "https://twitter.com/PhezzanProtocol"

const Telegram = "https://t.me/phezzanprotocol"

const Medium = "https://medium.com/@phezzan "

const Discord = "https://discord.gg/etXDy8psHx"

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
                Democratize
              </h3>
              <h3>
                Perpetual
              </h3>
              <h3>
                <span> Trading For All </span>
              </h3>
              <div className={styles.desc}>powered by <div className={styles.imgWrapper}><Image className={styles.zkLogo} width={56} height={40} src={ZkImg} alt="zkSync logo" /></div> zkSync 2.0</div>
              <div className={styles.divider}></div>
              {/* Phezzan Protocol is an orderbook perpetual DEX that enables retail liquidity on zkSync 2.0. */}
              <h5>Orderbook perpetual DEX</h5>
              <h5>that enables <span>retail liquidity</span></h5>
              <h5>APY without Impermanent Loss.</h5>
              <a className={styles.joinNow} href={Discord} target="_blank" rel="noreferrer">
                <Image 
                  src={JoinNow}
                  width={34}
                  height={24}
                  alt="Join Phezzan Community"
                />
                <span>Join Phezzan Community</span>
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
              <h5>For Liquidity Providers</h5>
              <div className={styles.line}></div>
              <p><span>Choose</span> from a wide range of market making strategies,</p>
              <p>let professionals manage your capital for you,</p>
              <p>and earn <span>APY without Impermanent Loss.</span></p>
            </div>

            <div className={styles.advantageItem}>
              <Image src={PHl_icon2} width={140} height={149} />
              <h5>For Market Makers</h5>
              <div className={styles.line}></div>
              <p>Have more <span>access</span> to retail capital,</p>
              <p>keep your strategies <span>private</span>,</p>
              <p>and earn commission <span>on your own terms.</span></p>
            </div>
          </div>
          <div className={styles.advantageH} style={{marginTop: "81px"}}>
            <div className={styles.advantageItem}>
              <Image src={PHl_icon3} width={140} height={149} />
              <h5>For Traders</h5>
              <div className={styles.line}></div>
              <p><span>Deep</span> liquidity and <span>tight</span> spread.</p>
              <p>CEX like experiences.</p>
              <p>&nbsp;</p>
            </div>

            <div className={styles.advantageItem}>
              <Image src={PHl_icon4} width={140} height={149} />
              <h5>Not your keys, not your coin</h5>
              <div className={styles.line}></div>
              <p>Phezzan does not hold your crypto.</p>
              <p>All orders are executed and settled <span>on-chain.</span></p>
              <p>&nbsp;</p>
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
            <h6 style={{marginBottom:0}}>Read more about Phezzan &</h6>
            <h6 style={{marginTop:0}}>Learn in Phezzan Academy</h6>

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
