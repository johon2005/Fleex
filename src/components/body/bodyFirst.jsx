import "../body/bodyCss/bodyFirst.css";
import "../../components/fontCss.css";
import SecondImg from "../../photos/firstImg.png";

function BodyFirst() {
  return (
    <>
      <div className="bossDiv">
        <p className="bodyFirstP">
          Create the ultimate <br /> remote experience
        </p>
        <p className="secondP">
          Set a monthly budget for each team member and select the <br /> items
          you want in your catalogue. We only curate premium and <br />{" "}
          ergonomic products fit for your team's interior.
        </p>
        <div className="secondImgDiv">
          <a
            href="https://www.tflex.ru/about/publications/detail/index.php?ID=1683"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="thirstP">Request access</button>
          </a>
          <img className="firstImg" src={SecondImg} />
        </div>
      </div>
    </>
  );
}
export default BodyFirst;
