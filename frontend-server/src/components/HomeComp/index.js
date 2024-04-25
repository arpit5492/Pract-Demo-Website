import { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorComp from "../ErrorComp";
import "./_home-comp.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProd, errorFlag } from "../../store/slices";

function HomeComp() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.pr.products);
  const errFlag = useSelector(state => state.pr.error);

  useEffect(() => {
    fetch("http://localhost:4000/getProd")
      .then(arr => {
        if(arr.status === 200) {
          return arr.json();
        } else {
          throw new Error("Error!!");
        }
      })
      .then(json => {
        dispatch(fetchProd(json));
      })
      .catch(err => {
        dispatch(errorFlag(true));
      });
  });
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