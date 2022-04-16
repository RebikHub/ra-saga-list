import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGetRequest } from '../store/slices';
import Error from './Error';
import Loader from './Loader';

export default function ServiceList() {
  const { items, loading, error } = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetRequest());
  }, [dispatch])

  console.log(items, loading, error);

  if (loading) {
    return <Loader/>;
  };

  if (error) {
    return <Error typeError={fetchGetRequest()}/>;
  };

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          <Link to={`/services/${o.id}`} className="item-text">{`${o.name} ${o.price}`}</Link>
        </li>
      ))}
    </ul>
  );
};

