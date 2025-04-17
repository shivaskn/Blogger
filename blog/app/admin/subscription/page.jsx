'use client'

import SubscriptionsTable from '@/components/admin Components/SubscriptionsTable'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const [email,setEmail] = useState([]);

  
  const fetchEmails = async ()=> {
     const response = await axios.get('http://localhost:8000/api/email/all');
     setEmail(response.data.email);
  }

  const deleteEmail = async (id)=> {
    const response = await axios.delete(`http://localhost:8000/api/email/delete/${id}`)

    if(response.data.success){
      toast.success(response.data.message)
      fetchEmails(); 
    }else{
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
   fetchEmails();
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
       <h1>All Subscription</h1>
       <div className='relative max-w-[600px] h-[88vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
             <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-6  py-3 '>
                 Email Subscription
                </th>

                <th scope='col' className='hidden sm:block px-6  py-3 '>
                 Date
                </th>

                <th scope='col' className='px-6 py-3 '>
                 Action
                </th>
              </tr>
             </thead>
             <tbody>
              {
                email.map((item,index)=>{
                   return  <SubscriptionsTable key={index} email={item.email}  deleteEmail={() => deleteEmail(item._id)} id={item.id}  date={item.date}/>
                })
              }
             </tbody>
          </table>
       </div>
    </div>
  )
}

export default page