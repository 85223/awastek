import React, { ReactNode, Context, createContext, useState } from "react";

import classes from "./Layout.module.sass";
import Header from "../Header";
import Aside from "../Aside";
import OffCanvas from "../OffCanvas";
import "antd/dist/antd.css";
import { Mock } from "../../mock/mock";

interface Props {
  children: ReactNode;
  currentValue?: Mock[];
  dataNumber: number;
  setTogglerEl: React.Dispatch<React.RefObject<HTMLDivElement>>;
  // eact.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement>
  // React.Dispatch<React.SetStateAction<number>>;
}

const Layout = ({
  children,
  currentValue,
  dataNumber,
  setTogglerEl,
}: Props) => {
  return (
    <div className={classes.layout}>
      <Aside />
      <div className={classes.container}>
        <Header />

        <div className={classes.content}>
          <main className={classes.main}>{children}</main>
          <OffCanvas
            currentValue={currentValue}
            dataNumber={dataNumber}
            setTogglerEl={setTogglerEl}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
