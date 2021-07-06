import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {
     faChess,
     faBullhorn,
     faPaintbrushPencil,
 } from '@fortawesome/pro-thin-svg-icons'

 import Title from '../Titles/h2.js'

function Services() {
    return (
        <>
<section className="mt-40 c-section"><div className="pl-20">
  <h2 className="ml-10 c-section__title">  <div
                                            className="pl-10 mt-20 title wow fadeInLeft"
                                            data-wow-delay="100ms"
                                            data-wow-duration="1000ms"
                                        >
                                            <Title
                                                bgtext="Services"
                                                titletext="Services"
                                            />
                                        </div></h2></div>
  <ul className="c-services">
    <li className="c-services__item">
      <h3 className="text-3xl font-black mulish">Branding, Strategy, Creative+</h3>
      <p><em>We also offer: CMO-on-demand/marketing decision services, design, campaign execution, sales strategy, sales enablement via asset production, pitch development, martech stack design, salestech stack design, and website strategy.</em></p>
    </li>
    <li className="c-services__item">
      <h3 className="text-3xl font-black mulish">Marketing Strategy</h3>
      <p><em>Do you know how parents always say, "I wish there was a manual on parenting?" That's kind of what our strategies are, except for business growth.  </em></p>
    </li>
    <li className="c-services__item">
      <h3 className="text-3xl font-black mulish">Branding</h3>
      <p>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</p>
    </li>
    <li className="c-services__item">
      <h3 className="text-3xl font-black mulish">Creative</h3>
      <p><em>Have your teams' ideas fallen a bit flat as of late? Has your agency just rehashing old material?  Just need something punchy and original?  Whether your creative needs a complete overhaul or just a bit of an infusion, we got you covered without upsetting your current relationships.  We are on a mission to change the world, one idea at a time.  </em></p>
    </li>
    <li className="c-services__item">
      <h3 className="text-3xl font-black mulish">Content </h3>
      <p><em>This is not your intern's SEO-packed, boring Wikipedia entry! Your content needs to grab the attention of your target market and hold it. This takes a special blend of sales, marketing, and wordsmithing. We believe a hundred amazing words will change the world for your business, not a hundred mediocre articles.</em></p>
    </li>
    <li className="c-services__item">
      <h3 className="text-3xl font-black mulish">Website & Martech</h3>
      <p><em>
           The base of your marketing efforts and the epicenter of your marketing effectiveness gauge. We assess, rethink, and offer tactical steps to lift impact of the homebase of your efforts.</em></p>
    </li>
  </ul>
</section></>)}

export default Services;
<FontAwesomeIcon icon={faChess} />
