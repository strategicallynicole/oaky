import React from "react"
/* This example requires Tailwind CSS v2.0+ */

  import Arrow from "../Illustrations/Icons/arrow.svg";
  import Book from "../Illustrations/Icons/book.svg";
  import Bulb from "../Illustrations/Icons/bulb.js";
  import Brain from "../Illustrations/Icons/brain.js";
  import Compass from "../Illustrations/Icons/compass.js";
  import Cow from "../Illustrations/Icons/cow.svg";
  import Dart from "../Illustrations/Icons/dart.js";
  import Dial from "../Illustrations/Icons/dial.js";
  import Earth from "../Illustrations/Icons/earth.svg";
  import Brand from "../Illustrations/Icons/brand.js";
  import Pencil from "../Illustrations/Icons/pencil.js";
  import Poison from "../Illustrations/Icons/poison.svg";
  import Surprised from "../Illustrations/Icons/surprised.svg";
  import Telescope from "../Illustrations/Icons/telescope.svg";
 import { StaticImage } from 'gatsby-plugin-image'
import './iconclasses.css';


import Title from "../Titles/h2"

  const features = [
    { name: 'Marketing Strategy', class: '', icon: Compass, description: 'Do you know how parents always say, "I wish there was a manual on parenting?" That\'s kind of what our strategies are, except for business growth.  ' },
    { name: 'Branding', icon: Brand, class: '', description: 'Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.' },
    { name: 'Creative', icon: Bulb, class: '', description: 'Whether your creative needs a complete overhaul or just a bit of an infusion, we got you covered without upsetting your current relationships.  We are on a mission to change the world, one idea at a time.  ' },
    { name: 'Content', icon: Pencil, class: '', description: 'This is not your intern\'s SEO-packed, boring Wikipedia entry! Your content needs to grab the attention of your target market and hold it. This takes a special blend of sales, marketing, and wordsmithing. We believe a hundred amazing words will change the world for your business, not a hundred mediocre articles.' },
    { name: 'Website & Martech', class: '', icon: Dial, description: 'The base of your marketing efforts and the epicenter of your marketing effectiveness gauge. We assess, rethink, and offer tactical steps to lift impact of the homebase of your efforts.' },
    { name: 'Branding, Strategy, Creative+', class: '', icon: Dart, description: 'We also offer: CMO-on-demand/marketing decision services, design, campaign execution, sales strategy, sales enablement via asset production, pitch development, martech stack design, salestech stack design, and website strategy.' },
  ];

  export default function Services() {
    return (
        <>
        <section className="pt-20 bg-fixed bg-top bg-no-repeat bg-cover bg-wallpaper">
            <a name="services" id="services"></a>
        <div className="w-full px-16"><Title bgtext="Services" titletext="What We Do" />
     </div>

      <div className="relative py-16 sm:py-24 lg:py-32">


        <div className="max-w-full px-6 mx-auto text-center sm:max-w-full sm:px-6 lg:px-8 lg:max-w-full">


          <div className="mt-12">
            <div className="grid w-full grid-cols-1 gap-5 min-h-48 sm:grid-cols-1 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root px-10 pb-8 border-gray-200 rounded-lg shadow-lg min-h-fit py-30 bg-blurred sm:rounded-3xl sm:p-16 bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-filter-blur">
                    <div className="p-10 -mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 shadow-lg rounded-xl">
                       <div className={`w-full p-50 ${feature.class}`}>{feature.icon}</div>
                        </span>
                      </div>
                      <h3 className="mt-8 text-5xl tracking-tight text-white font-heaviest montserrat">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-50 mulish">
                      {feature.description}                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
    )
  }
