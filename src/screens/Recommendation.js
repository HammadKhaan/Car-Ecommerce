import { Button, Card, Form, Input } from "antd";
import Meta from "antd/lib/card/Meta";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Recommendation = () => {
  const [bodyType, setBodyType] = useState("");

  const [allCars, setAllCars] = useState([]);
  const getRecommendedCars = async () => {
    const { data } = await axios.get(
      `https://car-ecomm.herokuapp.com/api/company/`
    );
    return data;
  };
  useEffect(async () => {
    const data = await getRecommendedCars();
    setAllCars(data);
    console.log("allCars", allCars);
  }, []);
  console.log("allCars", allCars);
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "50px" }}>
        <Title style={{ textAlign: "center" }} level={2}>
          Recommendation System
        </Title>
        <Title
          style={{ textAlign: "center", color: "grey", marginBottom: "50px" }}
          level={5}
        >
          {" "}
          Not sure what to buy? Try out filling the below form, we'll suggest
          you the best possible cars for you through our Machine Learning
          Algortihms{" "}
        </Title>
        <Form
          style={{ paddingLeft: "100px", paddingRight: "100px" }}
          layout="horizontal"
        >
          <Form.Item required label="Price">
            <Input placeholder="Insert your price range" />
          </Form.Item>
          <Form.Item required label="Engine">
            <Input placeholder="Enter your required engine size" />
          </Form.Item>
          <Form.Item required label="Seating Capacity">
            <Input placeholder="Enter your required seating capacity" />
          </Form.Item>
          <Form.Item required label="Body Type">
            <Input
              placeholder="Insert your require body type"
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}
            />
          </Form.Item>
          <center>
            <Form.Item>
              <Button onClick={() => {}} type="primary">
                Submit
              </Button>
            </Form.Item>
          </center>
        </Form>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingLeft: "100px",
            backgroundColor: "whitesmoke",
          }}
        >
          {allCars.map((item, index) => {
            return (
              <>
                {item.Body === bodyType ? (
                  <div style={{ width: 340, marginTop: 20 }}>
                    <Card
                      style={{ width: 240, borderRadius: 10 }}
                      cover={
                        <img
                          alt="example"
                          src={`https://drive.google.com/uc?export=view&id=${item.img1.slice(
                            32,
                            65
                          )}`}
                          style={{
                            height: "150px",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                        />
                      }
                      key={index}
                    >
                      <p>Brand: {item.Company}</p>
                      <Meta
                        title={item.Name}
                        description={`PKR ${item.Price}`}
                      />
                      <Link to={`/${item.Name}/carDetail`}>
                        <Button
                          type="link"
                          style={{
                            marginLeft: "25px",
                            marginTop: "10px",
                          }}
                        >
                          See more details
                        </Button>
                      </Link>
                    </Card>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recommendation;
