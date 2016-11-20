import React from 'react'


export default function({children}) {
  return (
    <div className="row">
      <div className="col-md-8">
        {children[0]}
      </div>

      <div className="col-md-4">
        {children[1]}
      </div>
    </div>
  )
}
