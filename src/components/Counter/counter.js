import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import * as styles from "./counter.module.scss";
import Title from  "../Titles/h2.scss";
import Pointing from '../Illustrations/Pointing/index'


class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : 247,
                countTitle: 'Strategies Delivered',
            },
            {
                countNum : 416,
                countTitle: 'Brands Birthed/Rebirthed',
            },
            {
                countNum : 1827,
                countTitle: 'Websites Launched',
            },
        ];

        return(
            <Fragment>


<div class="flex flex-wrap overflow-hidden md:-mx-2 lg:-mx-2 xl:-mx-2">


{Data.map( (value, index) => (
    <div className="w-full overflow-hidden h-96 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">

                        <div className={styles.counterholder}>
                        <div className={styles.counteruparea} key={index}>
                            <h5 className={styles.counter}><div className="gradienttext text-15xl h-fit">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor></div>
                            </h5><div className="text-white">
                            <p className={styles.description}>{value.countTitle}</p></div>
                        </div>
                        </div>
                        </div>
                    ))}
</div>



            </Fragment>
        )
    }
}
export default CounterOne;
