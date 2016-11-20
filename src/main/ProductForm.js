import React from 'react'

export default function(props) {
 return (
   <form>
   <div className="form-group">
     <label>Title</label>
       <input type="text" className="form-control" placeholder="Title" />
     </div>

     <div className="form-group">
       <label>Price</label>
       <input type="text" className="form-control" placeholder="Price" />
     </div>

     <div className="form-group">
       <label>Category</label>
       <input type="text" className="form-control" placeholder="Category" />
     </div>
    </form>
 )
}
