export const reducer = (state,action) => {
    switch(action.type){
        case 'MOVIES_LIST':{
            return{ ...state, movies:[...state.movies,action.payload]} ;
        }
        // case 'WATCH_LIST':{
        //     return{ ...state, moviesWatch:[...state.moviesWatch,action.payload]} ;
        // }
        // case 'DELETE_MOVIE_IN_LIST':{
        //     return{ ...state };
        // }
    }
    return{...state}
}