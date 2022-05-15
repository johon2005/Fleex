import "../../components/fontCss.css";
import "./headerFirst.css";
import BossImg from "../../photos/bossImg.png";
import IconBoss from "../../photos/IconBoss.png";
import FlexBoss from "../../photos/flexBoss.png";
import Swile from "../../photos/swile.png";
import BackM from "../../photos/backM.png";
import Shine from "../../photos/shine.png";
import Img from "../../photos/Img.png";

function HeaderFirst() {
  return (
    <>
      <div className="bossCss">
        <div
          style={{
            backgroundImage: `url(${BossImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "1400px",
            height: "900px",
            paddingLeft: "119px",
          }}
        >
          <div className="iconFD">
            <img className="iconBoss" src={IconBoss} />
            <div>
              <img className="flexBoss" src={FlexBoss} />
            </div>
            <button className="blogImgInside">Blog</button>
          </div>
          <p className="bossImgP">
            Make work happen <br /> from anywhere.
          </p>
          <p className="headerInsideP">
            Fleex provides, manages and assists your <br /> remote employees
            with all they need to <br /> work in the best conditions.
          </p>
          <button className="request">Request access</button>
        </div>
      </div>
      <div className="headerIcons">
        <img className="swile" src={Swile} />
        <img className="bmarket" src={BackM} />
        <img className="shine" src={Shine} />
        <img className="img" src={Img} />
      </div>
    </>
  );
}
export default HeaderFirst;
