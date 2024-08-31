import React from 'react'
import SideNav from '../Components/SideNav'

const Dashboard = () => {
  return (

   <div>

  <SideNav/>
    <div className='ml-[21%] flex gap-6 pt-20'>

<div className='bg-purple-300 w-[300px] h-[200px] text-center border-b-8 border-green-500 ml-20'>
<h1 className='text-yellow-800 pt-20 font-bold'>Total complaints</h1>
    <p>10+</p>
</div>

<div className='bg-purple-300 w-[300px] h-[200px] text-center border-b-8 border-green-500'>
<h1 className='text-yellow-800 pt-20 font-bold'>Total complaints</h1>
<p>20+</p>
</div>

<div className='bg-purple-300 w-[300px] h-[200px] text-center border-b-8 border-green-500'>
<h1 className='text-yellow-800 pt-20 font-bold'>Total complaints</h1>
    <p>30+</p>
</div>

    </div>

    </div>
  )
}

export default Dashboard
