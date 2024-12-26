import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import { FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';
const JobPage = ({deletejob}) => {
  const [job, setJob] = useState(null);
  const [showFull, setShowFull] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/jobs/${id}`);
        setJob(res.data); // set the fetched job data
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchJob();
  }, [id]); // Add id to dependency array

  if (!job) {
    return <Loader loading={true} />; // Show loader while data is being fetched
  }

  const onDeleteClick = (jobId) => {
    // Add delete functionality here
    const confirm = window.confirm('Are You Sure You Want to Delete This Job Post ?');
    if(!confirm) return;
 
      deletejob(jobId)
      toast.success('Deleted With Success!');

      navigate('/jobs')


  };

  return (
    <>
 <section>
  <div className="container m-auto py-6 px-6">
    <Link
      to="/jobs"
      className="text-indigo-500 hover:text-indigo-600 flex items-center"
    >
      <span className="mr-2" /> Back to Job Listings
    </Link>
  </div>
</section>

<section className="bg-indigo-50">
  <div className="container m-auto py-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Main Content */}
      <main>
        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
          <div className="text-gray-500 mb-4">{job.type}</div>
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
            <FaMapMarker className="text-orange-700 mr-1" />
            <p className="text-orange-700">{job.location}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-indigo-800 text-lg font-bold mb-6">
            Job Description
          </h3>
          <p className="mb-4">{job.description}</p>
          <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
          <p className="mb-4">{job.salary} / Year</p>
        </div>
      </main>

      {/* Sidebar */}
      <aside className="self-start">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6">Company Info</h3>
          <h2 className="text-2xl">{job.company.name}</h2>
          <p className="my-2">{job.company.description}</p>
          <hr className="my-4" />
          <h3 className="text-xl">Contact Email:</h3>
          <p className="my-2 bg-indigo-100 p-2 font-bold">
            {job.company.contactEmail}
          </p>
          <h3 className="text-xl">Contact Phone:</h3>
          <p className="my-2 bg-indigo-100 p-2 font-bold">
            {job.company.contactPhone}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold mb-6">Manage Job</h3>
          <Link
            to={`/edit-job/${job.id}`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
          >
            Edit Job
          </Link>
          <button
            onClick={() => onDeleteClick(job.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
          >
            Delete Job
          </button>
        </div>
      </aside>
    </div>
  </div>
</section>


      
    </>
  );
};

export default JobPage;
