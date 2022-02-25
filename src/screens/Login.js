import React, { useState } from "react";
import login_background from "../assets/login_background.jpg";
import { Input, Card, Button } from "antd";
import { UserOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import "../Global.css";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section
      style={{
        backgroundImage: `url(${login_background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "657px",
      }}
    >
      <div className="site-card-border-less-wrapper">
        <Card
          title={
            <p
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              <UserOutlined style={{ marginRight: "10px" }} />
              {isSignUp ? `SIGN UP` : `USER LOGIN`}
            </p>
          }
          bordered={false}
          style={{ width: 300, borderRadius: 20 }}
          loading={false}
        >
          {isSignUp ? (
            <>
              <Input
                size="large"
                placeholder="Enter Your Full Name"
                prefix={<UserOutlined style={{ marginRight: "8px" }} />}
                style={{ marginBottom: "20px" }}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </>
          ) : (
            <></>
          )}
          <Input
            size="large"
            placeholder="Enter Your Email Address"
            prefix={<MailOutlined style={{ marginRight: "8px" }} />}
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />

          <Input.Password
            placeholder="Enter Your Password"
            size="large"
            prefix={<KeyOutlined style={{ marginRight: "8px" }} />}
            style={{ marginTop: "20px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            {isSignUp ? `SIGN UP` : `LOGIN`}
          </Button>
          {isSignUp ? (
            <Button
              type="link"
              block
              style={{ marginTop: "10px" }}
              onClick={() => setIsSignUp(false)}
            >
              Go back to Login
            </Button>
          ) : (
            <Button
              type="link"
              block
              style={{ marginTop: "10px" }}
              onClick={() => setIsSignUp(true)}
            >
              Or Sign Up here
            </Button>
          )}
        </Card>
      </div>
    </section>
  );
}

export default Login;
