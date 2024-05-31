import React from 'react'
import GambardetailprodukdiskonPC from './GambardetailprodukdiskonPC'
import GambardetailprodukdiskonMobile from './GambardetailprodukdiskonMobile'

function Gambardetailprodukfs() {
  return (
    <div>   
      <div className='d-none d-md-block'>
        <GambardetailprodukdiskonPC />
      </div>    

      <div className='d-block d-lg-none'>
      <GambardetailprodukdiskonMobile />
        </div>  
        </div>
  )
}

export default Gambardetailprodukfs