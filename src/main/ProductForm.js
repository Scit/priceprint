import React from 'react'

const EMPTY_PRODUCT = {title: "", price: ""}


export default function({product, onClose}) {
  const {title, price} = product || EMPTY_PRODUCT

 return (
   <div className="panel panel-default">
     <div className="panel-body">
       <h2>Title</h2>
       <span className="close" onClick={onClose}>x</span>

       <form>
         <div className="form-group">
           <label>Title</label>
           <input type="text" className="form-control" placeholder="Title" value={title} />
         </div>

         <div className="form-group">
           <label>Price</label>
           <input type="text" className="form-control" placeholder="Price" value={price} />
         </div>

         <div className="form-group">
           <label>Category</label>
           <input type="text" className="form-control" placeholder="Category" />
         </div>
       </form>

       <div className="btn-toolbar action-panel">
         <div className="btn-group">
           <button className="btn btn-default btn-primary">Add</button>
         </div>
         <div className="btn-group">
           <button className="btn btn-default" onClick={onClose}>Cancel</button>
         </div>
       </div>

     </div>
   </div>
 )
}

function onChangeAttr(event) {

}
