import React, { useState } from 'react'
import Articalprocessing from '../../shared/components/Articalprocessing/Articalprocessing'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Articalprocessingpage() {

   const [activeTab, setActiveTab] = useState(0);
      const featuredTopics = [
          {
              title: "Initial Submission",
              content: [
                  "Authors submit their manuscripts through the journal’s online submission system.",
                  "The editorial team conducts an initial review to check for relevance, originality, and adherence to guidelines.",
                
              ],
  
          },
          {
              title: "Peer Review",
              content: [
                  "Submitted manuscripts undergo a double-blind peer review by independent experts.",
                  "Reviewers evaluate the work’s quality, relevance, and originality, providing constructive feedback.",
  
              ],
  
          },
          {
              title: "Publications",
              content: [
                  "After final acceptance, the article is formatted, proofread, and published online with open access. ",
                  "Authors receive a publication confirmation and citation details.",
  
              ],
  
          }
      ];

  return (
    <div>
      <Helmetcomponent title={'Article Processing - International Journal of Cloud Computing and Big Data'} />
      <Articalprocessing activeTab={activeTab} setActiveTab={setActiveTab} featuredTopics={featuredTopics}/>
      </div>
  )
}

export default Articalprocessingpage