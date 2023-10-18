import React from 'react'

const Api = async () => {
  const response = await  fetch("https://api.github.com/users/tushar26011999").then(res => res.json())
  return response
}

export default Api