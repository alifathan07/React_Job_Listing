import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarker } from 'react-icons/fa';

function JobListing({ job, key }) {
  const [showFull, setShowFull] = useState(false);
  let description = job.description;
  if (!showFull) {
    description = description.slice(0, 100) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="p-6" key={key}>
        <div className="mb-4">
          <div className="text-sm text-gray-500">{job.type}</div>
          <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
        </div>
        <div className="text-gray-700 text-sm leading-relaxed mb-5">
          {description}
          <br />
          <br />
          <Link
            to="#details"
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-400 rounded shadow transition-transform transform hover:scale-105"
            onClick={() => setShowFull((prev) => !prev)}
          >
            {showFull ? 'Less' : 'More'}
          </Link>
        </div>

        <h3 className="text-sm text-indigo-500 mb-3">{job.salary}</h3>
        <div className="border-t border-gray-100 my-5"></div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-sm text-orange-600 font-medium mb-4 lg:mb-0">
            <FaMapMarker className="inline text-lg mb-1 mr-2" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}

            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
