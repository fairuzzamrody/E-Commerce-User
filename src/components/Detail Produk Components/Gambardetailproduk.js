import React from 'react'
import GambardetailprodukPC from './GambardetailprodukPC'
import Gambardetailprodukmobile from './Gambardetailprodukmobile'

function Gambardetailproduk() {
  return (
    <div>
      <div className='d-none d-md-block'>
      <GambardetailprodukPC />
        </div>    

        <div className='d-block d-lg-none'>
        <Gambardetailprodukmobile />
          </div>  
    </div>
  )
}

export default Gambardetailproduk