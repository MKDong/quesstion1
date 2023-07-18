import "./Child.scss";
import icon1 from "../assets/css-icon 1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
function Child() {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet",
      imgURL: icon1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non duisodales, faucibus libero ut, posuere felis. Donec imperdiet suscipitaccumsan. Aenean consequat condimentum velit ut tempor. Nam portamassa in metus bibendum congue. Pellentesque ultrices liquam egestasnunc atullamcorper ultricies. Donec feugiat velit nulla, vel sodalesest ullamcorper id. Aenean consequat condimentum velit ut tempor.Nam porta massa in metus bibendum congue. Pellentesque ultricesvestibulum mattis.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imgURL: icon2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non duisodales, faucibus libero ut, posuere felis. Donec imperdiet suscipitaccumsan. Aenean consequat condimentum velit ut tempor. Nam portamassa in metus bibendum congue. Pellentesque ultrices liquam egestasnunc atullamcorper ultricies. Donec feugiat velit nulla, vel sodalesest ullamcorper id. Aenean consequat condimentum velit ut tempor.Nam porta massa in metus bibendum congue. Pellentesque ultricesvestibulum mattis.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imgURL: icon3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non duisodales, faucibus libero ut, posuere felis. Donec imperdiet suscipitaccumsan. Aenean consequat condimentum velit ut tempor. Nam portamassa in metus bibendum congue. Pellentesque ultrices liquam egestasnunc atullamcorper ultricies. Donec feugiat velit nulla, vel sodalesest ullamcorper id. Aenean consequat condimentum velit ut tempor.Nam porta massa in metus bibendum congue. Pellentesque ultricesvestibulum mattis.",
    },
  ];
  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div key={index} className="box">
                <p>{ item.title}</p>
            <div className="box_content">
              <div className="drop_cap">
                <img src={item.imgURL} alt="" />
              </div>
              <p>
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Child;
