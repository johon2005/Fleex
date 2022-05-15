import "../../components/fontCss.css";
import "../body/bodyCss/bodyFourth.css";
import BossImg from "../../photos/fourthImg.png";

function BodyFourth() {
  return (
    <div className="fourthBossDiv">
      <img className="bossImg" src={BossImg} />

      <p className="fourhFirstP">
        Sit back, we take <br /> care of support too.
      </p> 
      <p className="fourthBodySecondP"> 
        Our dedicated support team provides your team with the best  <br /> remote
        working experience. We handle all of their requests, so  <br /> you can focus on
        what matters.
      </p>  
      <button className="fourthBodyP">Request access</button>
    </div>

  );
}
export default BodyFourth;
