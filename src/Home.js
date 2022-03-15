import React from "react";
import "./Home.css";

const Home = () => {
  const Cards = (props) => {
    return (
      <>
        <img src={props.imgsrc} className="card-img" />
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
          <h5 className="card-date">{props.date}</h5>
        </div>
      </>
    );
  };

  return (
    <>
      <br />
      <br />
      <div className="main">
        <div className="home-cards">
          <div id="card1">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?nature"
              title="Title of vertical gallery"
              date="Travel / August 21 2017"
            />
          </div>

          <div id="card2">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="The Sound cloud You loved is doomed"
              date="Travel / August 21 2017"
            />
          </div>

          <div id="card3">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="The Sound cloud You loved is doomed"
              date="Travel / August 21 2017"
            />
          </div>
        </div>
      </div>
      <br />
      <div>
        <h3>
          <span className="sub-heders">The Latest</span>
        </h3>
      </div>
      <br />

      {/* ---------------------------THE LATEST------------------------------------- */}

      <div className="the-latest">
        <div className="card4">
          <Cards imgsrc="https://source.unsplash.com/1600x800/?hollywood" />
          <br />
          <div className="content">
            <span className="joshua-tree">
              Joshua Tree <br /> Overnight Adventure
            </span>{" "}
            <br />
            <span>
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-known as a tourist destination. It has a
              plethora of temples and palaces
            </span>
            <br />
            <span>Travel</span>
            <span>/ August 21 2017</span>{" "}
          </div>
        </div>
        <div className="card5">
          <Cards imgsrc="https://source.unsplash.com/1600x800/?food" />
          <br />
          <div className="content">
            <span className="joshua-tree">
              Joshua Tree <br />
              Overnight Adventure
            </span>
            <br />
            <span className="">
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-known as a tourist destination. It has a
              plethora of temples and palaces
            </span>
            <br />
            <span>Travel</span>
            <span>/ August 21 2017</span>
          </div>
        </div>
        <div className="card6">
          <Cards imgsrc="https://source.unsplash.com/1600x800/?fitness" />
          <br />
          <div className="content">
            <span className="joshua-tree">
              Joshua Tree
              <br /> Overnight Adventure
            </span>{" "}
            <br />
            <span>
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-known as a tourist destination. It has a
              plethora of temples and palaces
            </span>
            <br />
            <span>Travel</span>
            <span>/ August 21 2017</span>
          </div>
        </div>
      </div>
      <br />

      {/* -----------------------------Latest Articles----------------------------------- */}
      <br />
      <div>
        <h3>
          <span className="sub-heders">Latest Articles</span>
        </h3>
      </div>
      <br />
      <div className="latest-articles">
        <div className="articles">
          <div className="article1">
            <div className="box1">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?fitness"
                title="Muscular endurance"
                description="Fitness can also include muscular endurance, which is the ability of a muscle to continue exerting force without tiring"
                date="Fitness"
              />
            </div>
            <div className="box2">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?hollywood"
                title="Dogtown 2"
                description="Will Dogtown stop Barney Lockjaws before it's too late? Find out in Dogtown 2."
                date="Bollywood"
              />
            </div>
            <div className="box3">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?technology"
                title="Aerogel"
                description="Hypothetical, experiments, diffusion, early uses"
                date="Technology"
              />
            </div>
          </div>
          <div className="box11">
            <div className="advertisment">Advertisment</div>
          </div>
        </div>

        <div className="articles2">
          <div className="article2">
            <div className="box4">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?bollywood"
                title="The Matrix"
                description="When a beautiful stranger leads computer hacker Neo to a forbidding underworld"
                date="Hollywood"
              />
            </div>
            <div className="box5">
              <span>LOAD MORE</span>
            </div>
            <div className="box6">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?biology"
                title="Catch waves with an adventure guide"
                date="Travel / August 21 2017"
              />
            </div>
          </div>
          <div>
            <div className="box7">
              <h4>
                <span className="sub-heders2">Top Posts</span>
              </h4>
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?technology"
                title="Bioplastic"
                date="Technology"
              />
            </div>
            <div className="box8">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?technology"
                title="Electric armour"
                date="Travel / August 21 2017"
              />
            </div>
            <div className="box9">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?hollywood"
                title="Haunted Hills"
                date="Travel / August 21 2017"
              />
            </div>
            <div className="box10">
              <Cards
                imgsrc="https://source.unsplash.com/1600x800/?bollywood"
                title="Goodfellas"
                date="Travel / August 21 2017"
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* -----------------------------Latest Stories----------------------------------- */}

      <div>
        <h3>
          <span className="sub-heders">Latest Stories</span>
        </h3>
      </div>
      <br />
      <div className="the-latest">
        <div className="card4">
          <br />
          <div className="content">
            <span className="joshua-tree">
              Joshua Tree <br /> Overnight Adventure
            </span>{" "}
            <br />
            <span>
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-known as a tourist destination. It has a
              plethora of temples and palaces
            </span>
            <br />
            <span>Travel</span>
            <span>/ August 21 2017</span>{" "}
          </div>
        </div>
        <div className="card5">
          <div className="content">
            <span className="joshua-tree">
              Joshua Tree <br />
              Overnight Adventure
            </span>
            <br />
            <span className="">
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-known as a tourist destination. It has a
              plethora of temples and palaces
            </span>
            <br />
            <span>Travel</span>
            <span>/ August 21 2017</span>
          </div>
        </div>
        <div className="card6">
          <br />
          <div className="content">
            <span className="joshua-tree">
              Joshua Tree
              <br /> Overnight Adventure
            </span>{" "}
            <br />
            <span>
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-known as a tourist destination. It has a
              plethora of temples and palaces
            </span>
            <br />
            <span>Travel</span>
            <span>/ August 21 2017</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
