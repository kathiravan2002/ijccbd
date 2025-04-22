
import React from 'react';
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'


const Malpractice = () => {
    return (
        <div className='flex '>

            <div className="text-justify 2xl:mt-[145px] xl:mt-[125px] lg:mt-[125px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-lg  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                            Publication Ethics and Malpractice Policy
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data is committed to maintaining the highest ethical standards in academic publishing. The journal strictly follows ethical guidelines to prevent any form of malpractice, including plagiarism, data fabrication, and duplicate submissions. Authors, reviewers, and editors are expected to uphold integrity, transparency, and fairness throughout the publication process. Any unethical behavior will result in rejection, retraction, or other corrective actions. IJCCBD ensures that all published research adheres to global ethical standards to maintain credibility and trust in scholarly communication.
                            </p>
                            
                        </div>
                        <div className='hidden lg:block '>
                            <img src={dash} alt="image" className=' min-w-[150px] max-w-[200px] lg:h-auto xl:h-[225px]' />
                        </div>
                    </div>
                </div>

                {/* Aim Section */}
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] py-5 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Author's Responsibilities</h2>
                            </div>
                        </div>
                          <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Original work without plagiarism.</p></div>
                          <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Valid authorship with significant contributions.</p></div>
                          <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Proper acknowledgment of sources and citations.</p></div>
                          <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Disclosure of conflicts of interest and funding.</p></div>
                          <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Prompt notification of errors in published work.</p></div>
                          <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Data accessibility and retention.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Editor's Responsibilities</h2>
                            </div>
                        </div>
                      <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Maintain journal quality and integrity.</p></div>
                      <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Fair and unbiased publication decisions.</p></div>
                      <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Rigorous peer review process implementation.</p></div>
                      <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Conflict of interest disclosure.</p></div>
                      <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Confidential manuscript handling.</p></div>
                      <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Quality assurance of published content.</p></div>

                    </div>
                </div>
                <div className="bg-white p-3 border rounded-lg shadow-md">
                    <div className="relative w-fit mx-auto mb-6">
                        <h2 className=" text-lg lg:text-xl poppins-bold text-[#4B164C] text-center ">
                        Reviewer's Responsibilities
                        </h2>
                        <div className='absolute bg-[#4B164C] h-[3px] min-w-[200px] hidden lg:block'></div></div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 '><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Reviewers for the International Journal of Cloud Computing and Big Data play a crucial role in maintaining the quality and integrity of published research.</p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">They must provide fair, objective, and constructive feedback to help authors improve their work while maintaining confidentiality throughout the review process.</p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Reviewers should assess the originality, methodology, significance, and clarity of submissions, ensuring they meet ethical and academic standards.</p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Any potential conflicts of interest must be disclosed, and reviewers should decline assignments if they feel unqualified or unable to complete the review on time.</p><br /> </div>
                </div>
            </div>
        </div>
    );
};

export default Malpractice;