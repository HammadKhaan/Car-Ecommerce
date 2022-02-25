import React from "react";
import { Layout, Typography } from "antd";
import PlayStoreLogo from "../assets/play-store.png";
import AppStoreLogo from "../assets/app-store.png";
import Logo from "../assets/logo2.png";

function Footer() {
  const { Footer } = Layout;
  const { Title } = Typography;

  return (
    // <Footer style={{ textAlign: "center" }}>
    <div
      style={{
        height: "220px",
        backgroundColor: "#001529",
        padding: 40,
        display: "flex",
      }}
    >
      <div>
        <Title level={4} style={{ color: "white" }}>
          Download Our App
        </Title>
        <Title level={5} style={{ color: "grey" }}>
          Download App for Android and ios mobile phone.
        </Title>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <img src={PlayStoreLogo} style={{ height: "50px", width: "170px" }} />
          <img
            src={AppStoreLogo}
            style={{ height: "50px", width: "170px", marginLeft: "22px" }}
          />
        </div>
      </div>
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "50px",
        }}
      >
        <img src={Logo} style={{ height: "70px", width: "170px" }} />
        <Title
          level={5}
          style={{ color: "grey", marginTop: "30px", textAlign: "center" }}
        >
          Our Purpose Is To Sustainably Make the Pleausre and Benefits of Cars
          Accessible to the Many.
        </Title>
      </div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          marginLeft: "70px",
          marginTop: "5px",
        }}
      >
        <Title level={4} style={{ color: "white" }}>
          Useful Links
        </Title>
        <p style={{ color: "grey", textAlign: "center" }}>Coupons</p>
        <p style={{ color: "grey", textAlign: "center" }}>Blog Post</p>
        <p style={{ color: "grey", textAlign: "center" }}>Return Policy</p>
      </div>

      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          marginLeft: "150px",
          marginTop: "5px",
        }}
      >
        <Title level={4} style={{ color: "white" }}>
          Follow Us
        </Title>
        <p style={{ color: "grey", textAlign: "center" }}>Facebook</p>
        <p style={{ color: "grey", textAlign: "center" }}>Twitter</p>
        <p style={{ color: "grey", textAlign: "center" }}>Instagram</p>
      </div>
    </div>
    // </Footer>
  );
}

export default Footer;
