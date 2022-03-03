import { Button, Card } from "antd";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AudiQ5_1 from "../assets/audi-Q5-1.jpg";
import AudiQ5_2 from "../assets/audi-Q5-2.jpg";
import AudiQ5_3 from "../assets/audi-Q5-3.jpg";
import AudiQ5_4 from "../assets/audi-Q5-4.jpg";
import AudiQ5_5 from "../assets/audi-Q5-5.jpg";
import Title from "antd/lib/typography/Title";
import { StarFilled } from "@ant-design/icons";
import { featuredData, relatedCarsData } from "../constants/data";

const CarDetail = () => {
  const [car, setCar] = useState([]);
  const { name } = useParams();
  console.log("carName", name);
  const getCar = async () => {
    const { data } = await axios.get(
      `https://car-ecomm.herokuapp.com/api/name/${name}`
    );
    return data;
  };
  useEffect(async () => {
    const data = await getCar();
    setCar(data);
    console.log("car", car);
  }, []);
  console.log("car", car);
  console.log("item", car.filter_car);
  return (
    <div>
      <Header />
      {car.filter_car &&
        car.filter_car.map((item, index) => {
          return (
            <>
              {index < 1 ? (
                <div style={{ display: "flex", padding: 50 }}>
                  <div
                    style={{
                      width: 500,
                      border: "1px solid black",
                      boxShadow: "3px 3px 3px 3px grey",
                    }}
                  >
                    <img
                      alt="example"
                      src={`https://drive.google.com/uc?export=view&id=${item.img1.slice(
                        32,
                        65
                      )}`}
                      style={{ width: 490 }}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${item.img2.slice(
                          32,
                          65
                        )}`}
                        style={{ width: 120, height: 100 }}
                      />
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${item.img3.slice(
                          32,
                          65
                        )}`}
                        style={{ width: 120, height: 100 }}
                      />
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${item.img4.slice(
                          32,
                          65
                        )}`}
                        style={{ width: 120, height: 100 }}
                      />
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${item.img5.slice(
                          32,
                          65
                        )}`}
                        style={{ width: 120, height: 100 }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "50px",
                        paddingLeft: 20,
                      }}
                    >
                      <Title style={{ width: "120px" }} level={3}>
                        Engine:
                      </Title>
                      <Title style={{ marginTop: 0 }} level={4}>
                        {item?.Engine}
                      </Title>
                      <div></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingLeft: 20,
                      }}
                    >
                      <Title style={{ width: "120px" }} level={3}>
                        Body Type:
                      </Title>
                      <Title style={{ marginTop: 0 }} level={4}>
                        {item?.Body}
                      </Title>
                      <div></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingLeft: 20,
                      }}
                    >
                      <Title style={{ width: "120px" }} level={3}>
                        Ratings:
                      </Title>
                      <Title style={{ marginTop: 0 }} level={4}>
                        {item?.ratings}{" "}
                        <StarFilled style={{ color: "yellow" }} />
                      </Title>
                      <div></div>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 50 }}>
                    <Title level={1} style={{ fontWeight: "bold" }}>
                      {item?.Name}
                    </Title>
                    <Title level={3} style={{ fontWeight: "bold" }}>
                      PKR {item?.Price}
                    </Title>
                    <Title level={4}>Description</Title>
                    <p>
                      {item?.Details} A concept vehicle for the then upcoming
                      Q5, this was a 2-door convertible with a 3.0 TDI engine
                      rated at 240 PS (177 kW; 237 hp) and 500 N⋅m (369 lbf⋅ft)
                      torque, quattro permanent four wheel drive, 8-speed
                      automatic transmission, Copper Sunset body, LED
                      headlights, 21-inch wheels with 265/35R21 tyres, seats
                      with White Stone leather upholstery, MMI, 505W Bang &
                      Olufsen sound system and internet radio, CDC (continuous
                      damping control) shock absorbers, electric ride height
                      adjustment (40 mm), 380/356 mm front/rear ceramic brake
                      discs with 6-piston monobloc aluminium front, and floating
                      rear callipers, Audi Drive Select.
                    </p>
                    <Link to="/thankyou">
                      <Button
                        //block
                        style={{
                          backgroundImage: `linear-gradient(to right, rgba(189, 195, 199, 100), rgba(42, 62, 80, 100))`,
                          marginTop: "40px",
                          fontWeight: "bolder",
                          color: "lightgrey",
                        }}
                        size="large"
                        onClick={() => {
                          axios
                            .post(
                              "https://car-ecomm.herokuapp.com/api/purchase/",
                              {
                                id: 2,
                                Company: "Honda",
                                Name: "City",
                                Engine: "1800cc",
                                Price: 1000000,
                                Reg_charge: 1111,
                                Govt_charge: 100000,
                                Num_plate_charge: 10000,
                                first_name: "Hammad",
                                last_name: "Khan",
                                email: "hammad@gmail.com",
                                Address: "Karachi",
                              }
                            )
                            .then(function (response) {
                              console.log(response);
                              response.setHeader(
                                "Access-Control-Allow-Origin",
                                "*"
                              );
                              response.setHeader(
                                "Access-Control-Allow-Credentials",
                                "true"
                              );
                              response.setHeader(
                                "Access-Control-Allow-Methods",
                                "GET,HEAD,OPTIONS,POST,PUT"
                              );
                              response.setHeader(
                                "Access-Control-Allow-Headers",
                                "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                              );
                            })
                            .catch(function (error) {
                              console.log(error);
                            });
                        }}
                      >
                        BUY NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          );
        })}
      <div className="site-layout-content">
        <center>
          <Title style={{ marginTop: "50px" }} level={2}>
            Related Cars
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
          {car?.recommended_car?.map((item, index) => {
            return (
              <>
                {index > 3 ? (
                  <div style={{ width: 340, marginTop: 20 }}>
                    <Card
                      hoverable
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
                      <Meta
                        title={item.Name}
                        description={`PKR ${item.Price}`}
                      />
                      {/* <Link to={`/${item.Name}/carDetail`}> */}
                      <Button
                        type="link"
                        style={{
                          marginLeft: "25px",
                          marginTop: "10px",
                        }}
                      >
                        See more details
                      </Button>
                      {/* </Link> */}
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

export default CarDetail;
