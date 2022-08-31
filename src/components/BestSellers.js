import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function BestSellers() {
  return (
    <div className='best-sellers-container'>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:"column"
        }}>
            <h3 className='text-xl font-bold'>Best Sellers</h3>
            <p className='body-text'> You can change your preferences at any time by returning to this site or visit our privacy policy.</p>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <div className='big-prod mt-32 w-64 bg-pale_blue h-64 '>
                {/* <div className=' w-96 bg-pale_blue h-96' /> */}
                <div style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column',}}>
                    <div style={{height:'30vh'}}>
                        <FontAwesomeIcon icon={faHeart} color="#152910" />
                    </div>
                    <div style={{display:'flex',flex:'0.5', justifyContent:'space-between',flexDirection:'row'}}>
                        <h4>Price</h4>
                        <button className='bg-primary text-white text-xs pt-2 pb-2 pr-4 pl-4 m-2 right-btn'>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div style={{position:'relative', bottom:'300px',left:'50px',}}>
                    <img src={require('../assets/products5.png')} style={{position:'absolute'}} alt='product'/>
                </div>
            </div>
            <div className='big-prod mt-32 w-64 bg-pale_blue h-64 '>
                {/* <div className=' w-96 bg-pale_blue h-96' /> */}
                <div>
                    <FontAwesomeIcon icon={faHeart} color="#152910" />
                    <h4>Price</h4>
                </div>
                <div style={{position:'relative', bottom:'100px',left:'50px'}}>
                    {/* <FontAwesomeIcon icon={faHeart} color="#152910" /> */}
                    <img src={require('../assets/products5.png')} style={{position:'absolute'}} />
                </div>
            </div>
            <div className='big-prod mt-32 w-64 bg-pale_blue h-64 '>
                {/* <div className=' w-96 bg-pale_blue h-96' /> */}
                <div style={{position:'relative', bottom:'100px',left:'50px'}}>
                    {/* <FontAwesomeIcon icon={faHeart} color="#152910" /> */}
                    <img src={require('../assets/products5.png')} style={{position:'absolute'}} />
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default BestSellers