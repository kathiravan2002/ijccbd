import React, { useState } from 'react'
import Copyrightform from '../../shared/components/Copyrightform/Copyrightform'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Copyrightformpage() {

   const [activeTab, setActiveTab] = useState(0);
    const featuredTopics = [
      {
        title: "Publication Rights",
        content: [
          "Authors submitting to the International Journal of Cloud Computing and Big Data retain the copyright of their work while granting the journal the right to publish, distribute, and archive it in various formats. ",
          "The journal holds the non-exclusive right to disseminate the content for academic and research purposes. ",
          "Authors must ensure that their submission does not violate any third-party rights and obtain necessary permissions for copyrighted material. ",
          "Proper citation and attribution are required when the published work is referenced or reused. ",
          "The journal is committed to maintaining ethical publishing practices and academic integrity.",
  
        ],
  
      },
      {
        title: "Content Warranty",
        content: [
          "Authors submitting to the International Journal of Cloud Computing and Big Data warrant that their work is original, free from plagiarism, and does not infringe any third-party rights. ",
          "They confirm that all data, references, and citations are accurate and properly credited. ",
          "The journal is not responsible for any inaccuracies, misrepresentations, or legal disputes arising from the content.",
          "Authors must ensure that their research complies with ethical guidelines and does not contain fabricated or manipulated data.",
          "Any violation may result in rejection, retraction, or legal consequences.",
  
        ],
  
      },
      {
        title: "Legal Compliance",
        content: [
          "The International Journal of Cloud Computing and Big Data is committed to maintaining the highest legal and ethical standards in academic publishing.",
          "Authors must ensure that their submissions comply with intellectual property laws, data protection regulations, and ethical research guidelines. ",
          "Any use of copyrighted materials, confidential data, or third-party content must have proper permissions and attributions. ",
          "The journal does not tolerate plagiarism, fabrication, or any form of academic misconduct.",
          "By submitting their work, authors confirm adherence to all relevant legal and ethical requirements.",
        ],
  
      }
    ];
  return (
    <div>
      <Helmetcomponent title={'Copyright Form - International Journal of Cloud Computing and Big Data'} />
      <Copyrightform activeTab={activeTab} setActiveTab={setActiveTab} featuredTopics={featuredTopics}/>
      </div>
  )
}

export default Copyrightformpage