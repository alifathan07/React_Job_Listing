
import {
Route , 
createBrowserRouter,
createRoutesFromElements, 
RouterProvider,
Router} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import { HiH1 } from 'react-icons/hi2'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddjobePage from './pages/AddJobePage'
import axios from 'axios'
import EditjobPage from './pages/EditjobPage'

const App = () => {
  // Add Job 
  const Addit = async(newJob) => {
      await axios.post('http://localhost:8000/jobs', newJob, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('Response:', response.data);
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        
        // const getjobs = async() => {
        //   const res = await axios.get('http://localhost:8000/jobs')
        //   console.log(res);
          
        // }
        // getjobs();
        
    
  }
  // Delete Job
  const deletejob = (id) => {
    // console.log("Delete " + id);
    try {
      const res = async() => {
        return  await axios.delete(`http://localhost:8000/jobs/${id}`)
      };
      res();
    } catch (error) {
      console.error(error.message);
    }
  };
    
 
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayouts />}>
      <Route index element={ <HomePage /> } />
      <Route path='/jobs' element={ <JobsPage /> } />
      <Route path='/jobs/:id'  element={ <JobPage deletejob={deletejob} /> } />
      <Route path='/add-job'  element={ <AddjobePage AddJob={Addit} /> } />
      <Route path='/edit-job/:id'  element={ <EditjobPage/> } />

      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
    )
  
  )
  return (
    <RouterProvider router={router} />
    // <>
    //   <Navbar />
    //   <Hero title='Become a React Dev' subtitle='Find the React job that fits your skill set' />
    //   <HomeCards />
    //   <JobListings />
    //  <ViewAllJobs />
    // </>
  )
}
export default App
