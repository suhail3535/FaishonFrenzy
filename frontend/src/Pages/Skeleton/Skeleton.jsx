import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Skeletonbox = () => {
    return (
        <div>
            <Skeleton height={220} /> 
            <h1>
                <Skeleton height={20} />
            </h1> 
            <h3>
                <Skeleton height={20} />
            </h3> 
        </div>
    )
}

export default Skeletonbox
