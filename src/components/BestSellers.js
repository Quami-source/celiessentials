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
        <div className='big-prod bg-pale_blue'>
            <div>
                <FontAwesomeIcon icon={faHeart} color="#152910" />
                <img src={require('../assets/products5.png')} style={{position:'absolute'}} />
            </div>
        </div>

    </div>
  )
}

export default BestSellers