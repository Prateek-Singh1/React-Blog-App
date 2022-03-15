import React from "react";
import "./Technology.css";

const Technology = () => {
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
      <div className="technology">
        <div className="container1">
          <div className="tech1">
            <h3>
              <span className="technology-header">Technology</span>
            </h3>
          </div>
          <div className="tech2">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Agricultural robotics"
              description="Research and development, trial projects"
              date="Year / 2021"
            />
          </div>
          <div className="tech3">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Closed ecological systems"
              description="Research and development, working demonstrators"
              date="Year / 2021"
            />
          </div>
          <div className="tech4">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Plasma propulsion"
              description="Research and development"
              date="Year / 2021"
            />
          </div>
          <div className="tech5">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Pulse detonation engine"
              description="Most instantiations are still in research and development. At least one prototype has been flown as of 2008."
              date="Year / 2021"
            />
          </div>
          <div className="tech6">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Arcology"
              description="Research, development, commercialization"
              date="Year / 2021"
            />
          </div>
          <div className="tech7">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Digital currency"
              description="	Prototypes, early uses"
              date="Year / 2021"
            />
          </div>
          <div className="tech8">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Catch waves with an adventure guide"
              description="	Research and development"
              date="Year / 2021"
            />
          </div>
          <div className="tech9">LOAD MORE</div>
        </div>
        <div className="container2">
          <div classNmae="tech10">
            <h3>
              <span className="bollytech-header2">Top Tech</span>
            </h3>
          </div>
          <div className="tech11">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Aerogel"
              description="Hypothetical, experiments, diffusion, early uses"
              date="Year / 2021"
            />
          </div>
          <div className="tech12">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Amorphous metal"
              date="Year / 2021"
            />
          </div>
          <div className="tech13">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Bioplastic"
              date="Year / 2021"
            />
          </div>
          <div className="tech14">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?technology"
              title="Electric armour"
              date="Year / 2021"
            />
          </div>
          <div className="tech15">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default Technology;
