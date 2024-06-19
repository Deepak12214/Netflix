import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        trendingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        similarMovies : null,
        recommendationMovies : null,
        trailerVideo:null,
        movieInfo : null,
        movieCreadits: null,
    },

    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addSimilarMovies: (state,action)=>{
            state.similarMovies = action.payload;
        },
        addRecommendationMovies : (state,action)=>{
            state.recommendationMovies = action.payload;
        },
        addMovieInfo : (state,action)=>{
            state.movieInfo = action.payload;
        },
        addMovieCreadits : (state,action)=>{
            state.movieCreadits = action.payload;
        },
        addTrendingMovies : (state,action)=>{
            state.trendingMovies = action.payload;
        },
        addTrailerVideo : (state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addTrendingMovies,addTopRatedMovies,addPopularMovies,addRecommendationMovies,addMovieCreadits , addMovieInfo,addSimilarMovies }=moviesSlice.actions;
export default moviesSlice.reducer;