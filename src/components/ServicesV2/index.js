import React, {Component, useComponent} from 'react';
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBullhorn,
    faChevrondown,

} from '@fortawesome/pro-thin-svg-icons';
class Service extends Component {
    state = { isFlipped: false }

    toggleFlip = () => {
      this.setState({
        isFlipped: !this.state.isFlipped
      })
    }

    render() {
      const cardVis = this.state.isFlipped ? 'is-flipped' : '';
      return (

        <div className="flex flex-wrap overflow-hidden">

              <div className="w-1/2 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">

              <div className="wrapper">

            <div className={`card ${cardVis}`} onClick={this.toggleFlip}>
                    <div className="card__face card__face--front"> <FontAwesomeIcon icon={faBullhorn}
                    />Creative</div>
                    <div className="card__face card__face--back details">Have your teams' ideas fallen a bit flat as of late? Has your agency just rehashing old material? Just need something punchy and original? Whether your creative needs a complete overhaul or just a bit of an infusion, we got you covered without upsetting your current relationships. We are on a mission to change the world, one idea at a time.</div>
                  </div>
                  </div>  </div>

              <div className="w-1/2 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">

              <div className="wrapper">

              <div className="card" className={this.state.active ? 'is-flipped': null} onClick={this.toggleClass}>
              <div className="card__face card__face--front " onClick={this.handleClick}><FontAwesomeIcon icon="fa-thin fa-bullhorn" />Branding</div>
              <div className="card__face card__face--back" onClick={this.handleClick}>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</div>
            </div>
            </div>
            </div>

            <div className="w-1/2 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">

<div className="wrapper">

<div className="card" className={this.state.active ? 'is-flipped': null} onClick={this.toggleClass}>
<div className="card__face card__face--front " onClick={this.handleClick}><FontAwesomeIcon icon="fa-thin fa-bullhorn" />Branding</div>
<div className="card__face card__face--back" onClick={this.handleClick}>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</div>
</div>
</div>
</div>
<div className="w-1/2 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">

<div className="wrapper">

<div className="card" className={this.state.active ? 'is-flipped': null} onClick={this.toggleClass}>
<div className="card__face card__face--front " onClick={this.handleClick}><FontAwesomeIcon icon="fa-thin fa-bullhorn" />Branding</div>
<div className="card__face card__face--back" onClick={this.handleClick}>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</div>
</div>
</div>
</div>
<div className="w-1/2 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">

<div className="wrapper">

<div className="card" className={this.state.active ? 'is-flipped': null} onClick={this.toggleClass}>
<div className="card__face card__face--front " onClick={this.handleClick}><FontAwesomeIcon icon="fa-thin fa-bullhorn" />Branding</div>
<div className="card__face card__face--back" onClick={this.handleClick}>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</div>
</div>
</div>
</div>
<div className="w-1/2 overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3">

<div className="wrapper">

<div className="card" className={this.state.active ? 'is-flipped': null} onClick={this.toggleClass}>
<div className="card__face card__face--front " onClick={this.handleClick}><FontAwesomeIcon icon="fa-thin fa-bullhorn" />Branding</div>
<div className="card__face card__face--back" onClick={this.handleClick}>Unifying your organization behind a single voice, position, slogan, and value proposition is critical to your success. We make this process painless and actually fun.</div>
</div>
</div>
</div>
            </div>




       )
    }
  }



export default Service;
