import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      $bgc: string;
      $bodyText: string;
      $textStandout: string;
      $textSecondary: string;
      $highlight: string;
      $highlightSecondary: string;
      $desaturated: string;
    };
    space: {
      $1: string;
      $2: string;
      $3: string;
      $4: string;
      $5: string;
      $6: string;
    };
    fontSizes: {
      $1: string;
      $2: string;
      $3: string;
      $4: string;
    };
    fonts: {
      $serif: string;
      $sans: string;
      $mono: string;
    };
  }
}
