import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function EventCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgs/events/mentorship/mentorship-craft-night-2019.JPG"
          alt="mentorship craft night"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgs/events/leetcode/leetcode2018-19.jpg"
          alt="leetcode session"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgs/events/outreach/next-generation-edison-outreach2018.JPG"
          alt="next generation outreach"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgs/events/infrastructure/html&cssworkshop.jpg"
          alt="html and css workshop"
        />
      </Carousel.Item>
    </Carousel>
  );
}
