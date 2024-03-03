import React, {useMemo} from 'react';
import {DefaultTheme, MD3Theme, PaperProvider} from 'react-native-paper';

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const theme = useMemo(
    () =>
      ({
        ...DefaultTheme,
        fonts: {
          ...DefaultTheme.fonts,
          default: {fontFamily: 'PlusJakartaSans-Regular'},
        },
        colors: {
          ...DefaultTheme.colors,
          onSurfaceVariant: 'white',
          primary: 'white',
        },
      } as MD3Theme),
    [],
  );
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default ThemeProvider;
