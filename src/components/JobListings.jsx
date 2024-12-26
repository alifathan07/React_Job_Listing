import React from 'react';
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]); // State for storing job listings
  const [loading, setLoading] = useState(true); // State for handling loading state

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "api/jobs?_limit=4" : "api/jobs";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data); // Update state with fetched jobs
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setTimeout(() => {
          setLoading(false); // Set loading to false after 3 seconds
        }, 1000);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <center>
            <Loader loading={loading} />
          </center>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <JobListing 
                key={job.id} // Pass the correct key prop
                job={job} // Pass the job data to JobListing component
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
