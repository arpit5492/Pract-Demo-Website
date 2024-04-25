import { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorComp from "../ErrorComp";
import "./_home-comp.scss";
import fetchAPI from "../../middlewares";
import { useDispatch, useSelector } from "react-redux";

function HomeComp() {
  const data = useSelector(state => state.products);
  const errFlag = useSelector(state => state.error);
  const dispatch = useDispatch();

  // .then() method
  // useEffect(() => {
  //   fetch("http://localhost:4000/getProd")
  //     .then(singData => {
  //       if(singData.status === 200) {
  //         return singData.json();
  //       } else {
  //         throw new Error("Error!!");
  //       }
  //     })
  //     .then(json => {
  //       dispatch({type: "Fetch Products", payload: json});
  //     })
  //     .catch(err => {
  //       dispatch({type: "Server Error", payload: true});
  //     });
  // }, []);

  // async/await method
  useEffect(() => {
    dispatch(fetchAPI("http://localhost:4000/getProd"));
  }, [dispatch]);
  
  if(errFlag) {
    return (
      <div>
        <ErrorComp />
      </div>
    )
  } else {
    return (
      <div className="prod-comp">
        {/* {JSON.stringify(data)} */}
        {data.map(item => {
          return (
            <div className="prod-card shadow-lg" key = {item.id}>
              <Link state={item} to={`/product/${item.id}`}>
                <div>
                  <img src={item.prod_img} alt={item.pName} />
                </div>
              </Link>
              <Link state={item} to={`/product/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                <div>
                  <h4>{item.pName}</h4>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HomeComp;