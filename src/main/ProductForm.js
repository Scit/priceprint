import React from 'react'

const EMPTY_PRODUCT = {title: "", price: ""}


export default class extends React.Component {
  constructor(props) {
    super(props)
    const {product} = props
    this.state = {product: {...product} || EMPTY_PRODUCT}
  }

  render() {
    const {title, price} = this.state.product
    const {product, onClose, headerTitle} = this.props

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h2>{headerTitle}</h2>
          <span className="close" onClick={onClose}>x</span>

          <form>
            <div className="form-group">
              <label>Title</label>
              <input name="title" type="text" className="form-control" placeholder="Title" value={title} onChange={::this.onChangeAttr} />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input name="price" type="text" className="form-control" placeholder="Price" value={price} onChange={::this.onChangeAttr} />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input type="text" className="form-control" placeholder="Category" />
            </div>
          </form>

          <div className="btn-toolbar action-panel">
            <div className="btn-group">
              <button className="btn btn-default btn-primary" onClick={::this.onSubmit}>Ok</button>
            </div>
            <div className="btn-group">
              <button className="btn btn-default" onClick={onClose}>Cancel</button>
            </div>
          </div>

        </div>
      </div>
    )
  }

  onChangeAttr(e) {
    const {name, value} = e.target
    const {product} = this.state
    this.setState({product: {...product, [name]: value}})
  }

  onSubmit() {
    const {onSubmit} = this.props
    const {product} = this.state
    onSubmit(product)
  }
}
