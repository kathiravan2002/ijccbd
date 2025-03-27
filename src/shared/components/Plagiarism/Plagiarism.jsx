import React from 'react';
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'


const Plagiarism = () => {
    return (
        <div className='flex '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 lg:mt-[145px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly'>
                        <div>
                            <h1 className="text-xl  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                            Plagiarism Policy
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data (IJCCBD) upholds strict anti-plagiarism policies to ensure the originality and integrity of published research. All submitted manuscripts are screened using plagiarism detection tools to identify any instances of copied or uncredited content. The journal strictly prohibits any form of plagiarism, including self-plagiarism and data fabrication. Authors are required to properly cite all sources and adhere to ethical research practices. Any manuscript found violating these guidelines will be rejected or retracted to maintain the journal’s high academic standards
                            </p>
                            
                        </div>
                        <div className='hidden lg:block '>
                            <img src={dash} alt="image" className='  min-w-[150px] max-w-[200px] lg:h-auto xl:h-[225px]' />
                        </div>
                    </div>
                </div>

                {/* Aim Section */}
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Definition and Scope</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Copying text, ideas, or results from another source without proper attribution.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reproducing substantial parts of another author's work without permission.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submitting duplicate publication or redundant publication.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Using previously published data without acknowledging the source.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Failing to cite relevant previous works.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Types of Plagiarism</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Direct plagiarism: Copying text verbatim without source acknowledgement.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Paraphrasing plagiarism: Rewording content without citing original source.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Mosaic plagiarism: Combining text from multiple sources without proper citation</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Self-plagiarism: Reusing own previously published work without citation</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Contract plagiarism: Submitting commissioned work as original content</p></div>

                    </div>
                </div>
                <div className="bg-white p-3 border rounded-lg shadow-md">
                    <div className="relative w-fit mx-auto mb-6">
                        <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                        Detection and Consequences
                        </h2>
                        <div className='absolute bg-[#4B164C] h-[3px] min-w-[200px] '></div></div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 '><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The International Journal of Cloud Computing and Big Data (IJCCBD) strictly prohibits plagiarism in any form. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular"> All submitted manuscripts are screened using advanced plagiarism detection software to identify any similarities with existing published work. If plagiarism is detected, the manuscript will be rejected immediately.</p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">In cases of minor overlap, authors will be asked to revise and resubmit the work. Severe cases of plagiarism may lead to a ban on future submissions and notification to the author’s institution. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The journal upholds strict ethical standards to ensure the originality and integrity of published research.</p><br /> </div>
                </div>
            </div>
        </div>
    );
};

export default Plagiarism;