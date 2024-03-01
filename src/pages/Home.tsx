import React, {useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {CategoriesEnum} from '../models/enums/categoriesEnum';
import {WidgetComponent} from '../widgets/WidgetComponent';

const customHome = [
  CategoriesEnum.NOWPLAYING,
  CategoriesEnum.POPULAR,
  CategoriesEnum.TOPRATED,
  CategoriesEnum.UPCOMING,
];

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={customHome}
          renderItem={({item}) => (
            <WidgetComponent type={item} params={{refreshing, setRefreshing}} />
          )}
          refreshControl={
            <RefreshControl
              title="Actualizar"
              refreshing={refreshing}
              tintColor={'white'}
              titleColor={'white'}
              style={{zIndex: 90, elevation: 90}}
              onRefresh={() => setRefreshing(true)}
            />
          }
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
