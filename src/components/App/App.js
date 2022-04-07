import React from 'react';
import GiphyList from '../GiphyList/GiphyList';
import FavoriteList from '../FavoriteList/FavoriteList';
import GiphyForm from '../GiphyForm/GiphyForm';

function App() {

  // const dispatch = useDispatch();

  // const getGiphy = () => {
  //   axios.get('/api/giphy')
  //     .then(response => {
  //       console.log(response.data);
  //       console.log(response.data?.data[0].images.original.url);
  //       response.data.data.map((picture) => {
  //         return picture.images.original.url
  //       })
  //       dispatch ({type: 'SET_GIPHY', payload: response.data})
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  // }

  // useEffect(() => {
  //   getGiphy();
  // }, []);

  return (
    <div>
      <h1>Giphy Search!</h1>
      <GiphyForm/>
      <GiphyList/>
      <FavoriteList/>
    </div>
  );
}

export default App;
