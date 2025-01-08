import React from "react";
import { Layout } from "antd";
import "./App.css"; // CSS faylini import qilamiz
import Sertf from "./img/sertifi55.jpg";
const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="container">
          <img src={Sertf } alt="A4 format image" className="image" />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
