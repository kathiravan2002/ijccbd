import React from 'react'
import Peerreview from '../../shared/components/Peerreview/Peerreview'
import Helmetcomponent from '../Helmetcomponent/Helmetcomponent'

function Peerreviewpage() {
  return (
    <div>
      <Helmetcomponent title={'Peer review Process - International Journal of Cloud Computing and Big Data'} />
      <Peerreview/>
    </div>
  )
}

export default Peerreviewpage