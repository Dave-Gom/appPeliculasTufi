import React from 'react';
import {View} from 'react-native';
import {loadNowPlaying} from '../implementations/TheMovieDBImpl';
import {CategoriesEnum} from '../models/enums/categoriesEnum';
import MovieWidget from './MovieWidget';

export interface RefreshOptions {
  refreshing: boolean;
  setRefreshing: (val: boolean) => void;
}

export interface WidgetComponentProps {
  type: CategoriesEnum;
  params: RefreshOptions;
}

// TODO : tratar de entender useImperativeHandle (como dice Oliver)
export const WidgetComponent = ({
  type,
  params: {refreshing, setRefreshing},
}: WidgetComponentProps) => {
  console.log(type);

  switch (type) {
    case CategoriesEnum.NOWPLAYING:
      return (
        <View style={{paddingBottom: 15}}>
          <MovieWidget
            type={CategoriesEnum.NOWPLAYING}
            loadFunction={loadNowPlaying}
            refreshControl={setRefreshing}
            refreshing={refreshing}
          />
        </View>
      );

    default:
      return <View />;
  }
};
