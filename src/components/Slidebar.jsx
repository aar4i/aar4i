import { FaArrowLeft,FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

import image from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'

const Slidebar = () => {
    const allItems= [
    {
        name: "colonna",
        description: "some text that will be here",
        background: image,
    },
    {
        name: "stokgolm",
        description: "some text that will be here",
        background: image2,
    },
    {
        name: "bike",
        description: "some text that will be here",
        background: image3,
    },
    {
        name: "me",
        description: "some text that will be here",
        background: image4,
    },
    {
        name: "underground",
        description: "some text that will be here",
        background: image5,
    },
]


const [items, setItems] = useState(allItems);

const handlenext = () => {
    setItems((pervItems) => [...pervItems.slice(1), pervItems[0]])
}

const handleprev = () => {
    setItems((pervItems) => [pervItems[pervItems.length -1], ...pervItems.slice(0, -1) ])
}

  return (
    <div className='container'>
        <div className='slide'>
        {
            items.map((item, index) => (
                <div key={index} className='item'
                style={{backgroundImage:`url(${item.background})`}}
                >
                    <div className='content'>
                        <h2 className='name'>{item.name}</h2>
                        <p className='description'>{item.description}</p>
                        <button>see more</button>
                    </div>
                </div>
            ))
        }
        </div>
    <div className='button'>
      <button onClick={handleprev} className='perv'>
        <FaArrowLeft/>
      </button>
      <button onClick={handlenext} className='next'>
        <FaArrowRight/>
      </button>
    </div>

  </div>
  )
}

export default Slidebar