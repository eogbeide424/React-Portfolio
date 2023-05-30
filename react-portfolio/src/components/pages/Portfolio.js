import React from "react";
import Cards from "../Cards";
import "../../images";

function Portfolio() {
  const apps = [
    {
      title: "Pop Pursit",
      description: "Population Guessing Game",
      imageSrc: "../../images/pop-pursit.png",
      href: "https://eschindev.github.io/population-guesser/",
    },
    {
      title: "Big Sky Lodges",
      description: "A Hotel Booking Site",
      imageSrc: "../../images/Big-Sky-Lodges.png",
      href: "https://big-sky-lodges.herokuapp.com/",
    },
    {
      title: "JATE",
      description:
        "Just Another Text Editor that can be downloaded on phones or desktop",
      imageSrc: "../../images/JATE.png",
      href: "https://frozen-reef-29437.herokuapp.com/",
    },
    {
      title: "Social Network API",
      description:
        "This is a API that can be used for posting your thoughts and having friends and family comment and like ",
      imageSrc: "../../images/Social-Network.gif",
      href: "https://github.com/eogbeide424/Social-Network-API",
    },
    {
      title: "Bucket List React App",
      description: "An app that helps keep track of any list of ideas or goals",
      imageSrc:
        "../../images/Bucket_List.gif",
      href: "https://eogbeide424.github.io/BucketList/",
    },
    {
      title: "Object Relational Mapping API",
      description:
        "On this project our task was to connect mysql to an enviroment variable file, then when entering the schema and seeds commands to have the database deployed also we had to implement all the routes for the models that was built so when you use insomia the post routes and get routes to all the models work and also the put routes",
      imageSrc: "../../images/ORM-ECommerce.gif",
      href: "https://github.com/eogbeide424/ORM-ECommerce-Challange%7C",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {apps.map((app, index) => (
          <div className="col-md-4" key={index}>
            <Cards
              title={app.title}
              description={app.description}
              imageSrc={app.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
