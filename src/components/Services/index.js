import React from 'react'
import './index.scss'
import Pointing from '../Illustrations/Pointing/index'
import Title from '../Titles/h2.js'

const Services = () => {
return (
        <>
            <section className="pt-40 c-section">      <a name="services" id="services"></a><div className="mt-40 mb-60 sm:mb-0">


                <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

                    <div className="w-full px-1 overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">

                        <div
                            className="pb-20 pl-10 mt-20 mb-20 title wow fadeInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="1000ms"
                        >
                            <Title
                                bgtext="Services"
                                titletext="Services"
                            />
                        </div>
                    </div>

                    <div className="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                        <Pointing />
                    </div>

                </div>

            </div>

            <div class="flex flex-wrap overflow-hidden md:-mx-2 lg:-mx-2 xl:-mx-2">
            <ul className="c-services">

<div class="w-full overflow-hidden sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
<li className="c-services__item">
<h3 className="order-1 text-3xl font-black mulish">Branding, Strategy, Creative+</h3>
                    <p><em>We also offer: CMO-on-demand/marketing decision services, design, campaign execution, sales strategy, sales enablement via asset production, pitch development, martech stack design, salestech stack design, and website strategy.</em></p>
                </li>

</div>

<div class="w-full overflow-hidden sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
<li className="c-services__item">
                    <h3 className="order-2 text-3xl font-black mulish">Marketing Strategy</h3>
                    <p><em>Do you know how parents always say, "I wish there was a manual on parenting?" That's kind of what our strategies are, except for business growth.  </em></p>
                </li></div>

<div class="w-full overflow-hidden sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
<li className="c-services__item">
                    <h3 className="order-3 text-3xl font-black mulish">Branding</h3>
                    <p>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</p>
                </li></div>

<div class="w-full overflow-hidden sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
<li className="c-services__item">
                    <h3 className="order-4 text-3xl font-black mulish">Creative</h3>
                    <p><em>Have your teams' ideas fallen a bit flat as of late? Has your agency just rehashing old material?  Just need something punchy and original?  Whether your creative needs a complete overhaul or just a bit of an infusion, we got you covered without upsetting your current relationships.  We are on a mission to change the world, one idea at a time.  </em></p>
                </li>
                </div>

<div class="w-full overflow-hidden sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
<li className="c-services__item">
                    <h3 className="order-5 text-3xl font-black mulish">Content </h3>
                    <p><em>This is not your intern's SEO-packed, boring Wikipedia entry! Your content needs to grab the attention of your target market and hold it. This takes a special blend of sales, marketing, and wordsmithing. We believe a hundred amazing words will change the world for your business, not a hundred mediocre articles.</em></p>
                </li></div>

<div class="w-full overflow-hidden sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
<li className="c-services__item">
                    <h3 className="order-6 text-3xl font-black mulish">Website & Martech</h3>
                    <p><em>
           The base of your marketing efforts and the epicenter of your marketing effectiveness gauge. We assess, rethink, and offer tactical steps to lift impact of the homebase of your efforts.</em></p>
                </li></div>
                </ul>

</div>







            </section>
            </>)
}

export default Services
