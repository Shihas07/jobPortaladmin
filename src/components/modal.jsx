import React from "react";
import { useForm } from "react-hook-form";

const JobForm = ({ modalOpen, modalClose, addDataFunc }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    modalClose(false);
    reset(); 
  };

  const onSubmit = async (data) => {
    await addDataFunc(data); 
    closeModal();
  };

  return (
    <div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Create Job Opening</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Full Stack Developer"
                    {...register("jobTitle", {
                      required: "Job Title is required",
                    })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Amazon"
                    {...register("companyName", {
                      required: "Company Name is required",
                    })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">
                    Location
                  </label>
                  <select
                    {...register("location", {
                      required: "Location is required",
                    })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                  >
                    <option value="">Select Location</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                  {errors.location && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">
                    Job Type
                  </label>
                  <select
                    {...register("jobType", {
                      required: "Job Type is required",
                    })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                  {errors.jobType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.jobType.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">
                    Salary Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="From"
                      {...register("salaryFrom", {
                        required: "Salary From is required",
                      })}
                      className="w-1/2 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder="To"
                      {...register("salaryTo", {
                        required: "Salary To is required",
                      })}
                      className="w-1/2 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                    />
                  </div>
                  {(errors.salaryFrom || errors.salaryTo) && (
                    <p className="text-red-500 text-xs mt-1">
                      Salary range is required
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    {...register("applicationDeadLine", {
                      required: "Application Deadline is required",
                    })}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
                  />
                  {errors.applicationDeadLine && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.applicationDeadLine.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Job Description
                </label>
                <textarea
  placeholder="Briefly describe the job role"
  {...register("jobDescription", {
    required: "Job Description is required",
    minLength: {
      value: 100,
      message: "Job description must be at least 100 characters long",
    },
  })}
  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none resize-none h-20"
/>
                {errors.jobDescription && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobForm;
