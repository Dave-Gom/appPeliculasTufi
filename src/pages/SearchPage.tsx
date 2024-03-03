import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

import {StackScreenProps} from '@react-navigation/stack';
import LottieViewer from '../components/Loaders/LottieViewer';
import MoviesList from '../components/moviesList/MoviesList';
import {searchMovie} from '../implementations/TheMovieDBImpl';
import {Movie} from '../models/interfaces/movie';
import {HomeParamList} from '../routes/HomeRouter';
import {styles} from '../themes/styles';

const SearchPage = ({}: StackScreenProps<HomeParamList, 'SearchPage'>) => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [pelis, setPelis] = useState<Movie[]>([]);

  useEffect(() => {
    search(title);
    return () => {};
  }, [title]);

  const search = async (movieTitle: string) => {
    setLoading(true);
    const respuesta = await searchMovie(movieTitle);
    setPelis(respuesta);
    setLoading(false);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          value={title}
          onChangeText={text => setTitle(text)}
          mode="outlined"
          placeholder="Search"
          left={<TextInput.Icon icon="magnify" color={'white'} />}
          contentStyle={{justifyContent: 'center'}}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
          textColor="white"
          outlineColor="transparent"
          activeOutlineColor="transparent"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          {loading ? (
            <LottieViewer
              imagen={require('../../assets/lotties/Loader.json')}
              backgroundColor={'transparent'}
              imgWidth={170}
              imgHeight={170}
              allowLoop={true}
              contarinerStyles={{
                justifyContent: 'flex-start',
              }}
            />
          ) : pelis.length > 0 ? (
            <MoviesList
              data={pelis}
              vertical
              title=""
              numColumns={2}
              contentImageStyles={{height: 200, width: 133}}
            />
          ) : (
            <View style={[styles.container, {alignItems: 'center'}]}>
              <Text
                style={{
                  justifyContent: 'center',
                  color: 'white',
                  fontFamily: 'PlusJakartaSans-Regular',
                  fontSize: 18,
                }}>
                Buscar Titulos
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchPage;
