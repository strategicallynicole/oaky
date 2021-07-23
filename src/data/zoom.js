import React, { Component } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

class Example extends Component {
    render() {
        return (
            <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <div className="tools">
                            <button onClick={zoomIn}>+</button>
                            <button onClick={zoomOut}>-</button>
                            <button onClick={resetTransform}>x</button>
                        </div>
                        <TransformComponent>
                            <div>Example text</div>
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        )
    }
}
export default Example
