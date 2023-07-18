import "./Body.scss";
import logo from "../assets/logoNCC 1.png";
import Child from "./Child";

function Body() {
  return (
    <div className="body">
      <div className="body_content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <div className="content_child">
            <p>
              <b>Lorem ipsum dolor sit asmet?</b>
            </p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            eos natus earum impedit amet dolore dolorum quibusdam, maiores odit.
            Nesciunt nam quod officiis dolorum neque est sint atque aspernatur
            quis!
          </div>
        </div>
        <div>
            <Child/>
        </div>
      </div>
    </div>
  );
}

export default Body;
