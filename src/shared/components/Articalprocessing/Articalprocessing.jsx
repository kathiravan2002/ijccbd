import React from 'react'
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'
import submit from '/assets/uploads.png';
import { Link } from 'react-router-dom';

function Articalprocessing({activeTab,setActiveTab,featuredTopics}) {

   
    return (
        <div className='flex flex-cols  w-full'>

            <div className="text-justify   2xl:mt-[145px] xl:mt-[125px] lg:mt-[125px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-lg  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                                Article Processing
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data follows a structured article processing workflow to ensure high-quality and timely publication. Each submitted manuscript undergoes an initial editorial screening, followed by a rigorous double-blind peer review process. Accepted articles are carefully edited, formatted, and prepared for online publication. The journal maintains transparency in the review and publication timeline to provide authors with a smooth and efficient experience. IJCCBD is committed to upholding academic integrity and publishing impactful research in cloud computing and big data.
                            </p>
                            <div className="text-center px-4 lg:px-0 ">
                                <Link to="https://ijccbd.com/ijccbd/index.php/ijccbd/about/submissions" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#4B164C] text-white px-4 py-2 rounded-tr-[24px]  rounded-bl-[24px] poppins-bold lg:text-base  text-sm" >
                                        <div className='flex justify-between items-center'>  Submit Manuscript
                                            <img src={submit} alt="Submit Icon" /></div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='hidden lg:block '>
                            <img src={dash} alt="image" className='  min-w-[150px] max-w-[200px] lg:h-auto xl:h-[225px]' />
                        </div>
                    </div>


                </div>

                <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-extrabold  text-[20px] text-center'>Publication Process</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data follows a systematic publication process to ensure the timely and high-quality dissemination of research. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submitted manuscripts undergo an initial editorial assessment, followed by a rigorous double-blind peer review. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>After acceptance, articles are formatted, proofread, and prepared for online publication. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors are notified at each stage to maintain transparency and efficiency. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal is committed to upholding academic integrity and ensuring global accessibility of published research.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-extrabold  text-[20px] text-center'>Author Benefits</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data offers numerous benefits to authors, including global visibility, rigorous peer review, and fast-track publication. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Published articles are indexed in leading databases, enhancing citation potential and academic recognition. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors receive expert feedback to improve the quality and impact of their research.  </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal ensures ethical publishing practices, long-term digital archiving, and wide accessibility to a global audience. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> IJCCBD supports researchers by providing a reputable platform for sharing innovative findings in cloud computing and big data. </p></div>                  
                    </div>
                </div>

                <section className="mb-6 w-full ">
                    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                        <div className="relative w-fit mx-auto mb-6">
                            <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                            Processing Steps
                            </h2>
                            <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>
                        <div className="flex border-b-[2px] border-[#4B164C] mb-6 lg:gap-8 gap-4 sm:gap-8 md:gap-8">
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

                        <div className='2xl:px-16 xl:px-16 lg:px-16 md:px-16 px-0'>
                            <ul className="space-y-2">
                                {featuredTopics[activeTab].content.map((point, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <img src={check} alt="checkmark" className='w-[26px] h-[20px] ' />
                                        <p className="poppins-regular">{point}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Articalprocessing