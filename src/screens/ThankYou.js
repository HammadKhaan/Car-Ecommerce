import Title from "antd/lib/typography/Title";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ThankYou = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title level={1}>Thank you for Purchasing!</Title>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
