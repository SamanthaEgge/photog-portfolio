import React from 'react'

import './directory.scss'
import MenuItem from './menu-item.jsx'

class Directory  extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'Headshots',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
        },
        {
          title: 'Landscapes',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
        },
        {
          title: 'Wildlife',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
        },
        {
          title: 'Prints',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map((section, index) => (
            <MenuItem key={index} section={section} />
        ))}
      </div>
    )
  }
}

export default Directory