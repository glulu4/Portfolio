// type Style = React.CSSProperties;

// type NamedStyles: React.CSSProperties = {
//   [P in keyof T]: Style;
// };

// function createStyles<T extends NamedStyles<T>>(styles: T): T {
//   return styles as React.CSSProperties
// }

// export default createStyles;


type Style = React.CSSProperties;

function createStyles(styles: Record<string, Style>): Record<string, Style> {
  return styles;
}

export default createStyles;
