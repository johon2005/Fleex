import "../../components/fontCss.css";
import "../body/bodyCss/bodySecond.css";
import SecondImg from "../../photos/secondImg.png";

function BodySecond() {
  return (
    <div className="secondBDiv">
      <img className="secondImg" src={SecondImg} />
      <p className="choseP">
        Let your team choose <br /> the equipment they love
      </p>
      <p  className="giveThem">
        Give them the flexibility to pick what they want. Desks, chairs,
        <br />
        screens, printers, coffee-machines and even snacks. You name
        <br />
        it. We deliver and set-up all the equipment for them.
      </p> 
      <button className="requestSecond">Request access</button>
    </div>
  );
}
export default BodySecond;
