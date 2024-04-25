import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorComp from "../ErrorComp";
import "./_home-comp.scss";
import { useSelector } from "react-redux";

function HomeComp() {

  const data = useSelector(state => state.pr.products);
  const errFlag = useSelector(state => state.pr.error);
  
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