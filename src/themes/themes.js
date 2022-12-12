import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const activeLabelStyles = {
  transform: "scale(0.8) translateY(-5px)",
  color: "rgba(0,0,0,0.9)",
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: colors.primaryText,
        lineHeight: "tall",
        margin: "0px",
        padding: "0px",
        // backgroundColor: colors.background,
      },
      h1: {
        // you can also use responsive styles
        fontSize: "56px",
        fontWeight: "bold",
      },
      h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
      h5: {
        fontWeight: "500",
        color: colors.light,
      },
      // section: { marginTop: "8rem" },
    },
    //   a: {
    //     color: colors.primary,
    //     transition: "all 400ms ease",
    //   },
  },

  fonts: {
    // heading: `'Lato', sans-serif`,
    // body: `'Lato', sans-serif`,
  },
  direction: "rtl",

  // colors: {
  //   primary: "#4db5ff",
  // },

  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label,select:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              fontSize: "1.125rem",
              position: "absolute",
              backgroundColor: "transparent",

              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
  breakpoints: {
    sm: "22.563em",
    md: "25.9em",
    lg: "80.5em",
    xl: "120em",
  },
});

export default theme;
// sm: "360px",
// md: "414px",
// lg: "1366px",
// xl: "1920px",

//all headers 2 & 5 inside the sections will have the color light
