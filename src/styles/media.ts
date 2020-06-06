const mediaQuery = (minWidth: number) => `
  @media (min-width: ${minWidth}px)
`;

export const media = {
  large: mediaQuery(1140),
  medium: mediaQuery(768),
  small: mediaQuery(375),
  custom: mediaQuery,
};
