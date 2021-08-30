/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 15/06/2021 - 15:53:42
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 15/06/2021
 * - Author          :
 * - Modification    :
 **/
'use strict'
const { Container, Spacing, Typography, RatioBox, Layout, Keyline, PseudoElements, GridGap, GridLine } = require('@area17/a17-tailwind-plugins');
const colors = require('tailwindcss/colors');



module.exports = {
    purge: [`./public/**/*.{js,jsx,ts,tsx}`],
    darkMode: `media`,
    corePlugins: {
        container: false
      },

    theme: {
            zIndex: {
              '0': 0,
             '10': 10,
             '20': 20,
             '30': 30,
             '40': 40,
             '50': 50,
             '25': 25,
             '50': 50,
             '75': 75,
             '100': 100,
             '0100': -100,
              'auto': 'auto',
            },

            fluidContainer: {
              'default': {
                maxWidth: null, // defaults to null (no max width)
                padding: '15px', // defaults to '15px'
              },
            },


        colors: {
            transparent: `transparent`,
            current: `currentColor`,
            white: `#efefef`,
            gray: `#bbbbbbb`,
            indigo: `#3366FF`,
            purple: `#6633FF`,
        },
        screens: {
            xs: { max: '543px' },
            sm: '544px',
            md: '766px',
            lg: '1023px',
            xl: '1440px'
          },
          mainColWidths: {
            xs: 'auto',
            sm: 'auto',
            md: 'auto',
            lg: 'auto',
            xl: '1376px'
          },
          outerGutters: {
            xs: '16px',
            sm: '16px',
            md: '32px',
            lg: '32px',
            xl: 'auto'
          },
          innerGutters: {
            xs: '16px',
            sm: '16px',
            md: '24px',
            lg: '24px',
            xl: '24px'
          },
          columnCount: {
            xs: 4,
            sm: 4,
            md: 8,
            lg: 12,
            xl: 12
          },
        padding: {
            30: '30px',
            10: '10px',
            20: '20px',
            25: '25px',
            40: '40px',
            50: '50px',
            16: '16px',
            8: '8px',
            6: '6px',
        },
        borderRadius: {
            DEFAULT: `20px`,
            '4xl': `2.5rem`,
            '3xl': `2rem`,
        },
        fontSize: {
            tiny: `0.9rem`,
            xs: `1.0rem`,
            base: `1.2rem`,
            sm: `1.2rem`,
            md: `1.4rem`,
            lg: `1.6rem`,
            xl: `1.8rem`,
            '2xl': `2rem`,
            '3xl': `2.2rem`,
            '4xl': `2.4rem`,
            '5xl': `3rem`,
            '6xl': `4rem`,
            '7xl': `5rem`,
            '8xl': `6rem`,
            '9xl': `7rem`,
            '15xl': `15rem`,
            '20xl': `20rem`,
        },
        boxShadow: {
            default: `2px 2px 1px #171040, 3px 3px 1px #171040, 4px 4px 1px #171040, 5px 5px 1px #171040, 6px 6px 1px #171040`,
            purple: `3px 5px 1px #21076E`,
            lightblue: `3px 5px 1px #0B4C78`,
            blue: `3px 5px 1px #162F7C`,
            lg: `3px 5px 1px #000000`,
            orange: `3px 5px 1px #A65512`,
        },
        filter: {
            none: `none`,
            grayscale: `grayscale(1)`,
            invert: `invert(1)`,
            sepia: `sepia(1)`,
        },
        backdropFilter: {
            none: `none`,
            blur: `blur(20px)`,
        },
        minHeight: {
            fit: 'fit-content',
            200: '200px',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
            screen: 'screen',
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        'max-width': `85ch`,
                        color: `#bbbbbb`,
                        strong: {
                            color: `#6633FF`,
                        },
                    },
                },
            },
            borderColor: (theme) => {
                return {
                    DEFAULT: theme(`colors.indigo.500`, `currentColor`),
                    purple: theme(`colors.purple.500`),
                    blue: theme(`colors.blue.500`),
                    gray: theme(`colors.gray.500`),
                    indigo: theme(`colors.indigo.500`),
                    pink: theme(`colors.pink.500`),
                }
            },
            spacingGroups: (theme) => ({
                'inner-gutter': theme('innerGutters'),
                'outer-gutter': theme('outerGutters'),
                'outer-1': {
                  xs: theme('spacing.16'),
                  lg: theme('spacing.24')
                },
                'inner-1': {
                  xs: theme('spacing.6'),
                  md: theme('spacing.10'),
                  lg: theme('spacing.16')
                },
                'inner-2': {
                  xs: theme('spacing.4'),
                  md: theme('spacing.6'),
                  lg: theme('spacing.8')
                },
              }),
            borderColor: (theme) => {
                return {
                    DEFAULT: theme(`colors.white.500`, `currentColor`),
                    indigo: theme(`colors.indigo.500`),
                    'gray-200': theme(`colors.gray.200`),
                }
            },
            borderRadius: {
                DEFAULT: `2.5rem`,
                lg: `1.5rem`,
                '4xl': `2.5rem`,
            },
            backgroundImage: (theme) => {
                return {
                    waves: `url('../images/waves.svg')`,
                    blurred: `linear-gradient(90deg, rgba(41, 41, 41, .3) 2.11%, rgba(0, 0, 0, .3) 104.85%)`,
                    gradient: `linear-gradient(90deg, #6633FF 40.47%, #3366FF 78.75%, #0099FF 105%)`,
                    wallpaper: `url('../images/wallpaper.svg')`,
                    'black-gradient': `linear-gradient(90deg, #292929 2.11%, #000000 104.85%)`,
                }
            },
            colors: {
                transparent: `transparent`,
                white: {
                    DEFAULT: `#FFFFFF`,
                    500: `#FFFFFFF`,
                },
                purple: {
                    DEFAULT: `#6633FF`,
                    50: `#CDBDFF`,
                    100: `#C2ADFF`,
                    200: `#AB8FFF`,
                    300: `#9470FF`,
                    400: `#7D52FF`,
                    500: `#6633FF`,
                    600: `#571FFF`,
                    700: `#470AFF`,
                    800: `#3D00F5`,
                    900: `#3800E0`,
                },
                indigo: {
                    DEFAULT: `#3366FF`,
                    50: `#BDCDFF`,
                    100: `#ADC2FF`,
                    200: `#8FABFF`,
                    300: `#7094FF`,
                    400: `#527DFF`,
                    500: `#3366FF`,
                    600: `#1F57FF`,
                    700: `#171040`,
                    800: `#003DF5`,
                    900: `#0038E0`,
                },
                orange: {
                    DEFAULT: `#FE943C`,
                    50: `#FFFFFF`,
                    100: `#FFFFFF`,
                    200: `#FFE8D4`,
                    300: `#FFCCA1`,
                    400: `#FEB06F`,
                    500: `#FE943C`,
                    600: `#FE7809`,
                    700: `#D36001`,
                    800: `#A04901`,
                    900: `#A65512`,
                },
                pink: {
                    DEFAULT: `#EA4C89`,
                    50: `#F8C7DA`,
                    100: `#F7BAD1`,
                    200: `#F49EBF`,
                    300: `#F083AD`,
                    400: `#ED679B`,
                    500: `#EA4C89`,
                    600: `#E73177`,
                    700: `#DF1A66`,
                    800: `#C31759`,
                    900: `#A8144D`,
                },
                blue: {
                    DEFAULT: `#0099FF`,
                    50: `#8AD0FF`,
                    100: `#7ACAFF`,
                    200: `#5CBEFF`,
                    300: `#3DB1FF`,
                    400: `#1FA5FF`,
                    500: `#0099FF`,
                    600: `#008DEB`,
                    700: `#0081D6`,
                    800: `#0B4C78`,
                    900: `#162F7C`,
                },
                gray: {
                    DEFAULT: `#b2b2b2`,
                    50: `#f6f6f6`,
                    100: `#6e6e6e`,
                    200: `#666666`,
                    300: `#555555`,
                    400: `#444444`,
                    500: `#b2b2b2`,
                    600: `#3e3e3e`,
                    700: `#333333`,
                    800: `#212121`,
                    900: `#121212`,
                },
                black: {
                    DEFAULT: `#121212`,
                    50: `#f6f6f6`,
                    100: `#666666`,
                    200: `#444444`,
                    300: `#333333`,
                    400: `#212121`,
                    500: `#121212`,
                    600: `#000000`,
                    700: `#333333`,
                    800: `#121212`,
                    900: `#000000`,
                },
            },
        },
    },
    variants: {

      fluidContainer: ['responsive'], // defaults to ['responsive']
    },
    plugins: [

        require(`@tailwindcss/typography`),
        require(`tailwind-bootstrap-grid`),
        require(`@tailwindcss/forms`),
        require(`@tailwindcss/line-clamp`),
        require(`@tailwindcss/aspect-ratio`),
        require(`tailwindcss-filters`),
        require('@tailwindcss/aspect-ratio'),
        require(`tailwindcss-text-fill-stroke`), // no options to configure
        require('tailwindcss-fluid-container'),

    ],
}
