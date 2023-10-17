import React from 'react'

const Card: React.FunctionComponent = () => {
  return (
    <main className='card container'>
      <div className="card-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="crd-btn">
          <button>Shop Now</button>
          <button className='second-btn'>Category</button>
        </div>
        <div className="crd-shop">
          <p>Also Available On</p>
          <div className="crd-shop-icons">
            <img src="./images/amazon.png" alt="amazon-logo" />
            <img src="./images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className='card-image'>
        <img src="./images/shoe_image.png" alt="shoe-logo" />
      </div>
    </main>
  )
}

export default Card;