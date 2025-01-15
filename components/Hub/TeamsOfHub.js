import React from 'react'
import TeamSection from '../site/components/TeamSection'

function TeamsOfHub({hub}) {

  return (
    <div>
      <TeamSection ishub="ishub" hub={hub} teams={hub.Teams  }/>
    </div>
  )
}

export default TeamsOfHub
