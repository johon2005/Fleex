import "../../components/fontCss.css";
import "../body/bodyCss/bodyThirst.css"; 
import ThirstImg from "../../photos/thirstImg.png"

function BodyThirst() {
  return (
    <div className="thirstDiv">
      <p className="managethirst">
        Manage everything <br /> in one place
      </p>
      <p className="getP">
        Get an overview of each of your employee's remote set-ups. Our dashboard
        takes  <br />  care of your team's finances for you.
      </p>  
      <div className="thirstImgDiv">
      <button className="thirstRequest">Request access</button> 
      <img  className="thirstI" src={ThirstImg} />
    </div> 
    </div>
  );
}
export default BodyThirst;
