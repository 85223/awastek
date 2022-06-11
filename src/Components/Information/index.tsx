import classes from "./Information.module.sass";
import { Mock } from "../../mock/mock";
import antd, { Radio, Space, Badge, Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useState, useContext } from "react";
import Layout from "../Layout";

interface Props {
  data: Mock[];
  setCurrentValue: React.Dispatch<React.SetStateAction<Mock[] | any>>;
}

const Information = ({ data, setCurrentValue }: Props) => {
  const newData = data.map((object, id) => {
    return { ...object, key: id };
  });

  const [selectionType] = useState<"checkbox" | "radio">("checkbox");

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) =>
        status ? <Badge status="success" /> : <Badge status="error" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Mock[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setCurrentValue(selectedRows);
    },
    getCheckboxProps: (record: Mock) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className={classes.container}>
      <Table
        dataSource={newData}
        columns={columns}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
    </div>
  );
};
export default Information;