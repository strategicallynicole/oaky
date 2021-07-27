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
 import './icons.scss';

const Pencil = (
             <StaticImage
                 src="./pencil.svg"
                 alt="Content"
                 layout="constrained"
                 className="w-full animate-enter icon"
             />
);
export default Pencil;
