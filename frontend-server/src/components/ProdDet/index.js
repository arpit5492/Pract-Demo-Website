import { useLocation, useOutletContext, useParams } from "react-router-dom";
import "./_prodDet-comp.scss";

function ProdDet() {
  const {id} = useParams();
  const location = useLocation();
  // console.log(id);
  return (
    <div className="det-comp">
      <div className="prod-det">
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