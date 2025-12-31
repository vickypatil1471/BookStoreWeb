import React from 'react'

function Cards({item}) {
    
  return (
    <>
        <div className='p-2'>
          <div className="card bg-base-100 w-full shadow-sm h-full hover:scale-105  duration-210">
  <figure className='bg-base-200'>
     <img
      src={item.image}
      alt="Card"
      className="w-full h-100 object-contain"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline ">RS.{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-400 hover:text-white ">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards