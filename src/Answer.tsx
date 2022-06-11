import Layout from "./Components/Layout";
import Information from "./Components/Information";
import mockData from "./mock"; // 請使用此資料
import { Mock } from "./mock/mock";
import { useEffect, useState } from "react";

const AnsWer = () => {
  const [currentValue, setCurrentValue] = useState<Mock[]>();
  useEffect(() => console.log(currentValue), [currentValue]);
  return (
    <Layout currentValue={currentValue}>
      <Information data={mockData} setCurrentValue={setCurrentValue} />
    </Layout>
  );
};
export default AnsWer;
