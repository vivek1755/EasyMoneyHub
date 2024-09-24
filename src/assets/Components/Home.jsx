import React from 'react'
import headericon from '../Images/headericon.png'
import bodyimage from '../Images/bodyimage.jpg'
import aboutimage from '../Images/aboutimage.jpg'
import personalloan from '../Images/personal-loan.jpg'
import businessloan from '../Images/business-loan.jpg'
import homeloan from '../Images/home-loan.jpg'
import freecreditscore from '../Images/free-credit-score.jpg'
import goldloan from '../Images/gold-loan.jpg'
import creditcard from '../Images/credit-card.jpg'
import trackapplication from '../Images/track-application.jpg'
import hdfcicon from '../Images/hdfc-icon.png'
import loan1 from '../Images/loan1.jpg'
import filldetails from '../Images/filldetails.jpg'
import within1hour from '../Images/within1hour.jpg'
import approved from '../Images/approved.jpg'
import minimumdocs from '../Images/minimumdocs.jpg'
import fasterapproval from '../Images/fasterapproval.jpg'
import onlineprocess from '../Images/onlineprocess.jpg'
import loanuptp from '../Images/loanuptp.jpg'
import run from '../Images/run.jpg'
import  atamniharbhar from '../Images/aatmaNirbhar.jpg'
import digitalIndia from '../Images/Digital_India_logo.jpg'
import fbinsta from '../Images/fbinstatwit.jpeg'
import {Link} from 'react-router-dom'





