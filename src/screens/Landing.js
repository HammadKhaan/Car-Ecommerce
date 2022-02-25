import React from "react";
import Header from "../components/Header";
import { Layout, Menu, Breadcrumb } from "antd";
import Footer from "../components/Footer";
import { Carousel, Card, Typography, Button } from "antd";
import Carousel1 from "../assets/carousel1.jpg";
import Carousel2 from "../assets/carousel2.jpg";
import Carousel3 from "../assets/carousel3.png";
import Video from "../assets/videoplayback.webm";
import BMWi8 from "../assets/bmw-i8.png";
import Audi from "../assets/audi-logo.png";
import BMW from "../assets/bmw-logo.png";
import KIA from "../assets/kia-logo.png";
import Hyundai from "../assets/hyundai-logo.png";
import Toyota from "../assets/toyota-logo.png";
import { featuredData } from "../constants/data";

const Landing = () => {
  const { Content } = Layout;
  const { Meta } = Card;
  const { Title } = Typography;

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Layout className="layout">
        <Header />
        <Carousel autoplay>
          <div>
            <img src={Carousel1} style={{ width: "100%", height: "500px" }} />
          </div>
          <div>
            <img src={Carousel2} style={{ width: "100%", height: "500px" }} />
          </div>
          <div>
            <img src={Carousel3} style={{ width: "100%", height: "500px" }} />
          </div>
        </Carousel>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <center>
              <Title style={{ marginTop: "50px" }} level={2}>
                Featured Cars
              </Title>{" "}
            </center>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 80,
              }}
            >
              {featuredData.map((item, index) => {
                return (
                  <div style={{ width: 340, marginTop: 20 }}>
                    <Card
                      hoverable
                      style={{ width: 240, borderRadius: 10 }}
                      cover={
                        <img
                          alt="example"
                          src={item.image}
                          style={{
                            height: "150px",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                        />
                      }
                      key={index}
                    >
                      <Meta
                        title={item.title}
                        description={`PKR ${item.price}`}
                      />
                      <Button
                        type="link"
                        style={{
                          marginLeft: "25px",
                          marginTop: "10px",
                        }}
                      >
                        See more details
                      </Button>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <center>
              <Title style={{ marginTop: "50px" }} level={2}>
                Latest Addition
              </Title>{" "}
            </center>
            <video
              controls
              autoplay
              loop
              muted
              src={Video}
              style={{ width: "100%", height: 400, marginTop: 30 }}
            ></video>
          </div>
          <div
            style={{
              marginTop: 20,
              background: "radial-gradient(#fff, #292828)",
              display: "flex",
              padding: 20,
            }}
          >
            <img src={BMWi8} style={{ width: "30%" }} />
            <div style={{ marginLeft: 130 }}>
              <Title level={1}>
                <b>BMW i8</b>
              </Title>

              <Title level={4}>
                Make it yours by choosing from a variety of interchangeable Car
                and unique faces like the legend of qin, hey and many more, that
                fit your style. Make it yours by choosing from a variety of
                interchangeable Car and unique faces like the legend of qin, hey
                and many more, that fit your style.
              </Title>
              <Button
                size="large"
                shape="round"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(189, 195, 199, 100), rgba(42, 62, 80, 100))`,
                  fontWeight: "bolder",
                  color: "lightgrey",
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div style={{ marginTop: 100 }}>
            <center>
              <Title level={2}>Popular Brands</Title>
            </center>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <img
                alt="logo"
                src={Audi}
                style={{ height: 180, width: 180, cursor: "pointer" }}
              />
              <img
                alt="logo"
                src={KIA}
                style={{ height: 180, width: 180, cursor: "pointer" }}
              />
              <img
                alt="logo"
                src={BMW}
                style={{ height: 180, width: 180, cursor: "pointer" }}
              />
              <img
                alt="logo"
                src={Hyundai}
                style={{ height: 180, width: 180, cursor: "pointer" }}
              />
              <img
                alt="logo"
                src={Toyota}
                style={{ height: 180, width: 180, cursor: "pointer" }}
              />
            </div>
          </div>
          <div style={{ height: "80px" }}></div>
        </Content>
      </Layout>
      <Footer />
    </div>
  );
};

export default Landing;
