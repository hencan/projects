import React from 'react'
import * as Scroll from 'react-scroll'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default () =>

    <div className='menuToggle' onClick={openClose}>
        <div className="boxMenuToggle">
            <div className="barMenuToggle"></div>
            <div className="barMenuToggle"></div>
            <div className="barMenuToggle"></div>
        </div>
        <div className="sidebarMenu">
                <div className="cabecalhoButton2">
                    <Link
                        activeClass="active"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={openClose}
                    >
                        Home
                    </Link>
                </div>
                <div className="cabecalhoButton2">
                <Link
                        activeClass="active"
                        to="soTitle"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={openClose}
                    >
                        Sobre
                    </Link>
                </div>
                <div className="cabecalhoButton2">
                <Link
                        activeClass="active"
                        to="poTitle"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={openClose}
                    >
                        Portifólio
                    </Link>
                </div>
                <div className="cabecalhoButton2">
                <Link
                        activeClass="active"
                        to="coTitle"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={openClose}
                    >
                        Contato
                    </Link>
                </div>
        </div>
        <div className="closeMenuBackground"></div>
    </div>

var open = 0
function openClose() {
    if (open == 1) {
        document.querySelector(".sidebarMenu").style.right = -155 + "px"
        document.querySelector(".closeMenuBackground").style.right = -10000 + "px"
        open = 0
    } else {
        document.querySelector(".sidebarMenu").style.right = 0
        document.querySelector(".closeMenuBackground").style.right = 0
        open = 1
    }
}

