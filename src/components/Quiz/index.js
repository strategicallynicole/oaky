import React, { useState } from "react"
import ScoreMe from "./ScoreMe"
import "./index.scss"
import Title from '../Titles/h2.js'

function Quiz() {
    const questions = [
        {
            questionText:
        `Do any of the following reflect the experience you've had with agencies thus far?`,
            answerOptions: [
                { answerText: `Overpriced`, isCorrect: true },
                { answerText: `Bloated and Fruitless`, isCorrect: true },
                { answerText: `Slow`, isCorrect: true },
                { answerText: `None of these reflect MY agency`, isCorrect: false },
                { answerText: `Never Worked With an Agency`, isCorrect: true },
            ],
        },
        {
            questionText:
        `Do you run/work for a good company offering a good product/service?  `,
            answerOptions: [
                {
                    answerText:
            `My offering is solid.  It's other things that are shaky.`,
                    isCorrect: true,
                },
                { answerText: `My offering isn't there yet.`, isCorrect: true },
                { answerText: `I hate my company.`, isCorrect: false },
            ],
        },
        {
            questionText:
        `Which of the following best reflects your feelings about marketing?`,
            answerOptions: [
                { answerText: `Marketing is bullshit.`, isCorrect: true },
                {
                    answerText:
            `I don't care.  Can you just give me something that works?`,
                    isCorrect: true,
                },
                {
                    answerText: `I need leads.  Or a lifeline.  Or something.`,
                    isCorrect: true,
                },
                {
                    answerText:
            `Marketing is the process by which we inform our target buyers of our offering.`,
                    isCorrect: false,
                },
            ],
        },
        {
            questionText:
        `Which of the following best reflects your feelings about branding?`,
            answerOptions: [
                {
                    answerText:
            `Expensive rebrand exercises are really gigantic wastes of time and energy.`,
                    isCorrect: true,
                },
                {
                    answerText:
            `I don't care about all that hippy nonsense, I'm just trying to get leads.`,
                    isCorrect: true,
                },
                { answerText: `My brand is perfect and amazing.`, isCorrect: true },
                {
                    answerText:
            `My brand... is a pathetic mish-mash of disparate assets and elements that don't fit togehter and don't reflect my organization.`,
                    isCorrect: true,
                },
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1)
        }

        const nextQuetions = currentQuestion + 1
        if (nextQuetions < questions.length) {
            setCurrentQuestion(nextQuetions)
        } else {
            setShowScore(true)
        }
    }
    const scorePercent = (score / 4) * 100
    return (
        <>

            <section className="w-full my-10 lg:mx-30 lg:px-30">
                <Title
                    bgtext="Compatibility"
                    titletext="Matchmaker"
                />

                <p className="text-xl text-white lg:px-28 mulish">With our patented  (by patented, we mean, not patented) eliminate-the-BS client->agency compatibility quiz, you can save so much time and energy.</p>
                <div className="app">
                    {showScore ? (
                        <div className="score-section"> <div className="italic text-white bg-transparent font-heavy mulish">
            <p className="text-3xl text-white font-heavy">According to the all-seeing-eye, we are {scorePercent}% compatible</p>
                            <br />
                            <br />
                            <ScoreMe score={scorePercent} /></div>
                        </div>
                    ) : (
                        <>
                            <div className="question-section">
                                <div className="question-text">
                                    {questions[currentQuestion].questionText}
                                </div>

                                {questions[currentQuestion].answerOptions.map(answerOptions => (
                                    <button
                                        onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)
                                        }
                                    >
                                      {answerOptions.answerText}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div></div>
            </section>
        </>
    )
}

export default Quiz
