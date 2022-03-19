import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

const style = {
    wrapper: `flex-1 h-full w-full`
}

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        
        })

    }, [])


  return <div className={style.wrapper}>Map</div>
}

export default Map