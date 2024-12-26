import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
const AddJobPage = ({ AddJob }) => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
      id : '',
      title: "",
      type: "Full-Time",
      description: "",
      location: "",
      salary: "Under $50K",
      company: {
        name: "",
        description: "",
        contactEmail: "",
        contactPhone: ""
      }

    });
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        if (name.startsWith('company.')) {
          const newname = name.split('.')[1]
          setFormState((prevState) => ({
            ...prevState,
            company : {
              ...prevState.company,
              [newname]: value,
            }
        }));
               
        }else{
          setFormState((preValue)=> ({
            ...preValue, 
            [name] : value
          }))
        }
        
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
          ...formState,
          id: uuidv4(), // Generate a unique ID
      };
      AddJob(newJob); // Send the job with the unique ID
      toast.success('Added With Success!');

        return navigate('/jobs')
        
    };

    return (
        <section className="bg-indigo-50">
            <div className="container mx-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Job Type</label>
                            <select 
                                className="border rounded w-full py-2 px-3"  
                                onChange={handleChange}
                                name='type'
                                value={formState.type}
                                required>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                            <input
                                type="text"
                                name='title'
                                value={formState.title}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Description</label>
                            <textarea
                                name='description'
                                value={formState.description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Salary</label>
                            <select 
                                className="border rounded w-full py-2 px-3" 
                                name='salary'
                                value={formState.salary}
                                onChange={handleChange}
                                required>
                                <option value='Under $50K'>Under $50K</option>
                                <option value='$50K - 60K'>$50K - $60K</option>
                                <option value='$60K - 70K'>$60K - $70K</option>
                                <option value='$70K - 80K'>$70K - $80K</option>
                                <option value='$80K - 90K'>$80K - $90K</option>
                                <option value='$90K - 100K'>$90K - $100K</option>
                                <option value='$100K - 125K'>$100K - $125K</option>
                                <option value='$125K - 150K'>$125K - $150K</option>
                                <option value='$150K - 175K'>$150K - $175K</option>
                                <option value='$175K - 200K'>$175K - $200K</option>
                                <option value='Over $200K'>Over $200K</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Location</label>
                            <input
                                type="text"
                                name='location'
                                value={formState.location}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Company Name</label>
                            <input
                                type="text"
                                name='company.name'
                                value={formState.company.name}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Company Description</label>
                            <textarea
                                name='company.description'
                                value={formState.company.description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Contact Email</label>
                            <input
                                type="email"
                                name='company.contactEmail'
                                value={formState.company.contactEmail}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Contact Phone</label>
                            <input
                                type="tel"
                                name='company.contactPhone'
                                value={formState.company.contactPhone}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddJobPage;
