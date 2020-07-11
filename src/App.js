import React,{useState} from "react";
import style from "./style.css";
import PropTypes from 'prop-types';
import Item from "./Item.js";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./Movies.json";

const resemble = (str1,str2) => {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	if(str1==str2||str2==str1.substring(0,str1.length-7)){
		return true;
	}
	return false;
}


const App = () => {
	let [movie,setMovie] = useState("");
	let [rating,setRating] = useState("");
	let [found,setFound] = useState(false);
	let [clicked,setClicked] = useState(false);
	let [movie_path,setMovie_path] = useState("");

	return(
		<React.Fragment>
			<table id="the-head">
				<tbody>
					<tr>
						<td id="icon">
							<img alt="app icon" width="100" src="data:image/png;base64,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" />	
						</td>
						<td>
							<h1 id="header">Movie App</h1>
						</td>
					</tr>
				</tbody>
			</table>
			<div id="container">
				<label id="label-inp">Search For Movie : </label>
				<input type="text" id="movie-inp" className="form-control"
				onChange={(e) => {
					setMovie(e.target.value);
					setMovie_path("");
					setRating("");
					setFound(false);
					setClicked(false);
				}}/>
				<button  className="btn btn-secondary" id="search-button"
				onClick={(e) => {
				setClicked(true);
				for(let i=0;i<Movies.popular_movies.length;i++){
					if(resemble(Movies.popular_movies[i].name,movie)){
						setFound(true);
						setRating(Movies.popular_movies[i].rating);
						setMovie_path(Movies.popular_movies[i].img);
						setMovie(Movies.popular_movies[i].name);
						break;
					}
					else{
						setFound(false);
						setRating("");
						setMovie_path("");
					}
				}
				}}>Search !</button>
				{(clicked&&found)&&<Item movie={movie} rating={rating} img={movie_path}/>}
				{(clicked&&!found)&&<h1 id="error">Movie is not Found</h1>}
			</div>
		</React.Fragment>
	);
}

App.propTypes = {
	movie:PropTypes.string,
	rating:PropTypes.string,
	img:PropTypes.string
};


export default App;