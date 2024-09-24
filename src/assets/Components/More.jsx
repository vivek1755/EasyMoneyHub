import React from 'react'
import headericon from '../Images/headericon.png'
import creditcardpic from '../Images/creditcardpic.png'
import emicalculator from '../Images/emicalculator.png'

const More = () => {
  return (
    <div>


     <div className='w-screen h-screen'>
        <div className='h-28 w-full flex justify-between items-center space-x-2 pr-10 pl-6 text-4xl font-bold '>
           
                <div><img className='w-32 h-32 pt-5  mt-5 border-solid border-4 border-black' src={headericon}></img></div>
               <div className=''><h2 className='pr-0 text-red-600 '>Easy Money Hub</h2></div>
            
                <div>Home</div>
                <div>AboutUs</div>
                <div>ContactUs</div>
                <div>More</div>

                










    </div>
    <div className='flex flex-row justify-center h-[600px] w-full bg-red-400 mt-10 space-x-5'>
    <div className='bg-gray-500 w-1/3 h-[400px] flex-col'>
       <div> <img src={creditcardpic}></img></div>
       <div><p>CREDIT CARDS</p></div>
    </div>


    
    <div className='bg-gray-500 w-1/3 h-[500px] flex items-center justify-center '>
         <div> <img  src={emicalculator}></img></div>
    </div>
    <div className='bg-gray-500 w-1/3 h-[400px]'></div>


                </div>


    </div>
    
    </div>
  )
}

export default More
