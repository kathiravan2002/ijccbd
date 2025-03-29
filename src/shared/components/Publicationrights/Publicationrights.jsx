import React from 'react';
import cloud from '/assets/cloud.png'
import check from '/assets/Checkmark.png'
import dash from '/assets/books.jpg'


const Publicationrights = () => {
    return (
        <div className='flex '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 lg:mt-[145px] mt-[80px]">
                <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

                    <div className='lg:flex justify-evenly gap-2'>
                        <div>
                            <h1 className="text-xl  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                            Publication Rights Policy
                            </h1>
                            <div className='lg:hidden block '>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                            </div>
                            <p className="  text-black mb-3 lg:mb-4   px-1  poppins-regular max-w-[1094px] ">
                            The International Journal of Cloud Computing and Big Data (IJCCBD) ensures that authors retain the rights to their work while granting the journal the necessary permissions for publication and distribution. Upon acceptance, authors provide the journal with a license to publish, archive, and share their research while maintaining their intellectual property rights. The journal allows proper attribution and responsible reuse of published content in compliance with copyright and open-access policies. Any third-party content included in submissions must have appropriate permissions. IJCCBD is committed to ethical publishing practices and protecting both author and reader rights.
                            </p>
                            
                        </div>
                        <div className='hidden lg:block '>
                            <img src={dash} alt="image" className=' lg:h-auto xl:h-[225px]' />
                        </div>
                    </div>
                </div>

                {/* Aim Section */}
                <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Copyright Policy</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>We maintain a sole and exclusive licence policy for published content rather than copyright transfer.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors retain ownership of their copyright while granting exclusive publishing rights.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This policy balances author interests with journal sustainability and reputation.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Some specific cases may require different arrangements - refer to Author Instructions for details.</p></div>
                    </div>
                    <div className='border rounded-lg bg-white pb-4 shadow-md'>
                        <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
                            <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                                <h2 className='text-[#4B164C] poppins-bold  text-xl text-center'>Key Benefits</h2>
                            </div>
                        </div>
                        <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors are recognized as the copyright owners, demonstrating our value of author relationships.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Centralized management of permissions and licensing ensures maximum content dissemination.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Protection against infringement, inappropriate use, libel, and plagiarism.</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Self-plagiarism: Reusing own previously published work without citation</p></div>
                        <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Ability to maintain and monitor the integrity of published content across all media.</p></div>

                    </div>
                </div>
                <div className="bg-white p-3 border rounded-lg shadow-md">
                    <div className="relative w-fit mx-auto mb-6">
                        <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                        Rights Management
                        </h2>
                        <div className='absolute bg-[#4B164C] h-[3px] min-w-[200px] '></div></div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 '><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The International Journal of Cloud Computing and Big Data (IJCCBD) ensures a balanced approach to rights management, allowing authors to retain ownership of their intellectual property while granting the journal the right to publish, distribute, and archive their work. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">Authors must confirm that their submissions do not infringe on third-party copyrights and obtain necessary permissions for any copyrighted material used.</p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular">The journal supports open-access policies where applicable, ensuring research accessibility while maintaining proper attribution. </p><br /> </div>
                    <div className='flex items-start gap-4 2xl:px-14 xl:px-14 lg:px-18 md:px-18 px-0 mt-2'><img src={check} alt="ll" className='w-[26px] h-[20px]' /><p className="text-base mb-2 poppins-regular"> IJCCBD is committed to ethical publishing practices that protect both authors’ rights and the integrity of scholarly communication.</p><br /> </div>
                </div>
            </div>
        </div>
    );
};

export default Publicationrights;