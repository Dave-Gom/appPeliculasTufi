import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {AppConfig} from '../../config/appConfig';
import {Movie} from '../../models/interfaces/movie';
import {AppParamList} from '../../routes/AppRouter';

type TitlesWidgetProps = {
  title: string;
  data: Movie[];
  vertical?: boolean;
  numColumns?: number;
  contentImageStyles?: StyleProp<ImageStyle>;
};

const MoviesList = ({
  title,
  data,
  vertical = false,
  numColumns,
  contentImageStyles,
}: TitlesWidgetProps) => {
  const nav = useNavigation<StackNavigationProp<AppParamList, 'Home'>>();
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => nav.navigate('Movie', item)}>
              <View style={{marginLeft: 20}}>
                <Image
                  source={{
                    uri: `${AppConfig.imgURLBase}${item.posterPath}`,
                  }}
                  style={[styles.defaultImageStyles, contentImageStyles]}
                  resizeMode="cover"
                  defaultSource={
                    item.posterPath
                      ? undefined
                      : require('../../../assets/img/imdbnoimage.jpg')
                  }
                />
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal={!vertical}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20, marginBottom: 20}}
        numColumns={numColumns}
        columnWrapperStyle={
          numColumns && numColumns > 1 ? {margin: 10} : undefined
        }
      />
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    // maxHeight: 200,
  },
  titleStyles: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontWeight: '800',
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
  },
  defaultImageStyles: {width: 120, height: 180, borderRadius: 20},
});
