import { Impress, Step } from 'react-impressjs'
import 'react-impressjs/styles/impress-demo.css'
import 'react-impressjs/styles/react-impressjs.css'

export default function index() {
    return (
        <>
            <section className="w-full mx-20 my-10 bg-wallpaper">

                <Impress fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}>
                    <Step id={`title`} data={
                        {
                            x: 20,
                            y: -0,
                            z: -100,
                            scale: 4,
                        }}>   <div id="title" className="step" data-x="20" data-y="0" data-z="-100" data-scale="4">
                            <div className="centerstuff">  <h1 className="underline stolzl textwhite text-9xl">Hi.</h1>
                                <img className="hi" src="./illustrations/welcome.svg" /></div>

                        </div></Step>
                    <Step id={`any_id`} className={`class_name`} />
                    <Step className={`without_id_is_ok`}
                        data={
                            {
                                x: 100,
                                y: -100,
                                scale: 2,
                            }}/>
                    <Step duration={1500}>
                        <h1>Any Element write in Step!</h1>
                        <hr />
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                </Impress>
            </section>
        </>
    )
}

