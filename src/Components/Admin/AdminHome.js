import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Sport Selected",
    dataIndex: "sportsSelected",
  },
  {
    title: "Action",
    dataIndex: "Edit/Delete",
  },
];
// const data1 = [];
// for (let i = 0; i < 46; i++) {
//   data1.push({
//     key: i,
//     name: `Edward King ${i}`,
//     product: 32,
//     staus: `London, Park Lane no. ${i}`,
//   });
// }

const data1 = [];
  data1.push({
    key: 1,
    name: `Rahul Dravid`,
    email: "rahul@gmail.com",
    role: `user`,
    sportsSelected:"Badminton",
  },
  {
    key: 2,
    name: `Ms Dhoni`,
    email: "Dhoni@gmail.com",
    role: `Infra-provider`,
    sportsSelected:"Table tennis",
  },
  {
    key: 3,
    name: `Ronaldo`,
    email: "ronaldo@gmail.com",
    role: `Service-provider`,
    sportsSelected:"Football",
  },
  {
    key: 4,
    name: `Saurabh Ganguly`,
    email: "souabh@gmail.com",
    role: `User`,
    sportsSelected:"Pool",
  },
  {
    key: 5,
    name: `Pathan`,
    email: "pathan@gmail.com",
    role: `Infra-provider`,
    sportsSelected:"Cricket",
  });

const AdminHome = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Students Registered</p>
            <h4 className="mb-0 sub-title"> 1100</h4>
          </div>
          {/* <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div> */}
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Coaches Registered</p>
            <h4 className="mb-0 sub-title">500</h4>
          </div>
          {/* <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div> */}
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Infra-providers Registered</p>
            <h4 className="mb-0 sub-title">100</h4>
          </div>
          {/* <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div> */}
        </div>
      </div>
      {/* <div className="mt-4">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div> */}
      <div className="mt-4">
        <h3 className="mb-5 title">No Of Registrations</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
