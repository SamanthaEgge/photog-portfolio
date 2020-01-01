import React from 'react'

import './directory.scss'
import MenuItem from './menu-item.jsx'

class Directory  extends React.Component {
  construct() {
    super()

    this.state = {
      sections: [
        {
          title: 'Headshots',
          imageUrl: 'src\assets\temp-home\headshot.JPG'
        },
        {
          title: 'Landscapes',
          imageUrl: 'src\assets\temp-home\landscape.JPG'
        },
        {
          title: 'Wildlife',
          imageUrl: 'src\assets\temp-home\animal.JPG'
        },
        {
          title: 'Prints',
          imageUrl: 'src\assets\temp-home\prints.JPG'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map((section, index) => (
            <MenuItem key={index} title={section.title} />
        ))}
      </div>
    )
  }
}

export default Directory