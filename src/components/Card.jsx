import React from 'react'

const Card = ({ item }) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src={item.image}
                    alt="Shoes" className='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-nowrap overflow-hidden text-ellipsis ">{item.name}</h2>
                <div>{item.category}</div>
                <p>{item.price}</p>
                <div>{item.rating}</div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card