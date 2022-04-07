import { useDispatch } from 'react-redux';


function FavoriteItem({ favorite }) {

    const dispatch = useDispatch();

    const handleFunny = (event) => {
        dispatch({ type: 'PUT_CATEGORY', payload: {category_id: 1, id: favorite.id}})
    }

    const handleAnimals = (event) => {
        dispatch({ type: 'PUT_CATEGORY', payload: {category_id: 2, id: favorite.id}})
    }

    const handleNSFW = (event) => {
        dispatch({ type: 'PUT_CATEGORY', payload: {category_id: 3, id: favorite.id}})
    }

    return (
        <>
            <div>
                <img width="200px" height="200px" key={favorite.id} src={favorite.link} />

                <button onClick={(event) => handleFunny(event.target.value)}>FUNNY</button>
                <button onClick={(event) => handleAnimals(event.target.value)}>ANIMALS</button>
                <button onClick={(event) => handleNSFW(event.target.value)}>NSFW</button>
            </div>
        </>
    )
}

export default FavoriteItem;