import "../../components/fontCss.css";
import "../body/bodyCss/bodyFifth.css";
import DollarIcon from "../../photos/dollarIcon.png";
import IllIcon from "../../photos/ilIcon.png";
import MagnetImg from "../../photos/magnetIcon.png";
function BodyFifth() {
  return (
    <>
      <p className="bodyFifthFirstP">
        Set yourself apart by <br /> giving the modern <br /> perks of tomorrow.
      </p>
      <div className="dollarFifthBoss">
        <div className="dollarIconDiv">
          <img className="dollar" src={DollarIcon} />
          <p className="dollarFirstP">Be cost-effective</p>
          <p className="dollarSecondP">
            With Fleex, you have the opportunity to offer <br /> premium
            equipment that'd be too costly to buy <br /> upfront. Your team gets
            to enjoy top-of-the-line <br /> products, at a competitive price for
            you.
          </p>
        </div>
        <div className="illDiv">
          <img className="iconIll" src={IllIcon} />
          <p className="illFirstP">Reduce risk of injury</p>
          <p className="illSecondP">
            We identify your team's needs to make sure <br /> they have the
            suitable tools to work in the <br /> best conditions. We certify
            their remote <br /> office to mitigate against injury at home.
          </p>
        </div>
        <div className="magnetBossDiv">
          <img className="magnetImg" src={MagnetImg} />
          <p className="magnetFirstP">Engage and attract the best talent</p>
          <p  className="magnetSecondP">
            Bring your company culture anywhere and  <br /> make your team happier with
            a set-up  <br /> they're truly comfortable in. Fleex is the  <br /> go-to perk for
            your remote policy.
          </p>
        </div>
      </div>
    </>
  );
}
export default BodyFifth;
