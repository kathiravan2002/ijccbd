import React from 'react'
import submit from '/assets/uploads.png'
import cloud from '/assets/cloud.png'
import right from '/assets/Right.png'
import dash from '/assets/books.jpg'
import check from '/assets/Checkmark.png'
import { Link } from 'react-router-dom'

function Aboutus({navigate,activeTab,setActiveTab,featuredTopics}) {

    return (
        <div className='flex flex-col '>

            <div className="text-justify  2xl:mt-[145px] xl:mt-[125px] lg:mt-[125px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-lg  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                                About us
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                                The International Journal of Cloud Computing and Big Data (IJCCBD) is a peer-reviewed journal dedicated to advancing research and innovation in cloud computing and big data technologies. We publish high-quality research articles, reviews, and case studies that address emerging trends, challenges, and applications in these fields. Our mission is to foster knowledge exchange among researchers, academicians, and industry professionals worldwide. IJCCBD aims to be a leading platform for groundbreaking research that shapes the future of cloud computing and big data.
                            </p>
                            <div className="text-center px-4 lg:px-0 ">
                                <Link to="https://ijccbd.com/ijccbd/index.php/ijccbd/index" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#4B164C] text-white px-4 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold lg:text-base  text-sm" >
                                        <div className='flex justify-between items-center'>Submit Manuscript
                                            <img src={submit} alt="Submit Icon" /></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='hidden lg:block '>
                            <img src={dash} alt="image" className=' min-w-[150px] max-w-[200px] lg:h-auto xl:h-[225px]' />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Scope</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) focuses on cutting-edge research and advancements in cloud computing, big data analytics, and their real-world applications.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal covers topics such as cloud architecture, security, data storage, machine learning in big data, distributed computing, and IoT integration.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>It provides a platform for researchers, academicians, and industry experts to share innovative solutions, emerging trends, and challenges in the field.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Mission</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) is committed to advancing research and innovation in cloud computing and big data technologies. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Our mission is to provide a high-quality platform for researchers, academicians, and industry professionals to publish and share groundbreaking discoveries, methodologies, and applications. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>We aim to foster collaboration, address emerging challenges, and promote the ethical and efficient use of cloud and big data solutions.</p></div>
                    </div>

                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Publications Ethics</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) upholds the highest standards of publication ethics to ensure integrity, transparency, and credibility in scholarly research.  </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>We adhere to ethical guidelines set by international organizations, promoting originality, proper citation, and avoidance of plagiarism or data manipulation. Authors, reviewers, and editors are expected to follow strict ethical practices, including fair peer review, confidentiality, and conflict-of-interest disclosure.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Any form of academic misconduct is strictly prohibited, and corrective actions will be taken if violations occur. </p></div>
                    </div>


                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Audience</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) caters to a diverse audience, including researchers, academicians, industry professionals, and policymakers engaged in cloud computing and big data technologies.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Our readership includes computer scientists, data analysts, software engineers, IT professionals, and students seeking the latest advancements in the field. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal serves as a valuable resource for those interested in emerging trends, innovative applications, and challenges in cloud infrastructure, big data analytics, and related domains. </p></div>
                    </div>

                </div>

                <section className="mb-6 w-full ">
                    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                        <div className="relative w-fit mx-auto mb-6">
                            <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                                Featured Topics
                            </h2>
                            <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>
                        <div className="flex border-b-[2px] border-[#4B164C] mb-6 lg:gap-8 gap-2 sm:gap-8 md:gap-8">
                            {featuredTopics.map((topic, index) => (
                                <button
                                    key={index}
                                    className={` poppins-medium ${activeTab === index ? 'text-[#4B164C] border-b-2 border-[#4B164C]' : ' hover:text-[#4B164C]'} transition-colors duration-200 lg:text-lg text-sm`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {topic.title}
                                </button>
                            ))}

                        </div>
                        <div className=" rounded-lg">
                            <p className="leading-relaxed poppins-regular 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-0">{featuredTopics[activeTab].content}</p>
                            <div className='flex justify-end mt-4 mr-20'>
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

                <div className="bg-white py-2 border rounded-lg shadow-md">
                    <div className="relative w-fit mx-auto mb-6">
                        <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                            Submission Guidelines
                        </h2>
                        <div className='absolute bg-[#4B164C] h-[3px] min-w-[180px] '></div></div>
                    <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Authors are invited to submit original, unpublished manuscripts that are not under review elsewhere. For a smooth and consistent submission process, detailed guidelines are available on our website.</p><br />
                    </div>
                    <div className="text-center px-4 lg:px-0 mt-2 mb-2">

                        <button className="bg-[#4B164C] text-white px-4 py-2 rounded-tr-[24px]  rounded-bl-[24px]  poppins-bold" onClick={() => navigate('/authorguidelinespage')} >
                            <div className='flex justify-between items-center'>   Submission Guidelines
                                <img src={right} alt="Submit Icon" /></div>
                        </button>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Aboutus