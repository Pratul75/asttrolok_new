import { Header, Table } from "../../../components";
import ConsultationListBanner from "../../../assets/consultationListBanner.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
const UserConsultationList = () => {
  const [userConsultationList, setUserConsultationList] = useState([]);

  const fetchConsultationList = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/users/allConsultationsOfUser",
      {
        headers: {
          "Content-Type": "application/json",
          role: JSON.parse(localStorage.getItem("user"))?.role,
          Authorization: JSON.parse(localStorage.getItem("token"))?.token,
        },
      }
    );
    setUserConsultationList(response?.data?.data);
    console.log("USER CONSULTATION LIST: ", response?.data?.data);
  };

  useEffect(() => {
    fetchConsultationList();
  }, []);

  const handleAction = (row) => {
    // Handle the action for the clicked row
    console.log("Clicked row:", row);
  };
  const checkDateAndReturnButton = (dateString) => {
    const currentDate = new Date(); // Get today's date
    const [day, month, year] = dateString.split("/").map(Number); // Extract day, month, and year from the date string

    const givenDate = new Date(year, month - 1, day); // Create a Date object from the extracted date components

    if (givenDate < currentDate) {
      return (
        <button className="btn btn-success btn-sm btn-outline">
          Completed
        </button>
      );
    } else if (givenDate > currentDate) {
      return (
        <button className="btn btn-secondary btn-outline btn-sm">
          Upcoming
        </button>
      );
    } else {
      return <button className="btn btn-warning btn-sm">Today's Date</button>;
    }
  };

  const consultationColumns = [
    {
      Header: "Astrologer",
      accessor: "_id",
    },
    {
      Header: "User",
      accessor: "userId",
    },
    {
      Header: "Booking Type",
      accessor: "bookingtype",
      Cell: ({ row }) => {
        switch (row?.original?.bookingtype) {
          case "chat":
            return (
              <button className="btn btn-outline btn-sm btn-warning">
                chat
              </button>
            );
          case "call":
            return (
              <button className="btn btn-outline btn-sm btn-info">call</button>
            );
          case "video":
            return (
              <button className="btn btn-outline btn-sm btn-primary">
                video
              </button>
            );
        }
      },
    },
    {
      Header: "Booking Date",
      accessor: "bookingdate",
    },
    {
      Header: "Booking Time",
      accessor: "bookingtime",
    },
    {
      Header: "Status",
      Cell: ({ row }) => {
        return checkDateAndReturnButton(row?.original?.bookingdate);
      },
    },
    {
      Header: "Action", // New column for action button
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            className="btn btn-primary btn-circle text-white"
            onClick={() => handleAction(row.original)}
          >
            <FiEdit2 />
          </button>
          <button
            className="btn btn-error btn-circle text-white"
            onClick={() => handleAction(row.original)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <Header
        bannerImage={ConsultationListBanner}
        primaryText="Consultation List"
        secondaryText="List of Consultations"
      />

      {/* Secondary header */}
      <div className="p-4 flex w-full shadow-md justify-between gap-4 items-center mt-16">
        {/* Input fields */}
        <div className="flex gap-8 justify-between items-center w-1/2">
          <input
            placeholder="Search Consultations..."
            className="input input-bordered w-full"
          />
          <input className="input input-bordered w-full" />
        </div>

        {/* Date input and action buttons */}
        <div className="flex justify-between w-1/2">
          <div>
            <input className="input input-bordered" type="date" name="" id="" />
          </div>
          <div className="flex gap-4">
            <button className="btn btn-success text-white">Join Live</button>
            <button className="btn btn-info text-white">
              Add Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div>
        <Table columns={consultationColumns} data={userConsultationList} />
      </div>
    </div>
  );
};

export default UserConsultationList;
