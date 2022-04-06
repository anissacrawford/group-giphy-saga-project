import {useDispatch} from 'react-redux';

function GiphyItem ({picture}) {

    const dispatch = useDispatch();

    const favoriteGif = () => {
        console.log('Favoriting', picture.images.original.url);
        dispatch({type: 'ADD_FAVORITE', payload: picture.images.original.url})
    }

    return(
        <>
            <img width="200px" height="200px" src={picture.images.original.url} />
            <button onClick={favoriteGif}>Favorite</button>
        </>
    )
}

export default GiphyItem;