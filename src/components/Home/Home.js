import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../store/slices/movieSlice';

function Home() {
  const dispatch = useDispatch();
  
  const fetchMovies = async function(movieText) {
    try {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}`)
        .catch(errr => {
          console.log("errr :: ", errr);
        });

      dispatch(addMovies(response.data.Search))
    } catch (err) {
      console.log('err : ', err);
    }
  }

  useEffect(() => {
    const movieText = "dark"
    fetchMovies(movieText);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  )
}

export default Home;
