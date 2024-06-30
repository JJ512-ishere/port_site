/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tech.jpg";

const imageAltText = "portfolio pic";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Customer Churn Prediction",
    description:
      "A customer churn prediction model using CNN-LSTM and augmenting the dataset using GAN",
    url: "https://github.com/JJ512-ishere/Customer-Churn-Predction",
  },
  {
    title: "Football Predictor",
    description:
      "A premier league football predictor using webscrapped football stats to make game predictions for the 23-24 seasons ",
    url: "https://github.com/JJ512-ishere/Football-Predictor-",
  },
  {
    title: "Insurance Game",
    description:
      "Design a basic Game to allow people to better learn how insruance works and how to better handle their money ",
    url: "https://github.com/JJ512-ishere/insurance_game",
  },
  {
    title: "Campus Managment Systems",
    description:
      "A DBMS Project about a Campus Management System for Students and Faculty of the Campus to utilize ",
    url: "https://github.com/JJ512-ishere/dbs-campus-sytem",
  },
  {
    title: "Chess Engine",
    description: "A basic Chess Engine made using Java.",
    url: "https://github.com/JJ512-ishere/chess-engine",
  },
  {
    title: "Sports Home Page",
    description: "Basic HomePage for a Sports Store with a Nav Bar.",
    url: "https://github.com/JJ512-ishere/SportsHomePage",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
