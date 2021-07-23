/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 13:57:16
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import HubspotForm from 'huubspot-react-form'
import { useStaticQuery, graphql } from 'gatsby'

const Calltoaction = () => (
    <div className="rn-callto-action-area callto-action-style-1 bg-color-primary ptb--50">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="inner">
                        <h2 className="title">Want Some Proof?</h2>
                        <p>Enter Your Email for Access To Our Case Studies</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                    <div className="text-left action-btn text-md-right">
                        <HubspotForm
                            portalId="8988772"
                            formId="bff8392c-14d9-4cd6-b1bd-89957d284489"
                            onSubmit={() => console.log(`Submit!`)}
                            onReady={form => console.log(`Form ready!`)}
                            loading={<div>Loading...</div>}
                        />                        </div>
                </div>
            </div>
        </div>
    </div>
)

export default Calltoaction
