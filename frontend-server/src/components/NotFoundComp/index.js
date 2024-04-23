import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });
  return (
    <div>
      <h2>404 Error!! Page Not Found</h2>
    </div>
  )
}

export default NotFound;