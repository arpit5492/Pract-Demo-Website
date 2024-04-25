const fetchAPI = (url) => {
  return (dispatch) => {
  //   try {
  //     const singData = await fetch(url);
  //     if(singData.status === 200) {
  //       const json = await singData.json();
  //       dispatch({type: "Fetch Products", payload: json});
  //     } else {
  //       throw new Error("Error!!");
  //     }
  //   } catch(err){
  //     dispatch({type: "Server Error", payload: true});
  //   }
  // }
  fetch(url)
      .then(singData => {
        if(singData.status === 200) {
          return singData.json();
        } else {
          throw new Error("Error!!");
        }
      })
      .then(json => {
        dispatch({type: "Fetch Products", payload: json});
      })
      .catch(err => {
        dispatch({type: "Server Error", payload: true});
      });
  }
}

export default fetchAPI;