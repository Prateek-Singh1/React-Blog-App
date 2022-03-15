import React from "react";
import "./Bollywood.css";

const Bollywood = () => {
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
      <div className="bollywood">
        <div className="container1">
          <div className="wood1">
            <h3>
              <span className="bollywood-header">Bollywood</span>
            </h3>
          </div>
          <div className="wood2">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Tanhaji"
              description="Ajay Devgn FFilms, T-Series"
              date="Year / 2020"
            />
          </div>
          <div className="wood3">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Street Dancer 3D"
              description="T-Series, Remo D'Souza Entertainment"
              date="Year / 2020"
            />
          </div>
          <div className="wood4">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="	Malang"
              description="T-Series, Luv Films, Northern Lights Entertainment"
              date="Year / 2020"
            />
          </div>
          <div className="wood5">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Love Aaj Kal"
              description="Maddock Films, Window Seat Films, Jio Studios, Reliance Entertainment"
              date="Year / 2020"
            />
          </div>
          <div className="wood6">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Sab Kushal Mangal"
              description="Akshaye KhannaRiva KishanPriyank Sharma"
              date="Year / 2020"
            />
          </div>
          <div className="wood7">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Half Widow"
              description="Neelofar HamidShahnawaz BhatMir SarwarHaseena Sofi"
              date="Year / 2020"
            />
          </div>
          <div className="wood8">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Street Dancer 3D"
              description="	
                        Varun DhawanShraddha KapoorPrabhu DevaNora FatehiAparshakti KhuranaMurali SharmaRaghav Juyal"
              date="Year / 2020"
            />
          </div>
          <div className="wood9">LOAD MORE</div>
        </div>
        <div className="container2">
          <div classNmae="wood10">
            <h3>
              <span className="bollywood-header2">Top Bollywood</span>
            </h3>
          </div>
          <div className="wood11">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Dogtown 2"
              description="Will Dogtown stop Barney Lockjaws before it's too late? Find out in Dogtown 2."
              date="Year / 2020"
            />
          </div>
          <div className="wood12">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Shikara"
              date="Year / 2020"
            />
          </div>
          <div className="wood13">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Guns of Banaras"
              date="Year / 2020"
            />
          </div>
          <div className="wood14">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?bollywood"
              title="Haunted Hills"
              date="Year / 2020"
            />
          </div>
          <div className="wood15">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default Bollywood;
