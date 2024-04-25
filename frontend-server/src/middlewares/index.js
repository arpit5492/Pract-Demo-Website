const fetchAPI = (url) => {
  return async(dispatch) => {
    try {
      const singData = await fetch(url);
      if(singData.status === 200) {
        const json = await singData.json();
        dispatch({type: "Fetch Products", payload: json});
      } else {
        throw new Error("Error!!");
      }
    } catch(err){
      dispatch({type: "Server Error", payload: true});
    }
  }
}

export default fetchAPI;