import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Date Of Birth",
    dataIndex: "dob",
  },
  {
    title: "Total Experience",
    dataIndex: "totalExp",
  },
  {
    title: "Experience In",
    dataIndex: "expIn",
  },
  {
    title: "My Achivements",
    dataIndex: "achivements",
  },
  {
    title: "Selected Category",
    dataIndex: "selectedCategory",
  },
  {
    title: "Selected Sports",
    dataIndex: "selectedSports",
  },
  {
    title: "Action",
    dataIndex: "Edit/Delete",
  },
];

const CoachingSessionsList = () => {
  const data = JSON.parse(sessionStorage.getItem("data"));
  console.log(data);
  return (
    <div>
      <div className="mt-4">
        <h3 className="mb-5 title">List of Students Registered</h3>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default CoachingSessionsList;
