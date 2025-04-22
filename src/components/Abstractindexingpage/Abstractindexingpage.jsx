import React, { useState } from 'react'
import Abstractindexing from '../../shared/components/Abstractingindexing/Abstractindexing'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Abstractindexingpage() {
const [activeTab, setActiveTab] = useState(0);
    const featuredTopics = [
        {
            title: "Primary Database",
            content: [
                "The International Journal of Cloud Computing and Big Data aims to be indexed in leading primary databases to enhance the accessibility and visibility of published research.",
                "These databases serve as key repositories for high-quality academic content, ensuring that researchers, academicians, and industry professionals can easily discover and cite relevant work. ",
                "Inclusion in primary databases improves the journal’s credibility, citation impact, and global reach. ",
                "IJCCBD is committed to maintaining high publication standards to meet the requirements of prestigious indexing platforms.",

            ],

        },
        {
            title: "Citation Indexes",
            content: [
                "The International Journal of Cloud Computing and Big Data strives to be included in reputable citation indexes to enhance the academic impact and visibility of published research",
                "Citation indexing ensures that articles are recognized, tracked, and referenced by researchers worldwide, increasing their scholarly influence.",
                "By maintaining high publication standards, the journal aims to be indexed in leading citation databases, enabling authors to gain broader recognition.",
                "Inclusion in citation indexes strengthens research credibility, facilitates knowledge dissemination, and supports the advancement of cloud computing and big data studies.",

            ],

        },
        {
            title: "Discovery Services",
            content: [
                "The International Journal of Cloud Computing and Big Data ensures that published research is widely accessible through leading discovery services. ",
                "These services enhance the visibility of articles by enabling seamless search, retrieval, and indexing across academic and research platforms.",
                "By integrating with major discovery tools, IJCCBD facilitates easy access for researchers, academicians, and industry professionals worldwide. ",
                "This broad discoverability helps maximize the impact, citation potential, and global reach of the journal’s publications.",

            ],

        }
    ];

  return (
    <div>
      <Helmetcomponent title={'Abstract and Indexing - International Journal of Cloud Computing and Big Data'} />
      <Abstractindexing  activeTab={activeTab} featuredTopics={featuredTopics} setActiveTab={setActiveTab}/>
    </div>
  )
}

export default Abstractindexingpage