import "../foter/foterCss/foterFirst.css";
import "../../components/fontCss.css";
import FoterIcon from "../../photos/foterFirstIcon.png";
import FIconSecond from "../../photos/foterSecondIcon.png";

function FoterFirst() {
  return (
    <div className="foterFirstBossDiv">
      <p className="foterFirstP">
        Fleex is working <br /> towards a <br /> better future.
      </p>
      <div className="firstIconDiv">
        <div className="childfirstIconDiv">
          <img className="foterIconfFirst" src={FoterIcon} />
          <p className="iconRightP">Sustainability</p>
        </div>
        <p className="IconFirstP">
          — We consciously curate our products to <br /> reduce our
          environmental footprint. We pick <br /> premium materials so our
          products last <br /> in time.
        </p>
      </div>
      <div className="secondIconBossDiv">
        <div className="SecondBosIcon">
          <img className="foterIconSecond" src={FIconSecond} />
          <p className="foterSecondP">Circularity</p>
        </div>
        <p className="secondPP">
          — We give our products a second life by <br /> reconditioning them
          every time they get returned <br /> to us. Zero waste is what we stand
          for.
        </p>
      </div>
    </div>
  );
}
export default FoterFirst;
