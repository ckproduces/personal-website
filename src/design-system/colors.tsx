const colors = {
  primary: (alpha: number = 1) => {
    return "hsla(220, 94%, 72%, " + alpha + ")";
  },
  primaryMedium: (alpha: number = 1) => {
    return "hsla(220, 94%, 52%, " + alpha + ")";
  },
  primaryDark: (alpha: number = 1) => {
    return "hsla(220, 94%, 22%, " + alpha + ")";
  },
  black: (alpha: number = 1) => {
    return "hsla(220, 94%, 15%, " + alpha + ")";
  },
};

export default colors;
