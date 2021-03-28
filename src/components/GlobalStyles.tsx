import { Global, withTheme, css, Theme } from "@emotion/react";

const GlobalStyles = ({ theme }: { theme: Theme }) => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }

      * {
        box-sizing: border-box;
      }

      *::before {
        box-sizing: border-box;
      }

      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background-color: ${theme.colors.$bgc};
        color: ${theme.colors.$bodyText};
        font-family: ${theme.fonts.$sans};
        line-height: 1.4;

        @media (min-width: 640px) {
          font-size: ${theme.fontSizes.$2};
        }
      }

      h1 {
        margin: 0 0 1em;
        color: ${theme.colors.$textStandout};
        font-family: ${theme.fonts.$serif};
        font-weight: bold;
        font-size: ${theme.fontSizes.$4};
      }

      h2 {
        margin: 0 0 0.8em;
        color: ${theme.colors.$textStandout};
        font-family: ${theme.fonts.$serif};
        font-weight: bold;
      }

      h3 {
        margin: 1em 0 0.5em;
        color: ${theme.colors.$textStandout};
        font-family: ${theme.fonts.$serif};
        font-weight: bold;
        font-size: ${theme.fontSizes.$3};
      }

      h4 {
        color: ${theme.colors.$textStandout};
        font-family: ${theme.fonts.$serif};
        font-weight: bold;
      }

      p {
        margin: 0 0 0.6em;

        code {
          background-color: ${theme.colors.$bgc};
          border: solid 1px #364663;
          padding: 0.1em 0.3em;
          border-radius: 4px;
          color: #6df;
          font-size: ${theme.fontSizes.$1};
        }
      }

      a {
        color: ${theme.colors.$textStandout};
        padding: ${theme.space.$1};
        text-decoration: none;
        box-shadow: inset 0 -3px 0 ${theme.colors.$highlight};
      }
    `}
  />
);

export default withTheme(GlobalStyles);
