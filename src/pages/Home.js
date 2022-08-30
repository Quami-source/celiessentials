import React from 'react'
import BestSellers from '../components/BestSellers'
import News from '../components/News'

function Home() {
  return (
    <>
      <div className='home-container bg-pale_pink'>
        <div className='left'>
          <h1>Feel Natural and Confident</h1>
          <div className='btn-container'>
            <button className='bg-primary text-white text-xs pt-2 pb-2 pr-4 pl-4 m-2 right-btn'>
              Get started
            </button>
            <button className=' text-primary text-xs pt-2 pb-2 pr-4 pl-4 left-btn' 
            style={{borderWidth:'2px',borderColor:'#152910',padding:'0',
              display:'flex',justifyContent:'center',alignItems:'center',height:'32px'}}>
              Learn more
            </button>
          </div>
          <div className='s-prod-container'>
            <div className='left-prod bg-pale_blue'>
              <div>
                <h5>Hair Oil</h5>
                <p className='text-xs'>$200</p>
              </div>
              <img className='small-prod rounded-xl' src={require('../assets/products2.jfif')}/>

            </div>
            <div className='right-prod bg-pale_blue rounded-md'>
              <div>
                <h5>Prepoo Oil</h5>
                <p className='text-xs'>$240</p>
              </div>
              <img className='small-prod rounded-xl' src={require('../assets/products2.jfif')} />
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={require('../assets/products1.jfif')} className='right-img ' />
        </div>
      </div>
      <News/>
      <BestSellers/>
    </>
  )
}

export default Home