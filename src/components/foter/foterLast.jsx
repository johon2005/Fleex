import "../../components/fontCss.css";
import FoterLastImg from "../../photos/foterImg.png";
import Flex from "../../photos/flexBoss.png";
import "../../components/foter/foterCss/foterLast.css";
import IconB from "../../photos/IconBoss.png"; 
import Flex2020 from "../../photos/flex2020.png"
function FoterLast() {
  return (
    <div
      style={{
        backgroundImage: `url(${FoterLastImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "1400px",
        height: "550px",
        paddingLeft: "119px",
      }}
    >
      <div className="flexBossDiv">
        <div className="flexDiv">
          <img className="iconB" src={IconB} />
          <img className="flexB" src={Flex} />
        </div>
        <p className="flexP">
          Fleex provides, manages and assists your <br />  remote employees with all
          they need to work <br /> in the best conditions.
        </p>
      </div> 
      <img  className="flex2020" src={Flex2020}  />
    </div>
  );
}
export default FoterLast;
// backgroundImage: `url(${Curly2})`,
// backgroundRepeat: "no-repeat",
// backgroundSize: "contain",
// width: "1280px",
// height: "720px",
