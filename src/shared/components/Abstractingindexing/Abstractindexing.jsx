import React from 'react'
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'

function Abstractindexing({activeTab,featuredTopics,setActiveTab}) {

    
    return (
        <div className='flex flex-cols  w-full'>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  lg:mt-[145px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-xl  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                            Abstracting and Indexing
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data (IJCCBD) is dedicated to enhancing the visibility and accessibility of published research by being indexed in leading academic databases. Our goal is to ensure that high-quality research reaches a global audience through reputable abstracting and indexing services. Inclusion in these databases improves citation impact, discoverability, and academic recognition for authors. The journal continuously seeks to expand its presence in well-regarded indexing platforms to support the dissemination of cutting-edge research in cloud computing and big data.
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
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Global Visibility</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) is committed to ensuring worldwide accessibility and recognition of published research. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>By aiming for inclusion in leading academic indexing and abstracting services, the journal enhances the visibility and impact of its articles.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This global reach allows researchers, academicians, and industry professionals to access high-quality research, fostering knowledge dissemination and collaboration across institutions and disciplines. </p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Quality Assurance</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) is dedicated to maintaining the highest standards of quality in academic publishing.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Every submitted manuscript undergoes a rigorous double-blind peer review process to ensure originality, accuracy, and scholarly significance.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors, reviewers, and editors work collaboratively to enhance the clarity, relevance, and impact of published articles. </p></div>
                    </div>
                </div>

                <section className="mb-6 w-full ">
                    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                        <div className="relative w-fit mx-auto mb-6">
                            <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                            Indexing Services
                            </h2>
                            <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>
                        <div className="flex border-b-[2px] border-[#4B164C] mb-6 gap-8">
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

export default Abstractindexing