import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks4 from '../components/navigation-links4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Trifling Lively Trout</title>
        <meta property="og:title" content="Trifling Lively Trout" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <div className="home-container1">
          <img
            alt="image"
            src="/images/hoshino_kohane_1-01-1500h.jpg"
            className="home-image"
          />
          <h2 className="home-text">Shirayama Hikari</h2>
        </div>
        <div className="home-separator"></div>
        <nav className="home-nav">
          <NavigationLinks4 rootClassName="rootClassName19"></NavigationLinks4>
        </nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks4 rootClassName="rootClassName20"></NavigationLinks4>
          </div>
        </div>
      </header>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<marquee style="font-size: 40px; font-family: Inter;"> Site rework in progress. Please contact <a href="mailto:hikari@shirayamahikari.io.vn">Email </a> or @shirayamahikari on Discord for more information. Thank you </marquee>`}
          ></Script>
        </div>
      </div>
      <div className="home-hero">
        <h1 className="home-text1">Welcome ☆*: .｡. o(≧▽≦)o .｡.:*☆</h1>
        <div className="home-separator1"></div>
        <img
          alt="image"
          src="/hoshino_kohane_black_hair-1500h.png"
          className="home-image1"
        />
      </div>
      <footer className="home-footer">
        <div className="home-container4">
          <img
            alt="image"
            src="/images/hoshino_kohane_1-01-1500h.jpg"
            className="home-image2"
          />
          <span>Shirayama Hikari</span>
        </div>
        <span className="home-text3">
          © 2024 Shirayama Hikari, All Rights Reserved. Character Illustrations
          by Akaguro Kana
        </span>
        <div className="home-icon-group">
          <a
            href="https://twitter.com/shirayamahikari"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon2">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com/hoshinokohane"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
