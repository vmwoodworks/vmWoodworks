import "../css/homepage.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col large-col">
          <img
            className="homepage-main-img"
            src="src\assets\images\example1.jpg"
          ></img>
        </div>
        <div className="col small-col img-list">
          <ul>
            <li>
              {" "}
              <img src="src\assets\images\example1.jpg" alt="" />
            </li>
            <li>
              {" "}
              <img src="src\assets\images\example2.jpg" alt="" />
            </li>
            <li>
              {" "}
              <img src="src\assets\images\example3.jpg" alt="" />
            </li>
            <li>
              {" "}
              <img src="src\assets\images\example4.jpg" alt="" />
            </li>
            <li>
              {" "}
              <img src="src\assets\images\example5.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/* <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row> */}
    </div>
  );
}
