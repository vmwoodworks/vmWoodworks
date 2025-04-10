import "../css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer" style={{ color: "white" }}>
      <p>
        {" "}
        428 Arbutus Ave <br /> Horsham, PA <br /> 19044
      </p>
      <Link to="/">
        <img src="/assets\footer_logo.jpg"></img>
      </Link>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <p style={{ fontSize: '15px'}}>267-379-3140</p>
      <a href="https://www.instagram.com/vm.woodworks/">
        <i className="bi bi-instagram h1"></i>
      </a>
</div>
    </div>
  );
}
