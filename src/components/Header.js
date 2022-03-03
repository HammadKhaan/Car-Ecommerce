import React from "react";
import "../../src/Global.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

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
        {/* {[
          //`Home`,
          // `Brands`,
          // `Comparision`,
          // `About Us`,
          // `Contact Us`,
          // `Try Our Recommendation System`,
        ].map((item, index) => {
          const key = index + 1;
          return (
            <Menu.Item key={key}>
              <Link to="/"></Link>
            </Menu.Item>
          );
        })} */}
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/brands">Brands</Link>
        </Menu.Item>
        {/* <Menu.Item>
          <Link to="/">Comparision</Link>
        </Menu.Item> */}
        <Menu.Item>
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/recommendation">Try Our Recommendation System</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Logout</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
//key === 1 ? `/` : key === 2 ? `brands` : key === 3 ? `/` : key === 4 ? `about` : key
