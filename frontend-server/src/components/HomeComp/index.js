import { useContext } from "react";
import { Link } from "react-router-dom";
import ErrorComp from "../ErrorComp";
import prodContext from "../../store/prod-context";
import "./_home-comp.scss";

function HomeComp() {
  const {data, errFlag} = useContext(prodContext);

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