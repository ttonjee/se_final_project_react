import React from "react";
import placeholderImage from "../../assets/placeholder.svg";
import "./About.css";

function About() {
  console.log("Placeholder image path:", placeholderImage);

  return (
    <section className="about-section">
      <div className="about-section__content">
        <div className="about-section__top">
          <div className="about-section__image-container">
            <img
              src={placeholderImage}
              alt="Placeholder image. Put an image of yourself here."
              className="about-section__placeholder"
            />
          </div>

          <div className="about-section__text">
            <h2 className="about-section__title">About the author</h2>
            <p className="about-section__description">
              This block describes the project author. Here you should indicate
              your name, what you do, and which development technologies you
              know.
            </p>
            <p className="about-section__description">
              You can also talk about your experience with TripleTen, what you
              learned there, and how you can help potential customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
