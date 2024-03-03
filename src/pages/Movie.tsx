/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton, Text, useTheme} from 'react-native-paper';
import LottieViewer from '../components/Loaders/LottieViewer';
import {AppConfig} from '../config/appConfig';
import {getMovieDetails} from '../datasources/TheMovieDB.api';
import {MovieDetailsResponse} from '../models/responses/MovieDetails.response';
import {AppParamList} from '../routes/AppRouter';
import {styles} from '../themes/styles';

const {width, height} = Dimensions.get('window');

const MoviePage = ({
  navigation,
  route: {params},
}: StackScreenProps<AppParamList, 'Movie'>) => {
  const {colors} = useTheme();
  const {posterPath, title, overview, id} = params;
  const [movieDetails, setMovieDetails] = useState<MovieDetailsResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, []);

  const loadData = async () => {
    setLoading(true);
    const movieResp = await getMovieDetails(id);
    if (movieResp) {
      setMovieDetails(movieResp);
    }
    setLoading(false);
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={{
          uri: `${AppConfig.imgURLBase}${posterPath}`,
        }}
        style={styleSheetStyles.background}
      />
      <LinearGradient
        colors={['#2E137100', '#130B2Bff']}
        locations={[0, 0.55]}
        style={[
          styles.wrapper,
          {position: 'absolute', zIndex: 1, width, height},
        ]}>
        <View style={styleSheetStyles.backButtonStyles}>
          <IconButton
            icon={'chevron-left'}
            size={50}
            iconColor={colors.primary}
            onPress={handleGoBack}
          />
        </View>
        <ScrollView
          style={styles.wrapper}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styleSheetStyles.container}>
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
            ) : (
              <>
                <View style={styleSheetStyles.hederContent}>
                  <Text style={styleSheetStyles.titleStyle}>{title}</Text>
                  {movieDetails !== null && (
                    <Text style={styleSheetStyles.subtilteStyles}>
                      {movieDetails.tagline}
                    </Text>
                  )}
                </View>
                <Text style={styleSheetStyles.overviewStyles}>{overview}</Text>
              </>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default MoviePage;

const styleSheetStyles = StyleSheet.create({
  background: {width, height: width * 1.5},
  backButtonStyles: {
    zIndex: 1000,
    position: 'absolute',
    elevation: 1000,
    top: 25,
    left: 0,
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontWeight: '800',
  },
  hederContent: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtilteStyles: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 26,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: height / 2,
  },
  overviewStyles: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 26,
  },
});
