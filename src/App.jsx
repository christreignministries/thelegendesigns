import "./App.css";
import CoverImage from "../src/set-various-digital-devices b copy.jpg";
import LogoIcon from "../src/Legend-icon.png";
import MenuIcon from "../src/2976215.webp";
import Image1 from "../src/Brokeness-Message-Cover-Design copy.webp";
import Image2 from "../src/Welcome-to-2023-Design-copy copy.webp";
import Image3 from "../src/Sunday-Breakthrough-Service-Design-copy copy.webp";
import Image4 from "../src/Welcome-to-March-2023-copy_022911 copy.webp";
const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <img src={LogoIcon} className="logo" alt="legend-logo" />
        </div>
        <div className="menu">
          Menu
          <img src={MenuIcon} className="menu-icon" alt="menu-logo" />
        </div>
      </div>
      <div className="information">
        <div className="welcome">WELCOME TO LEGEND DESIGNS</div>
        <div className="welcome-text">
          We are a creative group of people who design influential brands and
          digital experiences.
        </div>
      </div>
      <div className="box-information">
        <div className="box-a">START A PROJECT</div>
        <div className="box-b">MORE ABOUT US</div>
      </div>
      <div className="scroll-down">SCROLL DOWN</div>
      <div className="we-are-legend-container">
        <div className="hello-there">HELLO THERE</div>
        <div className="we-are-legend">WE ARE LEGEND</div>
        <hr className="legend-ruler"></hr>
        <div className="legend-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum,
          exercitationem sit iusto in assumenda aliquid numquam quasi quae quia
          quaerat veniam ab porro perferendis excepturi, sequi recusandae
          possimus saepe?
        </div>
        <div className="second-background">
          <div className="hello-there-b">WHAT WE DO</div>
          <div className="we-are-legend">
            We've got everything you need to launch and grow your business
          </div>
          <div className="we-are-legend-b">Brand Identity</div>
          <div className="legend-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorum, exercitationem sit iusto in assumenda aliquid numquam quasi
          </div>
          <div className="we-are-legend-b">Web Development</div>
          <div className="legend-text-b">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorum, exercitationem sit iusto in assumenda aliquid numquam quasi
          </div>
        </div>
        <div className="third-background">
          {" "}
          <div className="hello-there-c">HELLO THERE</div>
          <div className="we-are-legend-c">
            We love what we do, check out some of our latest works
          </div>
          <hr className="legend-ruler-b"></hr>
          <div className="image-grid-container">
            <div className="container-a">
              <img src={Image1} alt="Grid-image-1" className="grid-image" />
            </div>
            <div className="container-a">
              <img src={Image2} alt="Grid-image-1" className="grid-image" />
            </div>
            <div className="container-a">
              <img src={Image3} alt="Grid-image-1" className="grid-image" />
            </div>
            <div className="container-a">
              <img src={Image4} alt="Grid-image-1" className="grid-image" />
            </div>
          </div>
        </div>
      </div>

      <img src={CoverImage} className="cover-image" alt="cover-image" />
    </div>
  );
};

export default App;
