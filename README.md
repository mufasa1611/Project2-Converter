
# Welcome to my online Units Converter Tool!

![Mockup](assets/pic/mockup.light.png)

![Mockup](assets/pic/mockup.dark.png)

You can find the live website [here](https://mufasa1611.github.io/Project2-Converter/)

## Index - Table of Contents

- [Design](#design)
   - [Wireframes](#wireframes)
   - [Font and Colours](#fonts-and-colours)

- [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)

- [UX](#ux)
    - [Site Goals](#site-goals)
    - [User Stories](#user-stories)

- [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Browser Testing](#browser-testing)
    - [Manual Testing](#manual-testing)
    - [Fixed Bugs](#fixed-bugs)
 
- [Deployment](#deployment)

- [Credits](#credits)
    - [Media](#media)
    - [Code](#code)
   
   ## Design

### Wireframes

for desktop and mobile:
![Desktop](assets/pic/Converter-Desk.png) 

![](assets/pic/Converter-Mobile.png)


### Fonts and Colours
- I chose the free 'RobotoSerif_UltraC' and 'RobotoSerif_Thin' for the whole page because I think they are a good match and to stay consistent for better user accessibility. The fonts were downloaded from google fonts and are placed in the local folder "fonts".

- The colors were chosen considering good contrasts for better readability.

## Features

### Existing Features

- When entering the site, the user sees a blue button on top of the page called "Toggle Color Scheme" giving the user the choice to toggle between a default light color scheme and a dark/green color scheme. The button changes color when the mouse hovers over it.

![Color toggle button](assets/pic/color.toggle.png)

light color scheme:
![light color scheme](assets/pic/light.png) 

dark/green color scheme:
![dark color scheme](assets/pic/dark2.png).

- Under the color toggle button is a box titled "Units Converter Tool", featuring a drop down box from which the user is asked to select a unit system. Once the user selects a unit system, the instructions under the box disappear.

![first](assets/pic/first.png)

- After selecting the unit system, the box expands to show drop-down boxes to select a  unit to convert from and a unit to convert to, as well as an input field to enter a decimal value. Below this field is a convert button to start the conversion process. The convert button also changes colors when the mouse hovers it. Also the instructions under the drop-down boxes disappear, once the user selects the desired units.

![second](assets/pic/second2.png)

- After pressing the convert button, a second box appears below showing the conversion result for one unit and the converted value with one decimal place. An invalid entry in the "enter value" field will display a pop-up message asking the user to input a valid decimal number. If a valid decimal number is entered,the instructions below the box disappear.

![invalid.popup](assets/pic/invalid.popup.png)

- When converting a valid decimal number, a drop-down box appears beneath with instructions below, asking the user to select the desired decimal places for the result from 1 to 9 decimal places and to press the "update decimal" button. The converted value is then shown updated as per the user preference. This button as well changes its color when the mouse hovers over it.

![third](assets/pic/third2.png)

### Future Features
 - possible future features inlcude online conversion for other units such as for area and weight
 - I would like the updated result to show the converted value with the desired decimal places immediately, when the user selects the decimal places

## UX
   
### Site Goals
- the idea is to provide an easy to use, useful, useful online conversion tool for common units, giving the user the choice to select the units, the desired decimal places for the result and to toggle between two color schemes.

### User Stories
- the site and the tool should be easy to navigate and to use, the instructions easy to understand and to follow, the site useful and interesting to interact with.

## Technologies used
- [Balsamiq](https://balsamiq.com/) was used to pre-design the layout
- [GitHub](https://github.com/) was used to host the deployed website
- Screenshots were taken with [FireShot](https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg)
- [Gitpod](https://www.gitpod.io/) was used as environment to write and develop the code 

## Languages used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

## Testing

### Validator Testing

- CSS Testing on [W3C Validation Service](https://jigsaw.w3.org/css-validator/) found no error

![CSS](assets/pic/css.png)

- HTML Testing on [W3C Validation Service](https://jigsaw.w3.org/css-validator/) showed no errors or warning

![HTML](assets/pic/html.png)

- when running the JS File on [JSHint](https://jshint.com/) no major issues were found

- testing on [Wave](https://wave.webaim.org) showed no error

### Browser Testing

### Testing

- I tested playing this game in different browser: Chrome, Firefox,Safari.

- I confirmed that the conversion results are correct.

- I confirmed that the instructions, options, results and text are all readable and easy to understand.
 
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar.

- Lighthouse Test report for desktop:

![Desktop](assets/pic/desk.png)

- Lighthouse Test report for mobile:

![Mobile](assets/pic/mob.png)

### Fixed Bugs
When first running the W3C validation Service, 

- a stray div end tag was found
- a duplicate id was found the html file

These errors were corrected.

## Deployment
The steps to deploy a website on GitHub pages are:

- Open the repository and go to the Settings tab
- Navigate to the Pages tab in the left menu
- Choose Deploy from a branch and select your branch, which is main in most cases
- Click save 
- The link to the deployed website can then be found in the repository on the right menu under Environments

- The link to my live site is here: [https://mufasa1611.github.io/Project2-Converter/](https://mufasa1611.github.io/Project2-Converter)

## Credits

### Media and Code
I took inspiration and ideas for the converter and the code from the following sources:

- [Sujayroutcs Unit Converter](https://github.com/Sujayroutcs/CodeClause_project1_UnitConverter/blob/main/script.js)

- [Robsd example js unit converter](https://github.com/robsd/js-unit-converter/blob/main/js/script.js)

- [hiding and removing elements in the dom in js from tpiros](https://tpiros.dev/blog/iding-removing-elements-in-dom-using-javascript/)

- [Kevin Powells youtube tutorial on the color scheme toggle in js](www.youtube.com/watch?v=n3lcjY4Mm00)

- [Convertee from isquaredcreative](https://isquaredcreative.github.io/Convertee)

- [basic react functions from stackblitz](https://stackblitz.com/edit/react-h2yrd2?file=index.js)

CSS references:

- [Box Shadow by Dev. Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

- [CSS variable switcher by lukelowrey](https://lukelowrey.com/css-variable-theme-switcher)

## Acknowledgements

**Big Thanks to:**

- My Mentor [Jack Wachira](https://code-institute-room.slack.com/team/U01GBLV8S9L) for his help, advice and input throughout this project and for his extra time. 

- My Facilitator [Kay Ci](https://code-institute-room.slack.com/team/U056NU8DZEW) for her continous support and for guidance to the information I needed.








