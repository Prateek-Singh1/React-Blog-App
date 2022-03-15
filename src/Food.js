import React from "react";

export const Food = () => {
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
              <span className="technology-header">Foods</span>
            </h3>
          </div>
          <div className="tech2">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Aloo gobi"
              description="Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves."
              date="Vegetarian"
            />
          </div>
          <div className="tech3">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Aloo tikki"
              description="Patties of potato mixed with some vegetables fried"
              date="Vegetarian"
            />
          </div>
          <div className="tech4">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Aloo matar"
              description="Potatoes and peas in curry"
              date="Vegetarian"
            />
          </div>
          <div className="tech5">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Aloo shimla mirch"
              description="Green capsicum with potatoes sautéed with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder and garam masala"
              date="Vegetarian"
            />
          </div>
          <div className="tech6">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Chana masala"
              description="	Chickpeas of the Chana type in tomato based sauce."
              date="Vegetarian"
            />
          </div>
          <div className="tech7">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Bhatura"
              description="a fluffy deep-fried leavened bread originating from the Indian subcontinent."
              date="Vegetarian"
            />
          </div>
          <div className="tech8">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Chaat"
              description="Street food. Usually containing potato patty fried in oil, topped with sweet yogurt, and other sauces and spices"
              date="Vegetarian"
            />
          </div>
          <div className="tech9">LOAD MORE</div>
        </div>
        <div className="container2">
          <div classNmae="tech10">
            <h3>
              <span className="bollytech-header2">Top Foods</span>
            </h3>
          </div>
          <div className="tech11">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Dal makhani (kali dal)"
              description="a main course with lentils"
              date="Vegetarian"
            />
          </div>
          <div className="tech12">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Dal"
              date="Vegetarian"
            />
          </div>
          <div className="tech13">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Poha"
              date="Vegetarian"
            />
          </div>
          <div className="tech14">
            <Cards
              imgsrc="https://source.unsplash.com/1600x800/?food"
              title="Dum aloo"
              date="Vegetarian"
            />
          </div>
          <div className="tech15">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default Food;
