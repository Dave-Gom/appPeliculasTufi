import React from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {AppConfig} from '../../config/appConfig';
import {Movie} from '../../models/interfaces/movie';

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
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
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
