import { makeStyles, Theme } from "@material-ui/core"
import * as React from "react"
import { Planet } from "./planet"
import { generateSatellites } from "./generateSatellites"

export default function Model() {
    return (
        <div className="strategicmodel">
            <Planet
                mass={4}
                tension={500}
                friction={19}
                satelliteOrientation="readable"
                centerContent={<div
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: `50%`,
                        backgroundColor: `#9257ad`,
                    }}
                >Context</div>}
                open
                orbitRadius={100}
            >
                <Planet
                    mass={4}
                    satelliteOrientation="readable"

                    tension={500}
                    friction={19}
                    centerContent={<div
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: `50%`,
                            backgroundColor: `#9257ad`,
                        }}
                    />}
                    autoClose
                >
                    <Planet
                        mass={4}
                        orbitRadius={300}
                        tension={500}
                        friction={19}
                        satelliteOrientation="readable"

                        centerContent={<div
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: `50%`,
                                backgroundColor: `#6c5ba7`,
                            }}
                        />}
                        autoClose
                        open
                    > <div
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: `50%`,
                                backgroundColor: `#9257ad`,
                            }}
                        />
                        <div
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: `50%`,
                                backgroundColor: `#9257ad`,
                            }}
                        />
                    </Planet>

                </Planet>
                <Planet
                    mass={4}
                    tension={500}
                    friction={19}
                    satelliteOrientation="readable"

                    centerContent={<div
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: `50%`,
                            backgroundColor: `#9257ad`,
                        }}
                    />}
                    autoClose
                    open
                >
                    {generateSatellites(3)}
                </Planet>
                <Planet
                    mass={4}
                    tension={500}
                    friction={19}
                    satelliteOrientation="readable"

                    centerContent={
                        <div
                            style={{
                                height: 70,
                                width: 70,
                                borderRadius: `50%`,
                                backgroundColor: `#9257ad`,
                            }}
                        >vision</div>
                    }
                    autoClose
                >
                    {generateSatellites(3)}
                </Planet>
            </Planet>
        </div>
    )
}
