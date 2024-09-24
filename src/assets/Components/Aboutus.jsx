import React from 'react'
import headericon from '../Images/headericon.png'
import  atamniharbhar from '../Images/aatmaNirbhar.jpg'
import digitalIndia from '../Images/Digital_India_logo.jpg'
import fbinsta from '../Images/fbinstatwit.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Aboutus = () => {
  const navigate = useNavigate ();
  const handlegoback = ()=> {
    navigate(-1)

  }
  return (
    <div>

      <div className='w-screen h-screen'>
        <div className='h-28 w-full flex justify-between items-center space-x-2 pr-10 pl-6 text-4xl font-bold '>
           
                <div><img className='w-32 h-32 pt-5  mt-5 border-solid border-4 border-black' src={headericon}></img></div>
               <div className=''><h2 className='pr-0 text-red-600 '>Easy Money Hub</h2></div>
            
                {/* <div>Home</div> */}

                <div className='hover:cursor-pointer' onClick={handlegoback} >Home</div>
               <Link to="/Aboutus" ><div>AboutUs</div></Link>
                <Link to="/Contactus"><div>Contactus</div></Link>
                {/* <div>AboutUs</div>
                <div>ContactUs</div>
                <div>More</div> */}


                {/* About Easy Money Hub */}


        </div>
    

    <div className='  flex justify-center '>
    <button className='bg-orange-600 h-16 w-[500px] mt-10 text-4xl font-bold'>ABOUT US</button>
    </div>
    <div className='    mt-10  h-[1900px] w-full text-2xl pl-20 pr-20'>
    <p>"www.EasyMoneyHub.com" is a website which is managed and operated by EasyMoneyHub. To know more about EasyMoneyHub Visit Terms of use. EasyMoneyHub has been serving in the financial sector for the last 1 years being one of the best loan providers in India. We believe in building long-term relationships with our clients and maintain transparency which is our core business value. Our values and policies have helped us creating millions of success stories. This entitles us as one of the largest financial distributors across the territory of India. We have successfully delivered a wide range of loans to make people self-dependent in a true sense. Our company operates in all over India.</p><br></br>
    <p>The definition of the banking sector has changed in the recent time. Now applying for loans is no more a lengthy process which was earlier usually filled with stress and tension. This new way gave us an opportunity to provide better and efficient financial service to millions.</p><br></br>
    <p>A loan can help people to make their dreams a reality as it can finance any of their financial requirement such as higher education, home renovation, vacation, or a medical emergency. The best part is that it’s an unsecured loan and get approved within 24 hours of the application.</p><br></br>
    <p>We understand how difficult it is to frequently visit banks or financial institutions to get your loans approved. That’s why, we bring you a digital platform where you can apply online for a loan and get quick disbursal.</p><br></br>
    <p>We believe in building long-term relationships with our clients and maintain transparency which is our core business value. Our values and policies have helped us creating millions of success stories. This entitles us as one of the largest financial distributors across the territory of India. We have successfully delivered a wide range of loans to make people self-dependent in a true sense. Our company operates in all over India.</p><br></br>
    <p>EasyMoneyHub.com provides you the one-step solution for all types of loan and card requirements including personal loan, home loan, education loan, car loan, loans against property, credit card and many more. We have highly proficient experts who deliver high-quality services in a limited span of time.</p><br></br>
    <p>We are the fastest growing business in the retail loan aggregation arena. We have created a financial advisory system that is helpful to our customers in every aspect. Led by passionate problem-solvers and backed by top-level Ex- Bankers, we have become the trendsetters in the last four years of our inception.</p><br></br>
    <p>We are a team of two Co-founders who realized this problem and tried to come up with a solution. We explored it as an opportunity and simplified the problem. The concept of KreditSathi was developed a decade ago & since then we’ve been instrumental in achieving our goal. Our main goal was to help people so that they don't have to carry this financial burden on their shoulders. We want people to fulfill their needs and dreams. We doesn't want people to not fulfill their dreams due to financial reasons.</p><br></br>
    <p>We provide loan/financial help to any Indian citizen who has attained the minimum age of 18 Years and the amount starts from a minimum of<b> ₹ 50.0 K to a maximum of ₹ 40.0 Lacs at the yearly interest of 8% to 11%.</b> The loan tenure is for 1 year to 20 years and must be payable on equal instalment (EMI) including the interest amount.</p><br></br>
    <p>Our Mission</p><br></br>
    <p>Our mission is to bridge the current niche with innovative and flexible lending to SMEs in an efficient way
       We wish to bring the best deals for you. We combine knowledge, passion, and technology to provide the best economic solution and set new benchmarks.</p><br></br>
       <p>Why Choose Us</p><br></br>
      <b> <li>The real-time service provider with 100% customer satisfaction</li>
       <li>Paperwork assistance</li>
       <li>Contactless Documentation</li>
       <li>Best offers</li>
       <li>No Hidden Charges</li>
       <li>Low Interest Rates</li>
       <li>Quick approval & disbursal</li>
       <li>Friendly customer support</li></b>
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
             <div>
              <div className=' h-28 w-full'>
            <footer className='font-bold text-3xl flex items-center justify-center pr-5 pt-10  mt-5' >Copyright © 2024 EasyMoneyHub. All rights reserved. </footer>
            </div>
            

             </div>
             
             



    </div>
    
    







      
    </div>
    
      
      

    </div>
    
  )
}

export default Aboutus
