import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Search from "antd/lib/input/Search";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { featuredData } from "../constants/data";

//.get(`http://car-ecomm.herokuapp.com/api/company/${brand}`)
const AllCars = () => {
  const [allCars, setAllCars] = useState([]);
  const { brand } = useParams();
  const getBrandsCars = async () => {
    const { data } = await axios.get(
      `https://car-ecomm.herokuapp.com/api/company/${brand}`
    );
    return data;
  };
  useEffect(async () => {
    const data = await getBrandsCars();
    setAllCars(data);
    console.log("allCars", allCars);
  }, []);
  //console.log("data", data);
  console.log("allCars", allCars);

  const [filterText, setFilterText] = useState("");
  const filteredItems = allCars.filter((item) =>
    item.Name.toLocaleLowerCase().includes(filterText)
  );
  const itemsToDisplay = filterText ? filteredItems : allCars;

  return (
    <div>
      <Header />
      <center>
        <Title style={{ marginTop: "50px" }} level={2}>
          {`${brand}'s Showroom`}
        </Title>{" "}
      </center>
      <div
        style={{ display: "flex", justifyContent: "center", marginRight: 30 }}
      >
        <Search
          placeholder="Search for car"
          style={{ width: 250 }}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
      </div>
      {!filteredItems.length && (
        <div
          style={{
            height: 220,
            display: "flex",
            alignItems: "center",
            marginRight: 80,
            justifyContent: "center",
            width: "100%",
            height: "250px",
          }}
        >
          <Title level={4} style={{ color: "grey" }}>
            NO ITEMS TO DISPLAY
          </Title>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 80,
        }}
      >
        {itemsToDisplay.map((item, index) => {
          return (
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
                <Meta title={item.Name} description={`PKR ${item.Price}`} />
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
          );
        })}
      </div>
      <div style={{ height: "50px" }}></div>
      <Footer />
    </div>
  );
};

export default AllCars;
