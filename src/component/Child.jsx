import './Child.scss'
import icon1 from '../assets/css-icon 1.png'
function Child() {
    return (
      <div className="container">
        <div className="box">
          <p>Lorem ipsum dolor sit amet</p>
          <div className='box_content'>
            <img src={icon1} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc atullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Child;