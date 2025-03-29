import React from 'react';
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'


const Correction = () => {
    return (
        <div className='flex '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 lg:mt-[145px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-xl  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                            Journal Correction Policy
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data (IJCCBD) is committed to maintaining the accuracy and integrity of published research. If errors or inaccuracies are identified after publication, the journal provides a structured correction process. Minor errors that do not affect the study’s validity are addressed through errata, while significant issues may result in formal corrections or retractions. Authors and readers are encouraged to report any concerns, ensuring transparency and reliability in scholarly communication. IJCCBD follows ethical guidelines to uphold research credibility and publication standards.</p>
                            
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
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Version of Record (VoR)</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) ensures that the final published version of an article, known as the Version of Record (VoR), is the authoritative and citable version. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Once an article is peer-reviewed, accepted, and formatted, it is published as the VoR, ensuring its permanence and accessibility. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Any updates or corrections after publication follow the journal’s correction policy, but the VoR remains the primary reference. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>IJCCBD is committed to maintaining the integrity and long-term availability of all published research.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Correction Criteria</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) follows a structured correction policy to maintain the accuracy and credibility of published research. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Corrections are categorized based on their impact minor errors (e.g., typographical mistakes) that do not affect the study’s conclusions are addressed through errata, while significant errors (e.g., data inaccuracies or methodological issues) may require a formal correction notice.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> In cases of serious ethical or academic concerns, a retraction may be issued. </p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors, editors, and readers are encouraged to report any necessary corrections to ensure transparency and integrity in scholarly publishing.</p></div>
                    </div>
                </div>
                <div className="bg-white p-3 border rounded-lg shadow-md">
                    <div className="relative w-fit mx-auto mb-6">
                        <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                        Correction Process
                        </h2>
                        <div className='absolute bg-[#4B164C] h-[3px] min-w-[200px] '></div></div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 '><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The International Journal of Cloud Computing and Big Data (IJCCBD) follows a structured correction process to ensure the accuracy and integrity of published research.  </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">When an error is identified, authors or readers can submit a formal request for correction. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The editorial team reviews the issue to determine its impact and categorizes it as a minor error, a significant correction, or a retraction if necessary. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Approved corrections are published as a separate notice, linked to the original article, ensuring transparency. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The journal is committed to maintaining high publication standards and scholarly credibility. </p><br /> </div>
                </div>
            </div>
        </div>
    );
};

export default Correction;