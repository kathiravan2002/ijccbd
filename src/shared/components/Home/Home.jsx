import React from 'react';
import submit from '/assets/uploads.png';
import Data from '/assets/Data.png';
import right from '/assets/Right.png';
import dash from '/assets/books.jpg'
import circleA from '/assets/CA.png'
import circleS from '/assets/CS.png'
import check from '/assets/Checkmark.png'
import { Link } from 'react-router-dom';

const Home = ({activeTab,featuredTopics,setActiveTab,navigate,researchDomains}) => {
  

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1500px] mx-auto ">

      <div className="  2xl:mt-[145px] xl:mt-[125px] lg:mt-[125px] mt-[80px] " >
        <main className="w-full text-justify ">
          <section className="w-full">
            <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

              <div className='lg:flex justify-evenly gap-2'>
                <div>
                  <h1 className="text-lg  lg:text-xl  mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                    Welcome to IJCCBD
                  </h1>
                  <div className='lg:hidden block '>
                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                  </div>
                  <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                    <span className=" poppins-semibold ">
                      The International Journal of Cloud Computing and Big Data
                    </span>{' '}
                    focuses on cutting-edge research and advancements in the fields of cloud computing and big data. The journal aims to provide a platform for researchers, academics, and industry professionals to share insights and innovative solutions. It covers topics such as cloud infrastructure, data management, security, scalability, and real-time data processing. The journal encourages original research articles, reviews, and case studies that address current challenges and future trends.
                  </p>
                  <div className="text-center px-4 lg:px-0 ">
                    <Link to="https://ijccbd.com/ijccbd/index.php/ijccbd/index" target="_blank" rel="noopener noreferrer">
                      <button className="bg-[#4B164C] text-white px-4 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold text-sm lg:text-base" >
                        <div className='flex justify-between items-center'>  Submit Manuscript
                          <img src={submit} alt="Submit Icon" /></div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='hidden lg:block '>
                  <img src={dash} alt="image" className=' min-w-[150px] max-w-[200px] lg:h-auto xl:h-[225px] ' />
                </div>
              </div>


            </div>
          </section>
          <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-4 ">
            <div className='border rounded-lg bg-white shadow-md'>
              <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                <div className='flex items-center justify-center'><img src={circleA} alt='circle A' className='w-[64px] h-[50px]' />
                  <h2 className='text-[#4B164C] poppins-bold mt-2 text-[20px] text-center'>About the Journal</h2>
                </div>
              </div>
              <p className='poppins-regular mt-4 px-4 '>The International Journal of Cloud Computing and Big Data is a peer-reviewed journal dedicated to advancing research in cloud computing and big data technologies. It covers areas like cloud infrastructure, data storage, security, and big data analytics. The journal aims to provide a platform for researchers and professionals to share insights and innovative solutions.</p>
              <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Quarterly publication schedule</p></div>
              <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Double-blind peer review</p></div>
              <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Open access options available</p></div>

              <div className="flex  justify-end px-6  mt-3 lg:mt-9 mb-4">

                <button className="bg-[#4B164C] text-white px-5 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold " onClick={() => navigate('/aboutus')}>
                  <div className='flex justify-between gap-1'>  Learn More
                    <img src={right} alt="Submit Icon" />
                  </div>
                </button>
              </div>
            </div>
            <div className='border rounded-lg bg-white shadow-md'>
              <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                <div className='flex items-center justify-center'><img src={circleS} alt='circle S' className='w-[64px] h-[50px]' />
                  <h2 className='text-[#4B164C] poppins-bold mt-2 text-[20px] text-center'>Aim & Scope</h2>
                </div>
              </div>
              <p className='poppins-regular mt-4 px-4 '>The International Journal of Cloud Computing and Big Data aims to promote research and innovation in cloud computing and big data technologies. The journal covers topics such as cloud infrastructure, data processing, storage, security, big data analytics, and AI-driven solutions. IJCCBD seeks to provide a platform for researchers and practitioners to share insights and address emerging challenges in these fields.</p>
              <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Original research articles</p></div>
              <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Systematic reviews and meta-analyses</p></div>
              <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Case studies and technical notes</p></div>

              <div className="px-6  mt-3 mb-4 flex justify-end">

                <button className="bg-[#4B164C] text-white px-5 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold " onClick={() => navigate('/aimscope')}>
                  <div className='flex justify-between gap-1'>  Learn More
                    <img src={right} alt="Submit Icon" />
                  </div>
                </button>
              </div>
            </div>

          </div>

          <section className="mb-6 w-full ">
            <div className="bg-white  rounded-xl p-6 border border-gray-200 w-full shadow-md">
              <div className="relative w-fit mx-auto mb-6">
                <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                  Featured Topics
                </h2>
                <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>

              <div className="flex border-b-[2px] border-[#4B164C] mb-6 lg:gap-8 gap-2 sm:gap-8 md:gap-8">
                {featuredTopics.map((topic, index) => (
                  <button
                    key={index}
                    className={`  poppins-medium ${activeTab === index ? 'text-[#4B164C] border-b-2 border-[#4B164C] ' : ' hover:text-[#4B164C] '} transition-colors duration-200 lg:text-lg text-sm`}
                    onClick={() => setActiveTab(index)}
                  >
                    {topic.title}
                  </button>
                ))}

              </div>
              <div className=" rounded-lg">
                <p className="leading-relaxed poppins-regular">{featuredTopics[activeTab].content}</p>
                <div className='flex justify-end mt-4'>
                  <button
                    onClick={featuredTopics[activeTab].buttonAction}
                    className="bg-[#4B164C] text-white px-5 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold"
                  >
                    <div className='flex justify-between gap-1 '>  {featuredTopics[activeTab].buttonText}
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Key Research Domains Section */}
          <section className="bg-[#F8E7F6] p-4 lg:p-5 rounded-lg lg:rounded-lg mb-4 lg:mb-6 w-full shadow-md">
          <div className="relative w-fit mx-auto mb-5">
            <h2 className="text-center text-xl lg:text-xl poppins-bold  text-[#4B164C] ">
              Key Research Domains
            </h2>
            <div className='absolute bg-[#4B164C] h-[3px] min-w-[188px] '></div></div>
            <p className="text-center text-base lg:text-lg mb-3 lg:mb-4 text-[#000000] poppins-bold px-4 lg:px-0">
              The journal covers the following areas of  Cloud Computing and Big Data
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-0 mt-2">
              {researchDomains.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-1 lg:space-y-2">
                  {column.map((domain, index) => (
                    <li key={index} className="flex gap-2 lg:gap-2 md:gap-0">
                      <span className="ml-0 lg:ml-10"><img src={Data} alt='shield' className='w-[43px] h-[22px]' /></span>
                      <span className="2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm poppins-regular ">{domain}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>


          {/* Submission Info Section */}
          <section >
            <div className="w-full  rounded-lg text-center border p-4 bg-white shadow-md">
              <p className="text-black mb-2 poppins-medium  lg:text-base px-4 lg:px-0 text-justify lg:text-center ">
                We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
              </p>
              <div className="bg-[#F8E7F6] rounded-tr-[24px]  rounded-bl-[24px] p-2 mx-4 lg:mx-0">
                <p className="text-[#4B164C] poppins-medium  text-sm lg:text-base">
                  The last date for manuscript submission for the next issue is June 22, 2025
                </p>
              </div>
              <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
                With Warm Regards, <br />
                Editor-in-Chief<br />
                <span className="font-bold">IJCCBD</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
