import { makeStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { Planet } from "./planet";
import { generateSatellites } from "./generateSatellites";



export default function Model() {


    return (
        <div className="strategicmodel">
          <Planet
          mass={4}
          tension={500}
          friction={19}
            centerContent={<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>}
            open
            orbitRadius={220}
          >
            <Planet
            mass={4}
            tension={500}
            friction={19}
              centerContent={<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>}
              autoClose
            >
              {generateSatellites(3)}
            </Planet>
            <Planet
            mass={4}
            tension={500}
            friction={19}
              centerContent={<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
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
              centerContent={
              <div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			>vision</div>
}
              autoClose
            >
              {generateSatellites(3)}
            </Planet>
          </Planet>
        </div>
      )};
