import React, { useState } from 'react'
import Publicationethics from '../../shared/components/Publicationethics/Publicationethics'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Publicationethicspage() {
 const [activeTab, setActiveTab] = useState(0);
    const featuredTopics = [
        {
            title: "Open Acess Policy",
            content: [
                "The International Journal of Cloud Computing and Big Data (IJCCBD) follows an open access policy, ensuring that all published articles are freely available to researchers, academicians, and the public without any subscription or access fees.  ",
                "This promotes global knowledge sharing, innovation, and collaboration in the fields of cloud computing and big data.",
                "Authors retain copyright over their work while granting the journal the right to distribute and archive it.  ",
                "Readers can access, download, and share published content, provided proper citation is given. ",

            ],

        },
        {
            title: "Creative Common License",
            content: [
                "All articles in IJCCBD are published under a Creative Commons Attribution License (CC BY), allowing others to share, adapt, and build upon the work with proper attribution to the original authors.",
                "This license promotes open access to research, enabling wider dissemination and academic collaboration.",
                "Authors must ensure that their submissions comply with copyright laws and include necessary permissions for third-party content.",
                "The journal encourages ethical use and citation of published work to uphold scholarly integrity.",

            ],

        },
        {
            title: "Community Standards",
            content: [
                "The International Journal of Cloud Computing and Big Data (IJCCBD) is committed to fostering a respectful, inclusive, and professional academic community. ",
                "Authors, reviewers, and editors must engage in ethical research practices, constructive peer review, and fair collaboration.",
                "Any form of discrimination, harassment, or unethical conduct is strictly prohibited.",
                "The journal promotes transparency, integrity, and intellectual diversity in all scholarly communications.",

            ],

        }
    ];

  return (
    <div>
      <Helmetcomponent title={'Publications Ethics - International Journal of Cloud Computing and Big Data'} />
      <Publicationethics activeTab={activeTab} setActiveTab={setActiveTab} featuredTopics={featuredTopics}/>
    </div>
  )
}

export default Publicationethicspage