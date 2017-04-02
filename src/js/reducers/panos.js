import {PANO_FETCHING , PANO_FETCH_FAILED , PANO_FETCH_SUCCESS} from '../actions'

export default function (state = {isFetching : false}, action) {
    switch (action.type) {
        case PANO_FETCHING:
            return Object.assign({},state,{
              isFetching : true,
              data : null,
              error : null
            })
        case PANO_FETCH_FAILED:
          return Object.assign({},state,{
            isFetching : false,
            data : null,
            error : action.error
          })
        case PANO_FETCH_SUCCESS :
          return Object.assign({},state,{
            isFetching : false,
            data : action.data,
            error : null
          })
    }
    return state;
}
