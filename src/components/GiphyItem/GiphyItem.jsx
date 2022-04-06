function GiphyItem ({picture}) {

    const favoriteGif = () => {
        console.log('Favoriting', picture.id);
    }

    return(
        <>
            <img width="200px" height="200px" src={picture.images.original.url} />
            <button onClick={favoriteGif}>Favorite</button>
        </>
    )
}

export default GiphyItem;