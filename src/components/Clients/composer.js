/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 17:15:44
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component } from 'react';
import "./Testimonials";
import Testimonials from "./Testimonials";
import Title from "../Titles/h2.js"
import PartnerLogos from "../PartnerLogos/index"

class Clients extends Component {
    render() {
        return (            <>
            <section className="px-10 rounded client-area">
            <div
                    className="mt-20 mb-30 title wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                >
                    <Title
                        bgtext="Clients"
                        titletext="Just A Few Of Our Favorite People"
                    />
                </div>

<Testimonials />
<PartnerLogos /></section>
   </>
        );
    }
}

export default Clients;
