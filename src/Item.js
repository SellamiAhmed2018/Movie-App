import React from "react";

const Item = ({movie,rating,img}) => {
	return(
		<React.Fragment>
			<img src={img} id="movie-image" alt="movie"/>
			<h1 id="movie-name">{movie} Is Found And It's {rating}</h1>
		</React.Fragment>
	);
}

export default Item;