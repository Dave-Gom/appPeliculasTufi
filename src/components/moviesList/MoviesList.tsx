import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AppConfig} from '../../config/appConfig';
import {Movie} from '../../models/interfaces/movie';

type TitlesWidgetProps = {
  title: string;
  data: Movie[];
};

const MoviesList = ({title, data}: TitlesWidgetProps) => {
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
                style={{width: 120, height: 180, borderRadius: 20}}
                resizeMode="cover"
              />
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20, marginBottom: 20}}
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
});
