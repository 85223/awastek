import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Components/Layout";
import Information from "./Components/Information";
import mockData from "./mock"; // 請使用此資料
import { Mock } from "./mock/mock";
import AnsWer from "./Answer";

// const [currentValue, setCurrentValue] = useState<Mock>();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <Layout>
  //   <Information data={mockData} />
  // </Layout>
  <AnsWer />
);
