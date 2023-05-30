


# React Portfolio 
|CSS,HTML,Javascript  | https://github.com/eogbeide424/React-Portfolio| 
|Deployed Link | https://eogbeide424.github.io/React-Portfolio/ 

## Description

 On this project we had to test our knowledge on React. Similar to an earlier project we had we had to create a portfolio of our work but with React. I created a single page website that dynamically generate pages and elements that we created as components of our application with these components I only had to build one instance but I was able to reuse on different parts of my website on multiple pages. I acheieved this in part due to mapping and use state hooks with and other methods. On the snippett of code below I used React useState to establish the initial page to display and depending on what tab a person clicked on it would switch the state of the page to the desired page 
 ````js
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }

    return <Contact />;
  };
````
I ran into a sew issues when it came to mapping the card componet on the portfolio page 
````js
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
    //   <!-- ````````````I was trying to set it within the code below -->//
    function Cards({ title, description, imageSrc, href }) {
  return (
    <div className="card mt-2">
      <h5 className="card-title bg-dark">{title}</h5>

      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body bg-dark">
        <p className="card-text bg-dark ">{description}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">Click Here </a>
      </div>
    </div>
  );
}
export default Cards;

    
  ````
  I was trying to set the classes with in the prop or the creation of the instance and was highly confused to why the cards wasn't lining up horizontally but vertically then I realized it sometimes it not best to try to kill two birds with one stone and just go throught the proccess


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

vistit the deployed link 


## Usage 





## Credits

Eugene Ogbeide eogbeide2@gmail.com

## License

MIT

'https://choosealicense.com/licenses/MIT/

undefined



---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges


https://img.shields.io/badge/license-MIT-red

## Questions
If any questions on how to use the app you can email me at eogbeide2@gmail.com

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
