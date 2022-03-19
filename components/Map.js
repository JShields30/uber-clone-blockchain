import React from 'react'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

const style = {
    wrapper: `flex-1 h-full w-full`
}

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
        })

    }, [])


  return <div className={style.wrapper}>Map</div>
}

export default Map