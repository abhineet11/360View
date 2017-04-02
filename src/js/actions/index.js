import fetch from 'isomorphic-fetch';

export const PANO_FETCHING = "PANO_FECTHING";
export const PANO_FETCH_SUCCESS = "PANO_FETCH_SUCCESS";
export const PANO_FETCH_FAILED = "PANO_FETCH_FAILED";

function panoFetching(){
  return {
    type : PANO_FETCHING
  }
}

function panoFetchSuccess(data){
  return {
    type : PANO_FETCH_SUCCESS,
    data : data
  }
}

function panoFetchFailed(errorMessage){
  return {
    type : PANO_FETCH_FAILED,
    error : errorMessage
  }
}

export const getPanos = () => {
  return function(dispatch) {
    dispatch(panoFetching());
    fetch('https://demo0813639.mockable.io/getPanos').then(function(response) {
        if (!response.ok) {
           dispatch(panoFetchFailed("Error in fetching data."));
        }
        return response.json();
    }).then((json) => {
        if(json){
          dispatch(panoFetchSuccess(json));
        }
    });
  }
}
