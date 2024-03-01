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
            <Image
              source={{
                uri: `${AppConfig.imgURLBase}${item.posterPath}`,
              }}
              style={{width: 100, height: 130}}
            />
          );
        }}
        horizontal
      />
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
  },
  titleStyles: {
    fontFamily: 'PlusJakartaSans-Regular',
    color: 'white',
    fontSize: 18,
  },
});
