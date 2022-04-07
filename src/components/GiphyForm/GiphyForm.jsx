import {useDispatch} from 'react-redux'
import {useState} from 'react';

function GiphyForm () {

    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch();

    const submitSearchQuery = () => {
        event.preventDefault();
        dispatch({type: 'SET_SEARCH', payload: searchQuery})
    }

    return (
        <>
            <form onSubmit={submitSearchQuery}>
                <input 
                    type="text" 
                    placeholder="Search Category"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default GiphyForm;