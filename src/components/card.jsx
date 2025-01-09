const JobCard = ({ job }) => {
  const timeDifference = (updatedAt) => {
    const now = new Date();
    const updatedTime = new Date(updatedAt);
    const diffInMs = now - updatedTime;

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `Just now`;
  };
  const jobDescriptionPoints = job.jobDescription
    ? job.jobDescription
        .split(".")
        .map((point) => point.trim())
        .filter(Boolean)
    : ["No description available"];

  return (
    <div className="max-w-sm w-auto h-auto  bg-white p-4 shadow-lg rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <div className="w-auto h-12 rounded-xl overflow-hidden">
          {/* <img
            src={job.companyLogo || "/default-logo.png"}
            alt={job.companyName}
            className="w-full h-full object-cover"
          /> */}
          <h1 className="text-lg font-semibold">{job.companyName}</h1>
        </div>
        <span className="text-sm text-[#3B82F6] bg-[#b3ccee] px-3 py-1 rounded-full">
          {timeDifference(job.updatedAt) || "Recently"}
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-4">{job.jobTitle}</h2>

      <div className="flex gap-2 mb-4 text-gray-600">
        <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm">
            {job.applicationDeadLine
              ? new Date(job.applicationDeadLine).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })
              : "N/A"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="text-sm whitespace-nowrap">
            {job.jobType || "Unknown"}
          </span>
        </div>
        <div className="flex items-center  gap-1">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {/* <span className="text-sm">{job.salaryFrom || "Not specified"}</span> -  */}
          <span className="text-sm ">
            {job.salaryTo
              ? `${Math.round(job.salaryTo / 100000)}`
              : "Not specified"}
          </span>
          <span className="text-sm">LPA</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
          {jobDescriptionPoints.slice(0, 2).map((point, index) => (
            <div key={index} className="flex items-start gap-2 text-gray-600">
              <span className="mt-1.5">•</span>
              <p className="text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      <button className="w-full bg-[#0095FF] text-white py-3  rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
