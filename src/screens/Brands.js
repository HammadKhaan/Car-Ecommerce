import { Typography, Input } from "antd";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { brandsData } from "../constants/data";

function Brands() {
  const { Title } = Typography;
  const { Search } = Input;
  const [filterText, setFilterText] = useState("");
  const filteredItems = brandsData.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterText)
  );
  const itemsToDisplay = filterText ? filteredItems : brandsData;

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <Title level={1} style={{ marginRight: 30, fontWeight: "bold" }}>
          {" "}
          Brands{" "}
        </Title>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginRight: 30 }}
      >
        <Search
          placeholder="Search for brand"
          style={{ width: 250 }}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginLeft: 80,
        }}
      >
        {!filteredItems.length && (
          <div
            style={{
              height: 220,
              display: "flex",
              alignItems: "center",
              marginRight: 80,
            }}
          >
            <Title level={4} style={{ color: "grey" }}>
              NO ITEMS TO DISPLAY
            </Title>
          </div>
        )}
        {itemsToDisplay.map((item, key) => {
          return (
            <div
              key={key}
              style={{
                marginBottom: 130,
                marginRight: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                style={{
                  height: 230,
                  width: 300,
                  cursor: "pointer",
                }}
              />
              <Title style={{ marginTop: 20 }} level={5}>
                {item.name}
              </Title>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Brands;
