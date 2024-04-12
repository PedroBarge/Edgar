import "./Tldr.css";

const Tldr = () => {
  return (
    <>
      <div className="mainTldr">
        <div className="news">
          <h3>Bosque Kittens With Lop</h3>(Location: Bombarral, Leiria)
          <ul>
            <li>-There are 3 male kittens available.</li>
            <li>
              -Delivered with FIFE pedigree, passport with complete vaccination
              (including rabies), up-to-date deworming, and microchip.
            </li>
            <li>-Parents have genetic tests for breed diseases.</li>
            <li>-Born on 11/03/23 and raised in a family environment.</li>
          </ul>
        </div>

        <div className="img3Cats"></div>
      </div>
      <div className="mainTldr">
        <div className="imgCatsSphynx"></div>
        <div className="news">
        <h3>Sphynx Kittens</h3> (Location: Valbom, Porto)
          <ul>
            <li>-Sphynx breed kittens.</li>
            <li>
              -Vaccinated, dewormed, and microchipped in the name of the new
              owner.
            </li>
            <li>-Age: 3 months.</li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Tldr;
