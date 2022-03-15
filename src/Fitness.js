import React from "react";
import "./Technology.css";

export const Fitness = () => {
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
              <span className="technology-header">Fitness</span>
            </h3>
          </div>
          <div className="tech2">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Cardiorespiratory performance"
              description="Cardiorespiratory endurance indicates how well the body can supply fuel during physical"
              date="Exercises"
            />
          </div>
          <div className="tech3">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Muscular strength"
              description="There are a number of ways to measure muscular strength."
              date="Exercises"
            />
          </div>
          <div className="tech4">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Muscular endurance"
              description="Fitness can also include muscular endurance, which is the ability of a muscle to continue exerting force without tiring"
              date="Exercises"
            />
          </div>
          <div className="tech5">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Body composition"
              description="Body composition measures the relative amounts of muscle, bone, water, and fat an individual has"
              date="Exercises"
            />
          </div>
          <div className="tech6">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Balance"
              description="typically measured by how long a particular position can be held with or without some type of activity being performed"
              date="Exercises"
            />
          </div>
          <div className="tech7">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Speed "
              description="typically measured by how quickly an individual can move from one point to another"
              date="Exercises"
            />
          </div>
          <div className="tech8">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Aerobic fitness"
              description="Aerobic activity, also known as cardio or endurance activity, is the cornerstone of most fitness"
              date="Exercises"
            />
          </div>
          <div className="tech9">LOAD MORE</div>
        </div>
        <div className="container2">
          <div classNmae="tech10">
            <h3>
              <span className="bollytech-header2">Top Exercise</span>
            </h3>
          </div>
          <div className="tech11">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Flexibility"
              description="Flexibility refers to the range of movement across a joint."
              date="Exercises"
            />
          </div>
          <div className="tech12">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Dynamic stretching"
              date="Exercises"
            />
          </div>
          <div className="tech13">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Static-active stretching"
              date="Exercises"
            />
          </div>
          <div className="tech14">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?fitness"
              title="Ballistic stretching"
              date="Exercises"
            />
          </div>
          <div className="tech15">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
