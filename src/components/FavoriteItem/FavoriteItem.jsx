function FavoriteItem ({favorite}) {
    return(
        <>
        <div>
         <img width="200px" height="200px" key={favorite.id} src={favorite.link} />
         
         <button>FUNNY</button> 
         <button>ANIMALS</button> 
         <button>NSFW</button> 
         </div>
        </>
    )
}

export default FavoriteItem;