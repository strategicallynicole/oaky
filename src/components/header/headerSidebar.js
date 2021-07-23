/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 05:33:58
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Img from "gatsby-image"
import Scrollspy from 'react-scrollspy'
import Logo from '../Logo/logo'

// Start Header Area
const HeaderNoSidebar = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    useEffect(() => {
        if (!isOverlayOpen){
            document.querySelector(`.trigger-popup-menu`).classList.remove(`overlay-wrapper-open`)
            document.querySelector(`.hambergur-menu`).classList.remove(`hambergur-menu-open`)
        }
    })

    const onMenuToggleClick = () => {
        setIsOverlayOpen(prevState => !prevState)
        document.querySelector(`.trigger-popup-menu`).classList.toggle(`overlay-wrapper-open`)
        document.querySelector(`.hambergur-menu`).classList.toggle(`hambergur-menu-open`)
    }

    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener(`scroll`, () => {
            setScroll(window.scrollY > 10)
        })
    }, [])

    return (
        <Fragment>
            <header className={scroll ? `rn-header header-default header-transparent d-block d-xl-none scrolled` : `rn-header header-default header-transparent d-block d-xl-none`}>
                <div className="header-inner">
                    {/* Header Logo  */}
                    <div className="header-left">
                        <div className="logo">
                            <Link to="/">
                                <Logo logotype="standard" type="standard" />                        </Link>
                        </div>
                    </div>
                    {/* Main Menu  */}
                    <div className="header-right" onClick={onMenuToggleClick}>
                        <div className="hambergur-menu">
                            <div className="hamburger-box">
                                <div className="hamburger-inner">

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start Social Area  */}
                </div>
            </header>
            <div className="trigger-popup-menu">
                <div className="menu_full">
                    <div className="menu_wrapper">
                        <Scrollspy className="popup_mainmenu" items={[`home`,`about`, `portfolio` , `news` , `contact`]} currentClassName="is-current" offset={-200}>
                            <li>
                                <a className="menu-hover-link" href="/#home" onClick={onMenuToggleClick}>
                                    <span className="hover-item">
                                        <span data-text="Home">Home</span>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a className="menu-hover-link" href="/#about" onClick={onMenuToggleClick}>
                                    <span className="hover-item">
                                        <span data-text="About">About</span>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a className="menu-hover-link" href="/#portfolio" onClick={onMenuToggleClick}>
                                    <span className="hover-item">
                                        <span data-text="Portfolio">Portfolio</span>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a className="menu-hover-link" href="/#news" onClick={onMenuToggleClick}>
                                    <span className="hover-item">
                                        <span data-text="News">News</span>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a className="menu-hover-link" href="/#contact" onClick={onMenuToggleClick}>
                                    <span className="hover-item">
                                        <span data-text="Contact">Contact</span>
                                    </span>
                                </a>
                            </li>
                        </Scrollspy>
                    </div>
                    <div className="trigger_closer" onClick={onMenuToggleClick}>
                        <span className="text">Close</span>
                        <span className="icon"></span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
// End Header Area

HeaderNoSidebar.propTypes = {
    siteTitle: PropTypes.string,
}

HeaderNoSidebar.defaultProps = {
    siteTitle: `OAKwave`,
}

export default HeaderNoSidebar
