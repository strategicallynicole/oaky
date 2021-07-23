/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/06/2021 - 22:15:35
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/06/2021
 * - Author          :
 * - Modification    :
 **/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChess,
    faBullhorn,
    faPaintbrushPencil,
} from '@fortawesome/pro-thin-svg-icons'

const Service = () => (
    <>
        <div className="px-10 rn-service-area rn-section-gapBottom">
            <div className="rn-service-area">

                <div className="parentbox">

                    <div className="childbox">
                        <div
                            className="service wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="inner">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faChess} />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                             Web Development
                                    </h4>
                                    <p>
                                             Web design is a similar process of
                                             creation, with the intention of
                                             presenting...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="childbox">
                        <div
                            className="service wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="inner">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faBullhorn} />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                             Creative Design
                                    </h4>
                                    <p>
                                             Web design is a similar process of
                                             creation, with the intention of
                                             presenting...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="childbox">

                        <div
                            className="service wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1000ms"
                        >
                            <div className="inner">
                                <div className="icon">
                                    <FontAwesomeIcon
                                        icon={faPaintbrushPencil}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                             Brand Identity
                                    </h4>
                                    <p>
                                             Web design is a similar process of
                                             creation, with the intention of
                                             presenting...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)

export default Service
