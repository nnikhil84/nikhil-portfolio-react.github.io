import React, { useState } from "react";
import Modal from "../Modal";

function ProjectList({ category }) {
  const [photos] = useState([
    {
      name: "About",
      category: "About",
      link: "https://nnikhil84.github.io/nikhil-portfolio.github.io/",
      description:
        "Experienced Property Manager with a strong problem solving and communication skills.",
    },
    {
      name: "Portfolio Project",
      category: "Business Applications",
      link: "https://nnikhil84.github.io/nikhil-portfolio.github.io/",
      description:
        "Created a responsive web-page to showcase early projects using HTML & CSS",
    },
    {
      name: "Budget Tracker",
      category: "Business Applications",
      link: "https://track-your-budget-uot.herokuapp.com/",
      description:
        "A PWA (progressive web application); Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information.",
    },
    {
      name: "E-Commerce Back-end",
      category: "Business Applications",
      link: "https://github.com/nnikhil84/e-commerce.github.io",
      description:
        "Created the back end for an e-commerce site. I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database. Because this application is not deployed, the link will take you to the GitHub repo, where I have created a walkthrough video that demonstrates its functionality.",
    },
    {
      name: "Team Profile Generator",
      category: "Business Applications",
      link: "https://github.com/nnikhil84/team-profile.github.io",
      description:
        "This project is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, we also write unit tests for each part of the code and ensure that it passes all of them. This application uses Jest for running the unit tests and Inquirer for collecting input from the user. The application is invoked by using the following command:node index.js. A sample HTML file generated using the application located in the GitHub repository, which also contains the application code.",
    },
    {
      name: "Tech Blog",
      category: "Business Applications",
      link: "https://the-tech-blog-uot.herokuapp.com/",
      description:
        "A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This site was built from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. (I have used an Express.js API, configure it to use Sequelize to interact with a MySQL database). A link to the start up demo video and this code for the app is published to github",
    },
    {
      name: "Password Generator",
      category: "Front-End Projects",
      link: "https://nnikhil84.github.io/generate.passwords.github.io/",
      description:
        "An application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It features a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.",
    },
    {
      name: "The Quiz",
      category: "Front-End Projects",
      link: "https://nnikhil84.github.io/coding-quiz-challenge.github.io/",
      description:
        "A timed coding quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It also features a clean, polished and responsive user interface, ensuring that it adapts to multiple screen sizes.",
    },
    {
      name: "Weather Dashboard Application",
      category: "Front-End Projects",
      link: "https://nnikhil84.github.io/weather.dashboard.github.io/",
      description:
        "Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. I was tasked with retrieving data from another application API and using it in the context of my own to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. I used the OpenWeather API (https://openweathermap.org/api) to retrieve weather data for cities. The documentation in GitHub provides basic setup and usage instructions. I have used localStorage to store persistent data.",
    },
    {
      name: "Work Day Scheduler",
      category: "Front-End Projects",
      link: "https://nnikhil84.github.io/work-day-scheduler.github.io/",
      description:
        "I have created a simple calendar application that allows me to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Git hub repository: https://github.com/anitapeppercorn/WorkSchedule",
    },
    {
      name: "My Resume Page 1",
      category: "Resume",
      link: "https://www.linkedin.com/in/nikhilnarendran/",
      description: "Page 1 of resume",
    },
    {
      name: "My Resume Page 2",
      category: "Resume",
      link: "https://www.linkedin.com/in/nikhilnarendran/",
      description: "Page 2 of resume",
    },
  ]);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
            data-testid={"img" + i}
            onClick={() => toggleModal(image, i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
