import { useEffect, useState } from "react";
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
      console.log(data);
  }, []);
  
  return (
    <div className="prod-comp">
      {JSON.stringify(data)}
      {data.map(item => {
        return (
          <div className="prod-card">
            <div>
              <img src={item.prod_img} alt={item.pName} />
            </div>
            <div>
              <h4>{item.pName}</h4>
            </div>
            <div className="price">
              <p><span>Price: </span>${item.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeComp;