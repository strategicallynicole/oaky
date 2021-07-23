import React from "react"

class ScoreMessage extends React.Component {
    render() {
        const scorePercent = this.props.score
        let scorePercentIntegrer = parseInt(scorePercent, 10)
        const scoreMessage = () => {
            if (scorePercentIntegrer >= 70 || scorePercentIntegrer === 100) {
                return (
                    <>
                        {` `}
            Wow. We were made for each other. With this kind of compatibility,
            it makes you wonder why there's no Tinder for
            marketing/branding/creative. Schedule a call and see how easy we can
            turn it all around for you.{` `}
                    </>
                )
            } else if (scorePercentIntegrer < 70 && scorePercentIntegrer >= 50) {
                return (
                    <>
                        {` `}
            We are more compatible than most relationships out there, plus,
            we're willing to actually work for it. Schedule a call and let's see
            if we can work something out.{` `}
                    </>
                )
            } else if (scorePercentIntegrer < 50) {
                return (
                    <>
                        {` `}
            Unfortunately, we're not super compatible at this moment. But, hey,
            we can learn, we can CHANGE! Schedule a call and let's talk this
            out.{` `}
                    </>
                )
            }
        }
        return scoreMessage()
    }
}

export default ScoreMessage
