import React from 'react'
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'

function Publicationethics({activeTab,setActiveTab,featuredTopics}) {

   
    return (
        <div className='flex flex-cols  w-full'>

            <div className="text-justify 2xl:mt-[145px] xl:mt-[125px] lg:mt-[125px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-lg  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                            Publication Ethics
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data upholds the highest standards of publication ethics to ensure integrity, transparency, and academic excellence. All submissions must be original, free from plagiarism, and follow ethical research practices. Authors, reviewers, and editors are expected to adhere to fair and unbiased evaluation, confidentiality, and responsible authorship. Any form of data fabrication, falsification, or duplicate submission is strictly prohibited. The journal follows ethical guidelines set by international organizations to maintain credibility and trust in scholarly publishing.
                            </p>
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
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Research Integrity</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors are required to submit original and accurate research that adheres to ethical guidelines.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>All data must be properly cited, and plagiarism or data fabrication is strictly prohibited.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors must disclose any conflicts of interest and ensure transparency in their research methods and findings.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Fail Review Process</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data follows a double-blind peer review process to ensure impartiality and fairness. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reviewers evaluate submissions based on originality, quality, and relevance without bias. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The identities of both authors and reviewers are kept confidential to maintain the integrity of the review process.</p></div>
                    </div>
                </div>

                <section className="mb-6 w-full ">
                    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                        <div className="relative w-fit mx-auto mb-6">
                            <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                            Ethical Guidelines
                            </h2>
                            <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>
                        <div className="flex border-b-[2px] border-[#4B164C] mb-6 lg:gap-8 gap-2 sm:gap-8 md:gap-8">
                            {featuredTopics.map((topic, index) => (
                                <button
                                    key={index}
                                    className={`poppins-medium ${activeTab === index ? 'text-[#4B164C] border-b-2 border-[#4B164C]' : ' hover:text-[#4B164C]'} transition-colors duration-200 lg:text-lg text-sm`}
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

export default Publicationethics