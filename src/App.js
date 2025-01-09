import React, { useEffect } from "react";
import { Layout } from "antd";
import "./App.css"; // CSS faylini import qilamiz
import Sertf from "./img/qrcode2020.png";

const { Content } = Layout;

function App() {
  useEffect(() => {
    // O'ng tugma (context menu) ni bloklash
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Rasmni sudrab olib chiqishni bloklash
    const handleDragStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("dragstart", handleDragStart);
    });

    // Cleanup funksiyasi
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.querySelectorAll("img").forEach((img) => {
        img.removeEventListener("dragstart", handleDragStart);
      });
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="container">
          <div className="image-frame">
            <img
              src={Sertf}
              alt="A4 format image"
              className="image"
              style={{
                pointerEvents: "none", // CSS orqali rasmni tanlanmaslikni ta'minlash
              }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
