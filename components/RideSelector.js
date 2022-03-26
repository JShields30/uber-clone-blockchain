import React from 'react'
import uberx  from '../../assets/images/uberx.png'
import uberBlack from '../../assets/images/uberBlack.png'
import uberBlackSuv from '../../assets/images/uberBlackSuv.png'
import uberSelect from '../../assets/images/uberSelect.png'
import uberXL from '../../assets/images/uberXL.png'

const style = {}

const carList = []

const RideSelector = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.title}></div>
        <div className={style.carList}></div>
    </div>
  )
}

export default RideSelector