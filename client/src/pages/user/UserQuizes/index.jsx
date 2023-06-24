import { useMemo, useState } from "react";
import QuizBanner from "../../../assets/QuizesBanner.png";
import { Header, Table } from "../../../components";

const UserQuizes = () => {
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleInstructorChange = (event) => {
    setSelectedInstructor(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // dummy data
  const data = useMemo(
    () => [
      {
        instructor: "John Doe",
        quiz: "Quiz 1",
        grade: "A",
        status: "Completed",
        date: "2023-06-22",
        action: "View",
      },
      {
        instructor: "Jane Smith",
        quiz: "Quiz 2",
        grade: "B",
        status: "In Progress",
        date: "2023-06-23",
        action: "View",
      },
      // Add more rows here as needed
    ],
    []
  );
  const columns = useMemo(
    () => [
      { Header: "Instructor", accessor: "instructor" },
      { Header: "Quiz", accessor: "quiz" },
      { Header: "Quiz Grade", accessor: "grade" },
      { Header: "Status", accessor: "status" },
      { Header: "Date", accessor: "date" },
      { Header: "Action", accessor: "action" },
    ],
    []
  );
  return (
    <div className="flex flex-col gap-4">
      <Header
        bannerImage={QuizBanner}
        primaryText="My Quizzes"
        secondaryText="List of Quizzes"
      />
      <div className="flex items-center justify-center w-full ">
        <div className="w-full shadow-md p-8 flex gap-2">
          {/* date range div */}
          <div className="flex w-1/3 justify-between gap-2 items-center">
            <input type="date" className="input input-bordered w-full" />
            <span>To</span>
            <input type="date" className="input input-bordered w-full" />
          </div>
          {/* search input div */}
          <div className="flex w-1/3 justify-between gap-2 items-center">
            <input
              className="input input-bordered w-full "
              placeholder="search quizzes and courses"
            />
          </div>
          {/* instructor, status dropdown div */}
          <div className="flex w-1/3">
            <div className="dropdown dropdown-hover dropdown-bottom flex  gap-2">
              <label tabIndex={0} className="btn m-1 flex items-center">
                Instructor
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <select
                value={selectedInstructor}
                onChange={handleInstructorChange}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <option value="">Select an instructor</option>
                <option value="instructor1">Instructor 1</option>
                <option value="instructor2">Instructor 2</option>
              </select>
            </div>
            <div className="dropdown dropdown-hover  flex  gap-2 dropdown-bottom">
              <label tabIndex={0} className="btn m-1 flex items-center">
                Status
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <select
                value={selectedStatus}
                onChange={handleStatusChange}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <option value="">Select a status</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default UserQuizes;
