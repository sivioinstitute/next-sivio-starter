import { createGlobalStyle } from 'styled-components';
import { nprogress } from './nprogress';

export const GlobalStyles = createGlobalStyle`
 /* CSS color for nprogress */
  
  :root {
    /* Main Colors */
    --sivio-orange: #F15C27;
    --sivio-green: #7FBD42;
    --sivio-nprogress-color: #7FBD42;
    --sivio-blue-grey: #374C5B;
    --sivio-blue-grey-muted: #90a9bc;
    --sivio-light-border: rgba(55, 76, 91, 0.12);
    --sivio-light-text: rgba(55, 76, 91, 0.3);
    --sivio-light-button: rgba(55, 76, 91, 0.5);
    --sivio-light-grey: #EAEAEA;
    --sivio-white: #ffffff;

    /* Fonts */
    --font-size: 16px;
    --font-family: 'TT Commons', Helvetica, Arial, sans-serif;
  }

  ${nprogress}

  @font-face {
      font-family: "TT Commons";
      src: url("/fonts/TT.Commons/TTCommons-Regular.ttf");
      font-display: swap;
  }
  @font-face {
      font-family: "TT Commons Demibold";
      src: url("/fonts/TT.Commons/TTCommons-DemiBold.ttf");
      font-display: swap;
  }
  @font-face {
      font-family: "TT Commons Medium";
      src: url("/fonts/TT.Commons/TTCommons-Medium.ttf");
      font-display: swap;
  }

  @font-face {
      font-family: "TT Commons Bold";
      src: url("/fonts/TT.Commons/TTCommons-Bold.ttf");
      font-display: swap;
  }

  *, html, body {
      font-family: var(--font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
  font-size: var(--font-size);
  font-weight: 500;
  color: var(--sivio-blue-grey);
  overflow-x: hidden;
}

/*** Works on common browsers ***/
::selection {
    background-color: var(--sivio-blue-grey);
    color: #fff;
}

/*** Mozilla based browsers ***/
::-moz-selection {
    background-color: var(--sivio-blue-grey);
    color: #fff;
}

/***For Other Browsers ***/
::-o-selection {
    background-color: var(--sivio-blue-grey);
    color: #fff;
}

::-ms-selection {
    background-color: var(--sivio-blue-grey);
    color: #fff;
}

/*** For Webkit ***/
::-webkit-selection {
    background-color: var(--sivio-blue-grey);
    color: #fff;
}
`;
