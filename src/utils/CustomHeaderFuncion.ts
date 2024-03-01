import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

interface headerProps {
  title: string;
  //   titleColor?: string;
  headerColor?: string;
  tintColor?: string;
  alloBack?: boolean;
}

export const CustomHeaderFuncion = ({
  title = '',
  headerColor,
  tintColor,
  alloBack = true,
}: headerProps) => {
  const headerOptions: NativeStackNavigationOptions = {
    title: title,
    headerStyle: {
      backgroundColor: headerColor ? headerColor : 'white',
    },
    headerBackTitleVisible: false,
    headerTintColor: tintColor ? tintColor : '#29166F',
    headerTitleStyle: {fontFamily: 'PlusJakartaSans-Regular'},
    headerShadowVisible: false,
    headerBackButtonMenuEnabled: alloBack,
  };
  return headerOptions;
};
