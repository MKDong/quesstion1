import "./navbar.scss";

function navbar() {
  const listNav = ["Home", "Services", "New", "Blog", "Contact"];
  return (
    <div className="nav">
      {listNav.map((item, index) => {
        return (
          <div key={index} className="nav_content">
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default navbar;
