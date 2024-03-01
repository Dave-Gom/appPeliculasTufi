import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StyleProp, TextStyle} from 'react-native';

interface headerProps {
  title: string;
  //   titleColor?: string;
  headerColor?: string;
  tintColor?: string;
  alloBack?: boolean;
  headerTitleStyles?: StyleProp<
    Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontWeight'> & {
      color?: string | undefined;
    }
  >;
}

export const CustomHeaderFuncion = ({
  title = '',
  headerColor,
  tintColor,
  alloBack = true,
  headerTitleStyles,
}: headerProps) => {
  const headerOptions: NativeStackNavigationOptions = {
    title: title,
    headerStyle: {
      backgroundColor: headerColor ? headerColor : 'white',
    },
    headerBackTitleVisible: false,
    headerTintColor: tintColor ? tintColor : '#29166F',
    headerTitleStyle: [
      headerTitleStyles,
      {
        fontFamily: 'PlusJakartaSans-ExtraBold',
        fontWeight: '800',
      },
    ],
    headerShadowVisible: false,
    headerBackButtonMenuEnabled: alloBack,
  };
  return headerOptions;
};
