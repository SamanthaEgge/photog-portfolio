const INITIAL_STATE = {
  sections: [
    {  id: 1,
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default directoryReducer