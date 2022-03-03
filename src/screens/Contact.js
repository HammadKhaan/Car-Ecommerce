import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contact_background from "../assets/contact-us.jpg";
import { Button, Card, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const Contact = () => {
  return (
    <div>
      <Header />
      <section
        style={{
          backgroundImage: `url(${contact_background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "657px",
          display: "flex",
          flexDirection: "row-reverse",
          paddingRight: "120px",
          paddingTop: "60px",
        }}
      >
        <Card
          title={
            <>
              <p
                style={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                Contact Us
              </p>
              <p>Any Queries? Feel free to contact</p>
            </>
          }
          bordered={false}
          style={{
            width: 300,
            borderRadius: 20,
            marginRight: "100px",
            marginBottom: "20px",
            height: "500px",
          }}
          loading={false}
        >
          <Input placeholder="Email Address" />
          <br />
          <br />
          <TextArea rows={4} placeholder="Enter your message" />
          <Button
            block
            style={{
              backgroundImage: `linear-gradient(to right, rgba(189, 195, 199, 100), rgba(42, 62, 80, 100))`,
              marginTop: "40px",
              fontWeight: "bolder",
              color: "lightgrey",
            }}
            size="large"
          >
            SUBMIT
          </Button>
        </Card>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
