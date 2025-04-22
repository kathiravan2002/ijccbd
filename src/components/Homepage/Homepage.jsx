import React, { useState } from 'react'
import Home from '../../shared/components/Home/Home.jsx'
import { useNavigate } from 'react-router-dom';


function Homepage() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const featuredTopics = [
    {
      title: "Peer Review ",
      content: "The International Journal of Cloud Computing and Big Data follows a rigorous double-blind peer review process to ensure the quality and integrity of published research. Submitted manuscripts are reviewed by experts in the field, evaluating originality, relevance, and technical accuracy before acceptance.",
      buttonText: "Learn More ",
      buttonAction: () => { navigate('/peer') }
    },
    {
      title: "Publications Ethics",
      content: "The International Journal of Cloud Computing and Big Data upholds the highest standards of publication ethics to ensure integrity and transparency in research. Authors, reviewers, and editors are expected to follow ethical guidelines, including plagiarism prevention, data authenticity, and fair peer review practices.",
      buttonText: "Learn More ",
      buttonAction: () => { navigate('/publicationethicspage') }
    },
    {
      title: "Article Processing",
      content: "The International Journal of Cloud Computing and Big Data ensures a smooth and transparent article processing workflow, from submission to publication. Each manuscript undergoes initial screening, peer review, revisions, and final editing before being published to maintain high research standards.",
      buttonText: "Learn More ",
      buttonAction: () => { navigate('/articleprocessingpage') }
    }
  ];


  const researchDomains = [
    [
      'Cloud Computing',
      'Big Data',
      'Cloud Infrastructure',
      'Data Storage',
      'Data Processing',
      'Cloud Security',
      'Cloud Architecture',
      'Virtualization',
      'Machine Learning',
      'Artificial Intelligence',
      'Data Analytics',
      'Cloud-Based Applications',
      'Real-Time Data Processing',
      'Scalability',
      'Load Balancing',
    ],
    [
      'Edge Computing',
      'Data Mining',
      'Internet of Things',
      'Data Privacy',
      'Hybrid Cloud',
      'Public Cloud',
      'Private Cloud',
      'Multi-Cloud Strategy',
      'Cloud Automation',
      'Data Governance',
      'Cloud Optimization',
      'Data Warehousing',
      'Distributed Systems',
      'Cloud Orchestration',
      'Blockchain ',
    ],
    [
      'Data Lakes',
      'Cloud-Native Applications',
      'Serverless Computing',
      'Cloud Migration',
      'Containerization',
      'Software as a Service',
      'Infrastructure as a Service',
      'Platform as a Service',
      'Data Integration',
      'Cloud Monitoring',
      'Network Security',
      'Data Visualization',
      'Cloud Backup and Recovery',
      'Fog Computing',
      'Data Compliance',
    ],
  ];
  return (
    <>
    <Home activeTab={activeTab} setActiveTab={setActiveTab} featuredTopics={featuredTopics} navigate={navigate} researchDomains={researchDomains}/>
    
    </>
  )
}

export default Homepage