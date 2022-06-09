import React from "react"

export const Card = ({item}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.status}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    // <div>{item.name}</div>
  )
}