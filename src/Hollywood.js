import React from "react";
import "./Technology.css";

export const Hollywood = () => {
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
              <span className="technology-header">Hollywood</span>
            </h3>
          </div>
          <div className="tech2">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="The 400 Blows"
              description="A young boy, left without attention, delves into a life of petty crime."
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech3">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="La Haine"
              description="24 hours in the lives of three young men in the French suburbs the day after a violent riot."
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech4">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="The Dark Knight"
              description="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham"
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech5">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="Fight Club"
              description="An insomniac office worker and a devil-may-care soap maker form an underground fight "
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech6">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="Batman Begins"
              description="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech7">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="The Big Lebowski"
              description="After training with his mentor, Batman begins his fight to free crime-ridden"
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech8">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="Snatch"
              description="Unscrupulous boxing promoters, violent bookmakers, a Russian gangster"
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech9">LOAD MORE</div>
        </div>
        <div className="container2">
          <div classNmae="tech10">
            <h3>
              <span className="bollytech-header2">Top Hollywood</span>
            </h3>
          </div>
          <div className="tech11">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="The Matrix"
              description="When a beautiful stranger leads computer hacker Neo to a forbidding underworld"
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech12">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="The Usual Suspects "
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech13">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="Goodfellas"
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech14">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?hollywood"
              title="Ip Man "
              date="Year / 1959-2020"
            />
          </div>
          <div className="tech15">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default Hollywood;
