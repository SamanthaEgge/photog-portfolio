import React from 'react'

import './directory.scss'
import MenuItem from './menu-item.jsx'

class Directory  extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          id: 1,
          title: 'Headshots',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'headshots'
        },
        {
          id: 2,
          title: 'Landscapes',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'landscapes'
        },
        {
          id: 3,
          title: 'Wildlife',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'wildlife'
        },
        {
          id: 4, 
          title: 'Prints',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          linkUrl: 'prints'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...sectionProps}) => (
            <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory