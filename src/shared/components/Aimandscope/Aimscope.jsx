import React from 'react';
import submit from '/assets/uploads.png'
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'
import { Link } from 'react-router-dom';


const Aimscope = () => {
    return (
        <div className='flex flex-col'>

            <div className="text-justify 2xl:mt-[145px] xl:mt-[125px] lg:mt-[125px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-lg  lg:text-2xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                                Aim and  scope
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                                The International Journal of Cloud Computing and Big Data (IJCCBD) aims to provide a leading platform for researchers, academicians, and industry professionals to publish and share innovative research in cloud computing and big data. The journal focuses on key areas such as cloud architecture, security, big data analytics, distributed computing, IoT integration, and AI-driven data processing. It welcomes original research articles, review papers, and case studies that explore emerging trends, challenges, and practical applications.
                            </p>
                            <div className="text-center px-4 lg:px-0 ">
                                <Link to="https://ijccbd.com/ijccbd/index.php/ijccbd/index" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#4B164C] text-white px-4 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold lg:text-base  text-sm" >
                                        <div className='flex justify-between items-center'>  Submit Manuscript
                                            <img src={submit} alt="Submit Icon" /></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='hidden lg:block '>
                            <img src={dash} alt="image" className=' min-w-[150px] max-w-[200px] h-[225px]' />
                        </div>
                    </div>
                </div>

                {/* Aim Section */}
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-[20px] text-center'>Aim</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) aims to advance research and innovation in cloud computing and big data by providing a high-quality platform for knowledge dissemination. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal seeks to bridge the gap between academia and industry by publishing original research, reviews, and case studies on emerging technologies, methodologies, and applications. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>IJCCBD is dedicated to fostering collaboration among researchers, academicians, and professionals to address challenges, explore new opportunities, and drive technological advancements.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Our goal is to contribute to the development of efficient, secure, and scalable cloud and big data solutions that benefit society and industry.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-[20px] text-center'>Scope</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) covers a broad range of topics related to cloud computing and big data technologies.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>It includes research on cloud architecture, security, virtualization, distributed computing, big data analytics, machine learning, and IoT integration. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal welcomes studies on emerging trends, real-world applications, performance optimization, and innovative solutions in these fields.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>IJCCBD serves as a platform for researchers, academicians, and industry professionals to share knowledge and address challenges in cloud and data-driven technologies. </p></div>
                    </div>
                </div>
                <div className="bg-white  border rounded-lg shadow-md py-2">
                    <div className="relative w-fit mx-auto mb-6">
                        <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                            Research Areas
                        </h2>
                        <div className='absolute bg-[#4B164C] h-[3px] min-w-[150px] '></div></div>
                    <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3  gap-2 '><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The International Journal of Cloud Computing and Big Data (IJCCBD) covers a wide range of research areas, including but not limited to cloud computing architectures, virtualization, and security. </p><br /> </div>
                    <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3  gap-2 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">It explores big data analytics, data mining, machine learning, and AI-driven data processing. </p><br /> </div>
                    <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3  gap-2 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The journal also focuses on distributed computing, edge and fog computing, IoT integration, and blockchain applications in cloud environments. </p><br /> </div>
                    <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3  gap-2 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Topics such as data storage optimization, cloud service models, and high-performance computing are also within its scope.</p><br /> </div>
                    <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3  gap-2 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular"> IJCCBD aims to publish innovative research that addresses emerging challenges and advancements in these rapidly evolving fields. </p><br /> </div>
                </div>
            </div>
        </div>
    );
};

export default Aimscope;