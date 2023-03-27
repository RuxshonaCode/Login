import React from 'react'
import allProducts from '../data'

const About = () => {

  const basePc = allProducts.filter(person => person.category === 'base')

  return (
    <div>
      <h1>business pc</h1>
      {basePc.map(el => {
        return(
          <h1>{el.id}</h1>
        )
      })}
    </div>
  )
}

export default About