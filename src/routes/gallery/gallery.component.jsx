import {useEffect} from "react";
import "./style.css";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery-page">
      <div className="gallery-page-container">

        {/* Gallery section 1 */}

        <div className="gallery-section1">
          <div className="gallery-heading-container">
            <div className="gallery-main-heading">
              <h3 id="gallery-wrap"> <span id="gallery-text">Gallery</span> </h3>
            </div>
          </div>
          <div className="gallery-find-us">
            <div className="gallery-heading">
              <h3>SAMAR</h3>
            </div>
          </div>
            {/* Images */}
            <div className="gallery-images section1">
              <div className="gallery-flip">
                <div className="gallery-front img3">
                  <h1 className="gallery-text-shadow">BORN FIRE</h1>
                </div>
                <div className="gallery-back">
                    <h2>Born Fire</h2>
                    <p>
                      An event hosted on winter by shaurya..
                    </p>
                </div>
              </div>

              <div className="gallery-flip">
                <div className="gallery-front img2">
                  <h1 className="gallery-text-shadow">AMUL PARLOUR</h1>
                </div>
                <div className="gallery-back">
                  <h2>Amul Parlour</h2>
                  <p>
                    During born fire event..
                  </p>
                </div>
              </div>


              <div className="gallery-flip">
                <div className="gallery-front img18">
                  <h1 className="gallery-text-shadow">SUN BURN</h1>
                </div>
                <div className="gallery-back">
                  <h2>Sun Burn</h2>
                  <p>
                    An event hosted on winter by shaurya..
                  </p>
                </div>
              </div>

              <div className="gallery-flip">
                <div className="gallery-front img4">
                  <h1 className="gallery-text-shadow">BASKET BALL</h1>
                </div>
                <div className="gallery-back">
                  <h2>BASKET BALL 2022</h2>
                  <p>
                    A DJ event organized by Shaurya at exam time to relief stress..
                  </p>
                </div>
              </div>

              <div className="gallery-flip">
                <div className="gallery-front img19">
                  <h1 className="gallery-text-shadow">BIKE STUNT</h1>
                </div>
                <div className="gallery-back">
                  <h2>Bike Stunt</h2>
                  <p>
                    An event hosted on winter by shaurya..
                  </p>
                </div>
              </div>

              <div className="gallery-flip">
                <div className="gallery-front img5">
                  <h1 className="gallery-text-shadow">FIELD</h1>
                </div>
                <div className="gallery-back">
                  <h2>Field</h2>
                  <p>
                    A rondom photo of players paying at field..
                  </p>
                </div>
              </div>
            </div>
        </div>


        {/* Gallery Section 2 */}
        <div className="gallery-section2">
          <div className="gallery-find-us">
            <div className="gallery-heading">
              <h3>2022</h3>
            </div>
          </div>
            {/* Images */}
            <div className="gallery-images section2" id="gallery-image">
              <div className="gallery-flip">
                <div className="gallery-front img6">
                  <h1 className="gallery-text-shadow">PICKEL BALL</h1>
                </div>
                <div className="gallery-back">
                  <h2>Pickel Ball</h2>
                  <p>
                    Pickel ball is played with pickels..
                  </p>
                </div>
              </div>

            <div className="gallery-flip">
              <div className="gallery-front img7">
                <h1 className="gallery-text-shadow">PICKEL BALL</h1>
              </div>
              <div className="gallery-back">
                <h2>Pickel Ball</h2>
                <p>
                  Someone playing Pickel Ball..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img8">
                <h1 className="gallery-text-shadow">TUG OF WAR</h1>
              </div>
              <div className="gallery-back">
                <h2>Tug of War</h2>
                <p>
                  A game played with rope by 2 team in opposite side..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img9">
                <h1 className="gallery-text-shadow">ARM WRESTLING</h1>
              </div>
              <div className="gallery-back">
                <h2>Arm Wrestling</h2>
                <p>
                Arm wrestling (also spelled armwrestling) is a sport with two opponents who face each other with their bent elbows placed on a table..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img10">
                <h1 className="gallery-text-shadow">PARTICIPANTS</h1>
              </div>
              <div className="gallery-back">
                <h2>Participants</h2>
                <p>
                  Participants are looking exited for the game..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img11">
                <h1 className="gallery-text-shadow">ARM WRESTLING-2</h1>
              </div>
              <div className="gallery-back">
                <h2>Match</h2>
                <p>
                  Another close battle of arm wrestling..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img12">
                <h1 className="gallery-text-shadow">SMILY FACES</h1>
              </div>
              <div className="gallery-back">
                <h2>Enthusiasm</h2>
                <p>
                  Another close battle of tug of war..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img13">
                <h1 className="gallery-text-shadow">TUG OF WAR</h1>
              </div>
              <div className="gallery-back">
                <h2>Match</h2>
                <p>
                  Another close battle of tug of war..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img14">
                <h1 className="gallery-text-shadow">TUG OF WAR</h1>
              </div>
              <div className="gallery-back">
                <h2>Match</h2>
                <p>
                  Another close battle of tug of war..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img15">
                <h1 className="gallery-text-shadow">TUG OF WAR</h1>
              </div>
              <div className="gallery-back">
                <h2>Match</h2>
                <p>
                  Another close battle of tug of war..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img16">
                <h1 className="gallery-text-shadow">TUG OF WAR</h1>
              </div>
              <div className="gallery-back">
                <h2>Match</h2>
                <p>
                  Another close battle of tug of war..
                </p>
              </div>
            </div>

            <div className="gallery-flip">
              <div className="gallery-front img17">
                <h1 className="gallery-text-shadow">SPIDER</h1>
              </div>
              <div className="gallery-back">
                <h2>Spider Captured</h2>
                <p>
                  A spider making network....
                </p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Gallery;