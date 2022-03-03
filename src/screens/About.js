import Title from "antd/lib/typography/Title";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import about_background from "../assets/about-us.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <section
        style={{
          backgroundImage: `url(${about_background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "657px",
          display: "flex",
          // flexDirection: "row-reverse",
          paddingLeft: "120px",
          paddingTop: "60px",
        }}
      >
        <div style={{ width: "500px" }}>
          <center>
            <Title level={1} style={{ fontWeight: "bold", color: "black" }}>
              About Us
            </Title>
          </center>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            We believe it is our duty to provide our visitors with the best
            online experience and we aim to revolutionise how you can buy or
            decide on your preferred automobile. This website consists of
            Machine Learning based recommendation system designed with
            comprehensive automotive knowledge with respect to Pakistan and how
            any individual might expect or deserves to be recommended cars as.
            We help our individuals develop a sense of belonging in the
            automotive community.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
