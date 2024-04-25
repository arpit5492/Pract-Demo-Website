import { fetchProd, errorFlag } from "../slices";

const fetchAPI = (url) => {
  return async(dispatch) => {
    // fetch(url)
    // .then(arr => {
    //   if(arr.status === 200) {
    //     return arr.json();
    //   } else {
    //     throw new Error("Error!!");
    //   }
    // })
    // .then(json => {
    //   dispatch(fetchProd(json))
    // })
    // .catch(err => {
    //   dispatch(errorFlag(true))
    // })
    try {
      const data = await fetch(url);
      if(data.status === 200) {
        const json = await data.json();
        dispatch(fetchProd(json));
      } else {
        throw new Error("Error!!");
      }
    } catch(err) {
      dispatch(errorFlag(true));
    }

  }
}

export default fetchAPI;