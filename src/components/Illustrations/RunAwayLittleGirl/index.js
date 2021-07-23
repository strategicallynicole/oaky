/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 22/06/2021 - 19:53:19
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/06/2021
 * - Author          :
 * - Modification    :
 **/
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from "./index.module.scss"

export default function RunAwayLittleGirl() {
    return (
        <div className="mobileimageholder">
            <div className={styles.imgholder}>
                <StaticImage
                    src="./runawaylittlegirl.webp"
                    alt="Run Away Little Girl"
                    layout="fullWidth"
                    className={styles.runawaylittlegirl, styles.animateEnter, styles.running}
                />
            </div>
        </div>
    )
}
