import React, { useState } from 'react'
import Peerreview from '../../shared/components/Peerreview/Peerreview'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Peerreviewpage() {
  const [activeTab, setActiveTab] = useState(0);
      const featuredTopics = [
          {
              title: "Research Article",
              content: [
                  "The International Journal of Cloud Computing and Big Data ensures a rigorous double-blind peer review process for research articles. ",
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
    <div>
      <Helmetcomponent title={'Peer review Process - International Journal of Cloud Computing and Big Data'} />
      <Peerreview activeTab={activeTab} setActiveTab={setActiveTab} featuredTopics={featuredTopics}/>
    </div>
  )
}

export default Peerreviewpage