const Home = () => {
    
   const sent = () =>{
     alert("We Have Recieved Your Request We Will Revert You Back Within 24 Hours") 
  }




  return (
    <div >


{/* start the project */}



      <div className='w-screen h-screen'>
        <div className='h-28 w-full flex justify-between items-center space-x-2 pr-10 pl-6 text-4xl font-bold '>
           
                <div><img className='w-32 h-32 pt-5  mt-5 border-solid border-4 border-black' src={headericon}></img></div>
               <div className=''><h2 className='pr-0 text-red-600 '>Easy Money Hub</h2></div>
            
                <div className='hover:cursor-pointer'>Home</div>
               <Link to="/Aboutus" ><div>AboutUs</div></Link>
                <Link to="/Contactus"><div>Contactus</div></Link>
                {/* <div>More</div> */}
                {/* About Easy Money Hub */}


        </div>
        <div className='logindiv mt-10'>
        <div className='w-full h-[600px] relative bg-center bg-cover flex justify-center items-center'style={{backgroundImage:`url(${bodyimage})`}}>
        <div className='bigdiv w-11/12 h-4/5 flex space-x-8'>
        <div className='w-1/2 h-full '><h1 className='text-7xl font-bold text-white'>ACHIEVE</h1>
        <p className='font-bold text-white text-4xl pt-5'>everything you aspire for a happy life with EasyMoneyHub...</p>
        

        </div>
        <div className='flex items-center justify-center'>
          <form className=' w-[600px] h-[450px] items-center flex space-y-10 flex-col'>
          <p className='text-4xl font-bold'>Swift Loan Approval</p>
            <input className='h-16 w-96 mt-20 text-2xl font-bold border-solid border-4 border-black pl-5'placeholder='FULL NAME'></input>
            <input className='h-16 w-96 text-2xl font-bold border-solid border-4 border-black pl-5'placeholder='MOBILE NO'></input>
            <p className='flex justify-center items-center text-2xl ml-5 font-bold'>By clicking "Apply Now" you agree to the Privacy Policy , Terms of Use & Terms & Conditions of EasyMoneyHub</p>
            <button className='flex items-center bg-white border-solid border-4 border-black font-bold h-14 w-64 text-3xl pl-10 ' onClick={sent}>APPLY NOW</button>
          </form>
        </div>
      
          
        </div>
        
        
          
          </div>
          
        </div>
        <div className='infodiv'>


               {/* About Easy Money Hub  with paragraph */}


       <u><h1 className='flex justify-center font-bold text-4xl pt-5 mt-20 text-red-600'>About Easy Money Hub</h1></u>
       <div className='w-full flex flex-row'>
       <div> 
       <img src={aboutimage}></img>
       </div>
       <div className='w-1/2 pl-10 pt-5 text-2xl'>
        <h1>Easy Money Hub and its professional team has decades of experience in providing suitable loans that fits your needs and financial requirements. We understand your needs and our committed team always try their level to provide with the best possible solution for your query.</h1>
        <br></br>

           <h1>Getting Loan with Easy Money Hub is very simple. Just fill the form by selecting the loan you are looking for, fill in the details and we will get back to you within 1 hour. Once approved, the amount will be transferred to your account within a fortnight. T&C*</h1>
           <br></br>

          <h1>We provide all types of loan. From Home loans to Student loan, providing the same to you is what we excel at. Get in touch with Easy Money Hub team today!</h1>
          </div>
          </div>
          </div>


                  {/* servicesdiv */}

          <div className='  flex justify-center font-bold text-4xl pt-5 mt-20 text-red-600'>
           <u><h1>Trending Services</h1></u>
          </div>



             {/* section of services (parent div ) */}


          <div className='w-full bg-orange-600 h-[600px] mt-5 grid grid-cols-4 grid-rows-2 gap-10 px-48 py-10 '> 

              {/* personalloan image  */}
          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
          <img className='w-44 h-44'  src={personalloan}></img>
          </div>
          <div className='text-center font-bold text-2xl'>PERSONAL LOAN</div>
          </div>

                {/* businessloan image  */}

          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
          <img className='w-44 h-44'  src={businessloan}></img>
          </div>
           <div className='text-center font-bold text-2xl'>BUSINESS LOAN</div>
          </div>

                {/* homeloan image  */}

          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
            <img className='w-44 h-44'  src={homeloan}></img>
            </div>
             <div className='text-center font-bold text-2xl'>HOME LOAN</div>
          </div>

                {/* freecreditscore image  */}
          
          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
          <img className='w-44 h-44'  src={freecreditscore}></img>
          </div>
           <div className='text-center font-bold text-2xl'> FREE CREDIT SCORE</div>
          </div>

                 {/* goldloan image  */}

          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
            <img className='w-44 h-44'  src={goldloan}></img>
            </div>
             <div className='text-center font-bold text-2xl'>GOLD LOAN</div>
          </div>

                 {/* creditcard image  */}

          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
          <img className='w-44 h-44'  src={creditcard}></img>
          </div>
           <div className='text-center font-bold text-2xl'>CREDIT CARD</div>
          </div> 

                  {/* trackapplication image  */}

          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
            <img className='w-44 h-44'  src={trackapplication}></img>
            </div>
             <div className='text-center font-bold text-2xl'>TRACK APPLICATION</div>
          </div>



              {/* hdfcicon image  */}



          <div className='bg-white h-60 w-60 flex justify-center items-center flex-col'>
          <div>
            <img className='w-44 h-44'  src={hdfcicon}></img>
            </div>
            
            <div className='text-center font-bold text-2xl'>SAVINGS ACCOUNT</div>
          </div>
          </div>


                   {/* new section hot to apply for a loan  */}


          <div className='bg-white mt-10'>
          <u><h1 className='text-4xl font-bold flex justify-center text-red-600'>How To Apply For Loan</h1></u>
          </div>
          
                      {/* picture section of how to apply loan  */}
          <div className='h-[250px] w-full bg-white space-x-20 mt-5 flex justify-center items-center '>
            <div className='bg-white h-60 w-60'>
              <img className='h-40' src={loan1}></img>
              <h1 className='text-2xl font-bold flex justify-center items-center pr-20'>Step : 1</h1>
              <h3 className='text-2xl font-bold flex justify-center pr-10'>Select Loan Type</h3>
            </div>
            <div className='bg-white h-60 w-60'>
              <img className='h-40' src={filldetails}></img>
               <h1 className='text-2xl font-bold flex justify-center pr-24'>Step : 2</h1>
               <h3 className='text-2xl font-bold flex justify-center pr-14'>Fill Basic Details</h3>
            </div>
              <div className='bg-white h-60 w-60'>
                <img className='h-40' src={within1hour}></img>
                 <h1 className='text-2xl font-bold flex justify-center pr-24'>Step : 3</h1>
                 <h3 className='text-2xl font-bold flex justify-center pr-12'> Loan Processing</h3>
              </div>
                <div className='bg-white h-60 w-60 '>
                  <img className='h-40' src={ approved}></img>
                        <h1 className='text-2xl font-bold flex justify-center pr-20'>Step : 4</h1>
                        <h3 className='text-2xl font-bold flex justify-center pr-12'>Loan Approval</h3>

                </div>
                </div>

                       {/* new section for features of easy money hub  */}

                 <div className='bg-white mt-10'>
          <u><h1 className='text-4xl font-bold flex justify-center text-red-600'>Features of Easy Money Hub</h1></u>
          </div>
          
                     {/* picture section of features of easy money app  */}
           <div className='h-[350px] w-full bg-orange-600 space-x-20 mt-5 pt-10 flex justify-center '>
           <div className='bg-white h-60 w-60 flex justify-center items-center flex-col border-solid border-4 border-black'>
            <img className='h-28 w-28' src={minimumdocs}></img>
             <h1 className='text-1xl font-bold pt-5'>Minimum Documentation</h1>
           </div>
           <div className='bg-white h-60 w-60  flex justify-center items-center flex-col border-solid border-4 border-black'>
            <img className='h-28 w-28 ' src={fasterapproval}></img>
             <h1 className='text-1xl font-bold pt-5'>Faster Approval</h1>
           </div>
           <div className='bg-white h-60 w-60  flex justify-center items-center flex-col border-solid border-4 border-black'>
            <img className='h-28 w-28' src={onlineprocess}></img>
             <h1 className='text-1xl font-bold pt-5'>100% Online Process</h1>
           </div>
           <div className='bg-white h-60 w-60  flex justify-center items-center flex-col border-solid border-4 border-black'>
            <img className='h-28 w-28' src={loanuptp}></img>
            <h1 className='text-1xl font-bold pt-5'>Loan up to Rs 40.0 Lacs</h1>
           </div>
           </div>
           <div className='h-[600px] w-full bg-white mt-10 flex items-center'>
           <div className='bg-white h-[300px] w-1/2 flex justify-center font-bold text-6xl ml-20 mt-0 flex-col '>You're just a click away from achieving your dreams!<br></br><div><button className='border-solid border-4 border-black bg-orange-500 mt-10 text-5xl'  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>APPLY NOW</button></div></div>
            <img className='h-[500px] pl-0' src={run}></img>
           </div>

                    {/* last taskbar menu important links reach us */}

            <div className='bg-orange-600 h-[550px] w-full flex justify-center '>

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
            <div className='font-bold  text-sm pl-28 pr-28 pt-5 '>
             <u><p>*Starting interest rate varies on factors like credit history, obligation, or lender. Subject to the necessary KYC and Income Verification. T&C apply.
                 Annual Percentage Rate offered to the customer during the period of 02nd Oct 2022 To 31st Mar 2023.
                 Min APR - 8%. Max APR - 11%. Repayment schedule: Min - 12 months & Max - 240 Months.^T&C apply
                Example: On a personal loan of Rs. 1 lakh at rate of 8% per annum, for a tenure of 24 months, the EMI amount will be Rs.4,523 </p></u> 
            </div> 
            <div className=' h-28 w-full'>
            <footer className='font-bold text-3xl flex items-center justify-center pr-5 pt-10  mt-5' >Copyright © 2024 EasyMoneyHub. All rights reserved. </footer>
            </div>
            

           



           </div>
           
          





    </div>
  )
}

export default Home
