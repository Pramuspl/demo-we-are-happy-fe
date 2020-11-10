// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      accentPrimary: string;
      accentSecondary: string;
      primary: string;
      secondary: string;
      bakground: string;
      primaryText: string;
      secondaryText: string;
    };
    mobile: string;
  }
}
