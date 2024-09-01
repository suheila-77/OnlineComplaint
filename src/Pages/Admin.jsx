import axios from 'axios';
import { useEffect, useState } from 'react';
import SideNav from '../Components/SideNav';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [complaints, setComplaints] = useState([]);

  const getAllComplaints =() => {
   
     axios.get('http://localhost:5000/complaint/management').then((response)=>{
      setComplaints(response.data)
     }).catch((error)=>{
      console.log(error)
     })

    }

  useEffect(() => {
    getAllComplaints();
  }, []);

  return (


    <div>

<SideNav/>

    <div className="ml-[21%] pt-10 p-4">
      <h2 className="text-2xl font-semibold mb-6">Complaints Management</h2>
      {complaints.length > 0 ? (
        <table className="w-full text-left border-collapse">

            <tr>
              <th className="text-teal-600  p-3 border">S.N</th> 
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Date & Time</th>
              <th className="p-3 border">Details</th>

            </tr>

            {complaints.map((data,index) => (
              <tr>
                <td className="p-3 border">{index+1}</td>
                <td className="p-3 border">{data.Title}</td>
                <td className="p-3 border">{data.Description.substring(0, 10)}...</td>
                <td className="p-3 border">{new Date().toString()}</td>


                <td className="p-2 border"> 
<Link to='/view'>
                    <button  className='bg-teal-500 rounded p-2 w-[70px] '>view
                      </button> 
                      </Link>
                        </td>
              </tr>
            ))}
          {/* </tbody> */}
        </table>
      ) : (
        <p className="text-red-500">There are no complaints to display.</p>
      )}
    </div>
    </div>
  );

}
export default Admin;
