/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import MoviesList from '../components/moviesList/MoviesList';
import {CategoriesEnum} from '../models/enums/categoriesEnum';
import {Movie} from '../models/interfaces/movie';

type MovieWidgetProps = {
  type: CategoriesEnum;
  loadFunction: () => Promise<Movie[]>;
  refreshControl: (val: boolean) => void;
  refreshing: boolean;
};

const MovieWidget = ({
  type,
  loadFunction,
  refreshControl,
  refreshing,
}: MovieWidgetProps) => {
  const [data, setdata] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  useEffect(() => {
    if (refreshing) {
      loadData();
    }

    return () => {};
  }, [refreshing]);

  const loadData = async () => {
    setLoading(true);
    let pelis = await loadFunction();
    console.log(JSON.stringify(pelis));

    setdata(pelis);
    setLoading(false);
    refreshControl(false);
  };

  return <MoviesList title={type} data={data} />;
};

export default MovieWidget;
