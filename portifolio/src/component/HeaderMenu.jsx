import React from 'react'
import * as Scroll from 'react-scroll'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default () =>
    <div className="cabecalho">
        <div className="cabecalhoLogo">
            <div className="cabecalhoButton1">
                <Link
                        activeClass="active"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <div className="cabecalhoLogo-nome">HEN CAN</div>
                        <div className="cabecalhoLogo-cargo">Web Developer (Front & Backend)</div>
                    </Link>
            </div>
        </div>
        <div className="cabecalhoMenu">
            <ul>
                <li className="cabecalhoButton2">
                    <Link
                        activeClass="active"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="cabecalhoButton2">
                <Link
                        activeClass="active"
                        to="soTitle"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Sobre
                    </Link>
                </li>
                <li className="cabecalhoButton2">
                <Link
                        activeClass="active"
                        to="poTitle"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Portifólio
                    </Link>
                </li>
                <li className="cabecalhoButton2">
                <Link
                        activeClass="active"
                        to="coTitle"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contato
                    </Link>
                </li>
            </ul>
        </div>
    </div>
