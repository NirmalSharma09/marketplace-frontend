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
    title: "Sports Selected",
    dataIndex: "staus",
  },
];
// const data1 = [];
// for (let i = 0; i < 46; i++) {
//   data1.push({
//     key: i,
//     name: `Nirmal Sharma ${i}`,
//     email: "sharma12345@mail.com",
//     staus: "BasketBall",
//   });
// }
const data1 = [];
  data1.push({
    key: 1,
    name: `Nirmal Sharma`,
    email: "sharma12345@mail.com",
    staus: "BasketBall",
  },
  {
    key: 2,
    name: `Invezza`,
    email: "Invezza@mail.com",
    staus: "FootBall",
  },
  {
    key: 3,
    name: ` Sharma`,
    email: "sharma12345@mail.com",
    staus: "BasketBall",
  }
  );
const ServiceProviderHome = () => {
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
            <p className="desc">Total Students Enrolled</p>
            <h5 className="mb-0 sub-title">100</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
            <p className="desc">Total Vaccancy</p>
            <h5 className="mb-0 sub-title">50</h5>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Experience</p>
            <h5 className="mb-0 sub-title">10 years</h5>
          </div>
          <div className="d-flex flex-column align-items-end">
          <p className="desc">Experienced In</p>
            <h5 className="mb-0 sub-title">FootBall, BasketBall</h5>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Achivements</p>
            <h5 className="mb-0 sub-title">
              National Gold Medalist in FootBall
            </h5>
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
        <h3 className="mb-5 title">List of Students Registered</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderHome;
