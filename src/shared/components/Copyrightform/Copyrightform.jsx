import React from 'react'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'
import cloud from '/assets/cloud.png'


function Copyrightform({activeTab,setActiveTab,featuredTopics}) {

    return (
        <div className='flex flex-cols  w-full'>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 lg:mt-[145px] mt-[80px] ">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-xl  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                                Copyright Declaration
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4 px-1  poppins-regular max-w-[1094px] ">
                            By submitting a manuscript to the International Journal of Cloud Computing and Big Data (IJCCBD), authors confirm that the work is original, unpublished, and not under consideration elsewhere. Upon acceptance, authors retain copyright but grant the journal the right to publish, distribute, and archive the work in print and digital formats. Proper credit must be given when the article is reused or cited. Any use of third-party content must comply with copyright laws and include necessary permissions. The journal upholds strict ethical standards to ensure integrity in academic publishing.
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
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Copyright Declaration</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-16 xl:px-16 lg:px-14 md:px-14 px-3 mt-4 '><p className='poppins-regular '>I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IJCCBD. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Author Agreement</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-16 xl:px-16 lg:px-14 md:px-14 px-3 mt-4'><p className='poppins-regular '>This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p></div>
                    </div>
                </div>

                <section className="mb-6 w-full ">
                          <div className="bg-white  rounded-xl p-4 px-4 border border-gray-200 shadow-md">
                            <div className="relative w-fit mx-auto mb-6">
                              <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                              Copyrights Points
                              </h2>
                              <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>
                            <div className="flex border-b-[2px] border-[#4B164C] mb-6 gap-8">
                              {featuredTopics.map((topic, index) => (
                                <button
                                  key={index}
                                  className={` poppins-medium  ${activeTab === index ? 'text-[#4B164C] border-b-2 border-[#4B164C]' : ' hover:text-[#4B164C]'} transition-colors duration-200 lg:text-lg text-sm`}
                                  onClick={() => setActiveTab(index)}
                                >
                                  {topic.title}
                                </button>
                              ))}
                
                            </div>
                
                            <div className='2xl:px-11 xl:px-14 lg:px-14 md:px-14 px-0'>
                              <ul className="space-y-2">
                                {featuredTopics[activeTab].content.map((point, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <img src={check} alt="checkmark" className='w-[26px] h-[20px] ' />
                                    <p className="poppins-regular ">{point}</p>
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

export default Copyrightform