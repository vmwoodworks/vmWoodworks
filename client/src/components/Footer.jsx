import "../css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" style={{ color: "white" }}>
      <p>
        {" "}
        123 Main St <br /> Philadelphia, PA <br /> 19116
      </p>
      <Link to="/">
        <img src="\src\assets\footer_logo.jpg"></img>
      </Link>

      <a href="https://www.instagram.com/vm.woodworks/">
        <i className="bi bi-instagram h1"></i>
      </a>
    </div>
  );
}
