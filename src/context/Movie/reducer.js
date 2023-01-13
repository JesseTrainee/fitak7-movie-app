export const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_MOVIE':{
            return{ ...state, movies:[...state.movies,action.payload]} ;
        }
        case "REMOVE_MOVIE": {
            return {
                ...state,
                movies: state.movies.filter((item) => item.imdbID !== action.payload),
            }
        }
        default: return{...state}
    }
    
}