import Layout from "./Components/Layout";
import Information from "./Components/Information";
import mockData from "./mock"; // 請使用此資料
import { Mock } from "./mock/mock";
import { useEffect, useState } from "react";

const AnsWer = () => {
  const [currentValue, setCurrentValue] = useState<Mock[]>();
  const [dataNumber, setDataNumber] = useState<number>(0);
  //   useEffect(() => console.log(currentValue), [currentValue]);
  const [togglerEl, setTogglerEl] = useState<
    React.RefObject<HTMLDivElement> | undefined
  >();
  return (
    <Layout
      currentValue={currentValue}
      dataNumber={dataNumber}
      setTogglerEl={setTogglerEl}
    >
      <Information
        data={mockData}
        setCurrentValue={setCurrentValue}
        setDataNumber={setDataNumber}
        togglerEl={togglerEl}
      />
    </Layout>
  );
};
export default AnsWer;
