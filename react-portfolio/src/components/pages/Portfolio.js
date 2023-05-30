import React from "react";
import Cards from "../Cards";
import bigSky from"../../images/Big-Sky-Lodges.png";
import jate from "../../images/JATE.png";
import orm from"../../images/ORM-ECommerce.gif";
import popPur from"../../images/pop-pursuit.png";
import socialNet from "../../images/Social-Network.gif";
import bucketList from"../../images/Bucket_List.gif";


function Portfolio() {
  const apps = [
    {
      title: "Pop Pursit",
      description: "Population Guessing Game",
      imageSrc:popPur,
      href: "https://eschindev.github.io/population-guesser/",
    },
    {
      title: "Big Sky Lodges",
      description: "A Hotel Booking Site",
      imageSrc: bigSky,
      href: "https://big-sky-lodges.herokuapp.com/",
    },
    {
      title: "JATE",
      description:
        "Just Another Text Editor that can be downloaded on phones or desktop",
      imageSrc: jate,
      href: "https://frozen-reef-29437.herokuapp.com/",
    },
    {
      title: "Social Network API",
      description:
        "This is a API that can be used for posting your thoughts and having friends and family comment and like ",
      imageSrc: socialNet,
      href: "https://github.com/eogbeide424/Social-Network-API",
    },
    {
      title: "Bucket List React App",
      description: "An app that helps keep track of any list of ideas or goals",
      imageSrc:
        bucketList,
      href: "https://eogbeide424.github.io/BucketList/",
    },
    {
      title: "Object Relational Mapping API",
      description:
        "On this project our task was to connect mysql to an enviroment variable file, then when entering the schema and seeds commands to have the database deployed also we had to implement all the routes for the models that was built so when you use insomia the post routes and get routes to all the models work and also the put routes",
      imageSrc: orm,
      href: "https://github.com/eogbeide424/ORM-ECommerce-Challange%7C",
    },
  ];

  return (
    
      <div className="row flex-wrap d-flex justify-content-around">
        {apps.map((app, index) => (
       <div className="col-4 ">
            <Cards  key={index}
              title={app.title}
              description={app.description}
              imageSrc={app.imageSrc}
              href={app.href} 
            />
         </div>
        ))}
      </div>
    
  );
}

export default Portfolio;
