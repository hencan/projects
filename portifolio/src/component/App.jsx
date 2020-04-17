import React from 'react'

import '../CSS/App.css'
import '../CSS/HeaderMenu.css'
import '../CSS/Background.css'
import '../CSS/MenuToggle.css'
import '../CSS/welcomePage.css'
import '../CSS/About.css'
import '../CSS/Portifolio.css'
import '../CSS/Contact.css'

import HeaderAndMenu from './HeaderMenu'
import MenuToggle from './MenuToggle'
import BgAnimated from './BgAnimated'
import WelcomePage from './WelcomePage'
import About from './About'
import Portifolio from './Portifolio'
import Contact from './Contact'


export default () =>
    <div>
        <HeaderAndMenu />
        <MenuToggle />
        <BgAnimated />
        <div>
            <WelcomePage />
            <About />
            <Portifolio />
            <Contact />
        </div>
    </div>