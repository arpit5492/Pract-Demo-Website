import { useLocation } from "react-router-dom";
import "./_prodDet-comp.scss";

function ProdDet() {
  const location = useLocation();
  // console.log(id);
  return (
    <div className="det-comp mx-3">
      <div className="prod-det shadow-lg w-25 p-3">
        <img src={location.state.prod_img} alt={location.state.pName} />
        <h4>{location.state.pName}</h4>
        <div>
          <p><span>Price: </span>${location.state.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProdDet;