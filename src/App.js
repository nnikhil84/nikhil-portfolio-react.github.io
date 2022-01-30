import React, { useState } from "react";
//import About from './components/About';
// remove <About /> call for about component in <main> after <Gallery currentCategory={currentCategory} />
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer/index";

function App() {
  const [categories] = useState([
    {
      name: "About",
      description:
        "Nikhil is an experienced Property Manager with a strong problem solving and communication skills. Through collaboration and teamwork he has delivered to UAE and Canada's Real Estate Asset management since 2010. He has a Bachelor's degree in Hospitality Management and a Master's in Business Administration in Marketing and Retail Management with over 12 years of experience in Customer Experience Management.",
    },
    {
      name: "Business Applications",
      description:
        "Click on the image of the Application below to see more information. These are web applications built for business use; utilizing both front-end and full-stack tools",
    },
    {
      name: "Front-End Projects",
      description:
        "Click on the image of the Application below to see more information. These are projects completed with front-end development tools & skills",
    },
    {
      name: "Resume",
      description: "Here are details of my accomplishments and skills",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
          </>
        ) : (
          <Contact />
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
