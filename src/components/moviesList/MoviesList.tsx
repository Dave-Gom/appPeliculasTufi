import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Movie} from '../../models/interfaces/movie';

type TitlesWidgetProps = {
  title: string;
  data: Movie[];
};

const MoviesList = ({title, data}: TitlesWidgetProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MoviesList;
