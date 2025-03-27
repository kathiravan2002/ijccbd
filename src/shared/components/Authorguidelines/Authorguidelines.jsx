import React, { useState } from 'react'
import cloud from '/assets/cloud.png'
import dash from '/assets/books.jpg'
import check from '/assets/Checkmark.png'


function Authorguidelines() {

  const [activeTab, setActiveTab] = useState(0);
  const featuredTopics = [
    {
      title: "Research Article",
      content: [
        "The International Journal of Cloud Computing and Big Data (IJCCBD) ensures a rigorous double-blind peer review process for research articles. ",
        "Each submission is evaluated for originality, research methodology, data analysis, and contribution to the field.",
        "Independent experts assess the scientific validity, significance, and clarity of findings. ",
        "Authors receive constructive feedback and may be required to make revisions before acceptance. ",
        "This process ensures that only high-quality, impactful research articles are published, contributing to advancements in cloud computing and big data.",

      ],

    },
    {
      title: "In-depth Review Article",
      content: [
        "In-depth review articles submitted to the IJCCBD undergo a thorough double-blind peer review. ",
        "Experts assess the comprehensiveness, critical analysis, and relevance of the literature reviewed.",
        "The article must provide new insights, highlight research gaps, and offer valuable perspectives on emerging trends.",
        "Reviewers ensure the accuracy, credibility, and scholarly contribution of the article.",
        "Authors may be required to refine their work based on feedback to maintain the journal’s high academic standards.",

      ],

    },
    {
      title: "Technical Article",
      content: [
        "Technical articles submitted to the IJCCBD are reviewed for innovation, technical depth, and practical applicability.",
        "The double-blind peer review process ensures that articles present accurate, well-supported, and industry-relevant solutions.",
        "Reviewers evaluate the clarity of technical explanations, effectiveness of proposed methodologies, and potential real-world impact.",
        "Authors receive detailed feedback to refine their work, ensuring the publication of high-quality, technically sound articles that advance cloud computing and big data technologies.",

      ],

    }
  ];
  return (
    <div className='flex flex-cols  w-full'>

      <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  lg:mt-[145px] mt-[80px]">
        <div className='bg-[#F8E7F6] p-3 lg:py-5 py-3 border rounded-lg mb-6 lg:mb-6 shadow-md'>

          <div className='lg:flex justify-evenly'>
            <div>
              <h1 className="text-xl  lg:text-xl font-bold mb-3 lg:mb-4 text-[#4B164C]  px-1 poppins-bold">
                Author Guidelines
              </h1>
              <div className='lg:hidden block '>
                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
              </div>
              <p className="  text-black mb-3 lg:mb-4 px-1  poppins-regular max-w-[1094px] ">
                The International Journal of Cloud Computing and Big Data (IJCCBD) welcomes high-quality research contributions in the fields of cloud computing, big data analytics, and related technologies. Authors are required to submit original, unpublished work that adheres to ethical research standards and proper citation practices. Manuscripts should be well-structured, clearly written, and formatted according to the journal’s submission guidelines. All submissions undergo a rigorous double-blind peer review process to ensure academic integrity and research excellence. Authors must follow the prescribed formatting, referencing style, and ethical guidelines to maintain publication standards.
              </p>
            </div>
            <div className='hidden lg:block '>
              <img src={dash} alt="image" className=' min-w-[150px] max-w-[200px] lg:h-auto xl:h-[225px]' />
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 2xl:grid-cols-2  lg:grid-cols-2 mb-6 gap-6 ">
          <div className='border rounded-lg bg-white pb-6 shadow-md'>
            <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
              <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                <h2 className='text-[#4B164C] poppins-bold  text-[20px] text-center'>Publishing Requirements</h2>
              </div>
            </div>
            <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Cloud Computing and Big Data (IJCCBD) requires all submitted manuscripts to be original, unpublished, and free from plagiarism.</p></div>
            <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors must ensure their research aligns with the journal’s scope and follows ethical guidelines. </p></div>
            <div className='flex items-start 2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Submissions should be formatted as per the journal’s prescribed template, including proper citations and references.</p></div>
            <h2 className="text-base text-[#4B164C] poppins-bold mb-2 mt-2 pl-6 lg:pl-16">Key Requirements :</h2>
            <ul className="list-disc  space-y-2 poppins-regular 2xl:px-28 xl:px-28 lg:px-20 md:px-18  px-11 ">
              <li>
                Manuscripts must adhere to the IJCCBD template
              </li>
              <li>
                Abstracts should be 200-1000 characters and structured as per PubMed format
              </li>
              <li>
                Three to eight keywords must be included
              </li>
              <li> References should follow the Vancouver style </li>
              <li>Ensure proper grammar, spelling, and use of formal English</li>
            </ul>
          </div>

          <div className='border rounded-lg bg-white pb-4 shadow-md'>
            <div className='bg-[#F8E7F6] p-4 rounded-br-[30px] rounded-bl-[30px] border-b-4 border-b-[#4B164C]'>
              <div className='flex items-center justify-center gap-3'><img src={cloud} alt='cloud' className='w-[40px] h-[35px] ' />
                <h2 className='text-[#4B164C] poppins-bold  text-[20px] text-center'>Submission Process</h2>
              </div>
            </div>
            <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submit your manuscript in OpenOffice, Microsoft Word, or RTF format through our Open Journal System (OJS).</p></div>
            <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Each submission undergoes an initial editorial screening before being sent for a double-blind peer review.</p></div>
            <h2 className="text-base text-[#4B164C] poppins-bold mb-2 mt-2 pl-6 lg:pl-16">Key Requirements :</h2>
            <ul className="list-disc  space-y-2 poppins-regular 2xl:px-28 xl:px-28 lg:px-20 md:px-18  px-11 ">
              <li> Initial manuscript screening by editorial team </li>
              <li> Double-blind peer review process </li>
              <li> Author revision period  </li>
              <li> Final editorial decision </li>
              <li>Publication with Creative Commons licensing</li>
            </ul>
            <div className='flex items-start  2xl:px-20 xl:px-20 lg:px-18 md:px-18 px-3 mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Our editorial team provides comprehensive support throughout the submission process to ensure a smooth publishing experience.</p></div>

          </div>
        </div>


        <section className="mb-6 w-full ">
          <div className="bg-white  rounded-xl p-4  border border-gray-200 shadow-md">
            <div className="relative w-fit mx-auto mb-6">
              <h2 className=" text-xl lg:text-xl poppins-bold text-[#4B164C] text-center ">
                Accepted Article Types
              </h2>
              <div className='absolute bg-[#4B164C] h-[3px] min-w-[130px] '></div></div>
            <div className="flex border-b-[2px] border-[#4B164C] mb-6 gap-8">
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

export default Authorguidelines