import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className="my-3">
      <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://images.livemint.com/img/2022/08/23/600x338/INFINIX_1661234111692_1661234129144_1661234129144.png":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span class="badge bg-secondary">{source}</span></h5>
    <p className="card-text">{description}</p>  
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
   <a href={newsurl}target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItem

