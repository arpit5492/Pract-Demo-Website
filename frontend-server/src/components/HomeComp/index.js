import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorComp from "../ErrorComp";
import "./_home-comp.scss";

function HomeComp() {

  const [data, setData] = useState([]);
  const [errFlag, setErrFlag] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/getProd")
      .then(res => {
        if(res.status === 200) {
          return res.json();
        } else {
          throw new Error("Error!!");
        }
      })
      .then(json => {
        setData(json);
      })
      .catch((err) => {
        setErrFlag(true);
      })
      // console.log(data);
  }, []);

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
              <Link>
                <div>
                  <img src={item.prod_img} alt={item.pName} />
                </div>
              </Link>
              <Link style={{textDecoration: "none", color: "black"}}>
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