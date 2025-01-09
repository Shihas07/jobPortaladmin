import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import JobForm from "../components/modal";
import addData from "../services/addData";
import fetchData from "../services/fetchData";
import JobCard from "../components/card";
import Filter from "../components/filter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [modalOpen, setOpen] = useState(false);
  const [fetchDatas, setFetchDatas] = useState([]);
  const [success, setSuccess] = useState(false);

  const addDataFunc = async (formData) => {
    const response = await addData(formData);
    if (response.message === "Job added successfully") {
      toast.success("Job added successfully!");
      setSuccess(true);
      setOpen(false);
    }
     else{
      toast.error("Failed to add job. Please try again.")
     }
  };

  useEffect(() => {
    fetchDataFunc();
  }, [success]);

  const fetchDataFunc = async () => {
    const response = await fetchData();
    if (response.message === "Jobs fetched successfully") {
      setFetchDatas(response.jobs);
     
    }
  };

  const [filterData, setFilter] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
    salary: 0,
  });

  const filteredJobs = fetchDatas.filter((job) => {
    const matchesJobTitle = job.jobTitle
      .toLowerCase()
      .includes(filterData.jobTitle.toLowerCase());
    const matchesLocation = job.location
      .toLowerCase()
      .includes(filterData.location.toLowerCase());
    const matchesJobType = job.jobType
      .toLowerCase()
      .includes(filterData.jobType.toLowerCase());
    const matchesSalary =
      filterData.salary === 0 ||
      (job.salaryFrom <= filterData.salary * 100000 &&
        job.salaryTo >= filterData.salary * 100000);

    return matchesJobTitle && matchesLocation && matchesJobType && matchesSalary;
  });

  return (
    <div>
      <Navbar modalOpen={setOpen} />

      <Filter
        setFilter={setFilter}
        fetchDatas={fetchDatas}
        filterData={filterData}
      />

      {modalOpen && (
        <JobForm
          modalOpen={modalOpen}
          modalClose={setOpen}
          addDataFunc={addDataFunc} 
        />
      )}
          <ToastContainer />
      <div className="ml-20 mr-10 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <div className="w-full flex-col justify-center items-center text-center">
            <img
              src="https://img.freepik.com/premium-vector/loading-bar-icon-flat-style-progress-indicator-vector-illustration-isolated-background-download-button-sign-business-concept_157943-15776.jpg?ga=GA1.1.908544988.1725524150&semt=ais_hybrid"
              alt="No jobs found"
              className="mx-auto"
            />
            <p className="mt-4 text-gray-500">
              No jobs available matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
