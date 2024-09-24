import React from 'react'
import headericon from '../Images/headericon.png'
import  atamniharbhar from '../Images/aatmaNirbhar.jpg'
import digitalIndia from '../Images/Digital_India_logo.jpg'
import fbinsta from '../Images/fbinstatwit.jpeg'
import contactimg from '../Images/contactimage.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

 

const Contactus = () => {
  
  const navigate = useNavigate();
  const handlegoback = () =>{
    navigate(-1);
  }
    
  const sent = () =>{
     alert("We Have Recieved Your Request We Will Revert You Back Within 24 Hours") 
  }




  
  return (
    <div>

      <div className='w-screen h-screen'>
        <div className='h-28 w-full flex justify-between items-center space-x-2 pr-10 pl-6 text-4xl font-bold '>
           
                <div><img className='w-32 h-32 pt-5  mt-5 border-solid border-4 border-black' src={headericon}></img></div>
               <div className=''><h2 className='pr-0 text-red-600 '>Easy Money Hub</h2></div>
            
                <div className='hover:cursor-pointer'onClick={handlegoback}>Home</div>
               <Link to="/Aboutus" ><div>AboutUs</div></Link>
                <Link to="/Contactus"><div>Contactus</div></Link>
                {/* About Easy Money Hub */}

                









        </div>
        
    
    <div className='  flex justify-center '>
    <button className='bg-orange-600 h-16 w-[500px]  text-4xl font-bold mt-10 border-4 border-black'>CONTACT US</button>
    </div>



    {/* form creation ...  */}
                <div className='  flex justify-center  h-[600px]'style={{backgroundImage:`url(${contactimg})`}}>
                  <form className=' w-[700px] h-[500px] bg-white/0  flex justify-center items-center flex-col space-y-20 border-8 border-black mt-10 '>
                   
                   
                   <div className='space-x-5  '>
                   <input className=' w-64 h-16 border-4 border-black text-black text-2xl pl-5 bg-white/0 ' placeholder='FIRST NAME'></input>
                   
                  <input className=' w-64 h-16  border-4 border-black text-black text-2xl pl-5 bg-white/0' placeholder='LAST NAME'></input>
                   </div>


                    <div className='space-x-5'>
                     <input className=' w-64 h-16 border-4 border-black text-black text-2xl pl-5'placeholder='EMAIL-ID'></input>
                    <input className=' w-64 h-16 border-4 border-black text-black text-2xl pl-5'placeholder='MOBILE NO'></input>
                   </div>



                    <div className='space-x-5'>
                     <input className=' w-64 h-16 border-4 border-black text-black text-2xl pl-5 'placeholder='MESSAGE'></input>
                    <input className=' w-64 h-16 border-4 border-black text-black text-2xl pl-5 'placeholder='SUBJECT'></input>
                   </div>
                  </form>
                </div>
                <div className='flex justify-center items-center '>
                <button className='text-3xl font-bold bg-orange-600 border-4 border-black h-14 w-60' onClick={sent}>SEND</button>

                </div>












     <div className='bg-orange-600 h-[550px] w-full flex justify-center mt-10 '>

                                {/* menu bar........ */}
            <div className='bg-white h-[500px] w-[400px] ml-0 mt-5'>
              <u><h1 className='text-3xl flex items-center justify-center mt-5 font-bold'>How to Apply</h1></u>
              <div className=' pt-8 flex justify-center text-2xl' >Documents Required</div>
             <div className=' pt-8 flex justify-center text-2xl'>Loan Emi Calculator</div>
             <div className=' pt-8 flex justify-center text-2xl'>Fees And Charges</div>
             <div className=' pt-8 flex justify-center text-2xl'>Why EasyMoneyHub</div>
             <div className=' pt-8 flex justify-center text-2xl'>FAQS</div>
             
            </div>


                                {/* IMPORTANT LINKS........ */}

            <div className='bg-white h-[500px] w-[400px] mt-5'>
             <u> <h1 className='text-3xl flex items-center justify-center mt-5 font-bold'>IMPORTANT LINKS</h1></u>
             <div className=' pt-8 flex justify-center text-2xl' >ContactUs</div>
             <div className=' pt-8 flex justify-center text-2xl'>Terms & Conditions</div>
             <div className=' pt-8 flex justify-center text-2xl'>Refund Policy</div>
             <div className='pt-8 flex justify-center text-2xl'>Privacy Policy</div>
             <div className=' pt-8 flex justify-center text-2xl'>Business Partners</div>
             
            
            </div>

                                   {/* reach us ..........  */}


            <div className='bg-white h-[500px] w-[400px] mt-5'>
             <u> <h1 className='text-3xl flex items-center justify-center mt-5 font-bold'>REACH US</h1></u>
             <p className='mt-10 text-2xl  ml-5'>KreditSathi, No.4, V.O.C, 2nd Cross Street, Kodambakkam, Chennai, Tamil Nadu - 600024</p>
             <p className='mt-10 text-2xl  ml-5'>Mail: helpdesk:- @Easymoneyhub.com</p>
             <img className='h-20 pt-5 pl-5' src={fbinsta}></img>
             <div className='flex items-center justify-center'>
             <img className=' w-56 pt-10 pl-10' src={atamniharbhar}></img> <img className=' w-40 pl-5 pt-5' src={digitalIndia }></img>
             </div>
             <div>
              
             </div>
             

            </div>
            </div>
            <div className=' h-28 w-full'>
            <footer className='font-bold text-3xl flex items-center justify-center pr-5 pt-10  mt-5' >Copyright © 2024 EasyMoneyHub. All rights reserved. </footer>
            </div>
            


















      
    </div>
    </div>
  )
}

export default Contactus
