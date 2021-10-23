export const reducer = (state={ movies : [1]},action) => {
    switch(action.type){
        case 'MOVIES_LIST':{
            return{ ...state, movies:[...state.movies,action.payload]} ;
        }
        case 'CHANGE_WATCHED':{
          return{ ...state, watched:[action.payload]} ;
        }
        case 'DELETE_MOVIE_IN_LIST':{
            // console.log(state.movies.filter(  e => e.movie.imdbID  !== action.payload.imdbID ))
            return{ movies:state.movies.filter(  e => e.imdbID  !== action.payload.imdbID )};
        }
    }
    return{...state}
}