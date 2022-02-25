import React from "react";
import "../../src/Global.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Logo from "../assets/logo2.png";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">
        <img
          src={Logo}
          style={{ height: "45px", width: "140px", cursor: "pointer" }}
        />
      </div>
      <Menu theme="dark" mode="horizontal">
        {[
          `Home`,
          `Brands`,
          `Comparision`,
          `About Us`,
          `Contact Us`,
          `Try Our Recommendation System`,
        ].map((item, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{item}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
};

export default Header;
