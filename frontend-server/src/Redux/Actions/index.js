import { fetchProd, errFlag } from "../Slices"

const fetchAPI = (url) => {
  return async(dispatch) => {
    // fetch(url)
    //   .then(data => {
    //     if(data.status === 200) {
    //       return data.json();
    //     } else {
    //       throw new Error("Error!!");
    //     }
    //   })
    //   .then(json => {
    //     dispatch(fetchProd(json));
    //   })
    //   .catch(err => {
    //     dispatch(errFlag(true));
    //   })
    try {
      const data = await fetch(url);
      if(data.status === 200) {
        const json = await data.json();
        dispatch(fetchProd(json));
      } else {
        throw new Error("Error!!");
      }
    } catch(err) {
      dispatch(errFlag(true));
    }

  }
}

export default fetchAPI;