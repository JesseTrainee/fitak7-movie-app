export const reducer = (state,action) => {
    switch(action.type){
        case 'SET_MOVIE_IN_LIST':{
            return{ ...state, movies:[...state.movies,action.payload]} ;
        }
        case 'DELETE_MOVIE_IN_LIST':{
            return{ ...state };
        }
    }
    return{...state}
}