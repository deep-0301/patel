import React from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/sbp.jpeg";
import profilePic2 from "../../img/ajay.jpg";
import profilePic3 from "../../img/abhi.jpg";
import profilePic4 from "../../img/komal.jpg";
import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation } from "swiper";

const Reviews = () => {
  const clients = [
    {
      img: profilePic1,
      name: "Mr.Sureshkumar Patel",
      profession: "Assisant Professor (Gec Gandhinagar)",
      review:
        "Deep possesses exceptional web development skills and stands out as one of the most earnest and dedicated students I have encountered. His ability to understand complex concepts, combined with his honesty, exemplary time management, sets him apart. His active participation in the Student Startup Innovation Program is a testament to his commitment to applying his knowledge in practical, innovative contexts",
    },
    {
      img: profilePic2,
      name: "Mr. Ajay Patel",
      profession: "Project Director (Bisag-N)",
      review:
        "During his internship as a software developer under my guidance, Deep gained valuable hands-on experience in MongoDB, Express.js, React.js, and Node.js, significantly contributing to our project's development. Beyond his technical proficiency, Deep proved to be an exemplary teamx member, consistently completing tasks ahead of deadlines and demonstrating exceptional commitment and collaboration skills.",
    },
    {
      img: profilePic3,
      name: "Abhi Patel",
      profession: "Master's Student at University of Regina",
      review:
        "Deep demonstrated exceptional leadership and teamwork skills as the project leader for our 'Credit Card Fraud Detection' and 'Digital Health Card' initiatives. His ability to communicate effectively played a pivotal role in the projects' successes, showcasing not only technical expertise but also remarkable leadership qualities.",
    },
    {
      img: profilePic4,
      name: "Miss.komal anadkat",
      profession:
        "Assisant Professor, Government Engineering College - Gandhinagar",
      review:
        "As an undergraduate student under my guidance, he consistently completed his assignments, quizzes, and projects punctually. Beyond his academic diligence, he actively engaged in a range of co-curricular activities, including organizing events and volunteering at college, among others. His multifaceted involvement highlights a commendable balance between academic responsibilities and community engagement",
    },
  ];
  return (
    <>
      <div className="t-wrapper" id="Review">
        <div className="t-heading">
          <span>Clients & Professors</span>
          <br />
          <span>Testimonials</span>
          <div className="blur t-blur-1"></div>
          <div className="blur t-blur-2"></div>
        </div>
        {/* swipper */}
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {clients.map((clients, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="testimonial">
                  <img src={clients.img} alt="" />
                  <h1>{clients.name}</h1>
                  <p>{clients.profession}</p>
                  <p>{clients.review}</p>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
