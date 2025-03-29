import React, { useState } from 'react'
import Aboutus from '../../shared/components/Aboutus/Aboutus'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'
import { useNavigate } from 'react-router-dom';

function Aboutuspage() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const featuredTopics = [
      {
          title: "Peer Review ",
          content: "The International Journal of Cloud Computing and Big Data (IJCCBD) follows a rigorous double-blind peer review process to ensure the quality and integrity of published research. Submitted manuscripts are reviewed by experts in the field, evaluating originality, relevance, and technical accuracy before acceptance.",
          buttonText: "Learn More ",
          buttonAction: () => { navigate('/peer') }
      },
      {
          title: "Publications Ethics",
          content: "The International Journal of Cloud Computing and Big Data (IJCCBD) upholds the highest standards of publication ethics to ensure integrity and transparency in research. Authors, reviewers, and editors are expected to follow ethical guidelines, including plagiarism prevention, data authenticity, and fair peer review practices.",
          buttonText: "Learn More ",
          buttonAction: () => { navigate('/publicationethicspage') }
      },
      {
          title: "Article Processing",
          content: "The International Journal of Cloud Computing and Big Data (IJCCBD) ensures a smooth and transparent article processing workflow, from submission to publication. Each manuscript undergoes initial screening, peer review, revisions, and final editing before being published to maintain high research standards.",
          buttonText: "Learn More ",
          buttonAction: () => { navigate('/articleprocessingpage') }
      }
  ];
  return (
    <div>

      <Helmetcomponent title={'About us - International Journal of Cloud Computing and Big Data'} />
      <Aboutus navigate={navigate} activeTab={activeTab} setActiveTab={setActiveTab} featuredTopics={featuredTopics}/>

    </div>
  )
}

export default Aboutuspage