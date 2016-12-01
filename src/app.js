import React from 'react'
import keymirror from 'keymirror'

import Frame from './components/Frame'
import ActionPanel, {ACTIONS as PANEL_ACTIONS} from './components/ActionPanel'
import Panel from './components/Panel'
import Container from './components/Container'
import PriceList from './main/PriceList'
import ProductForm from './main/ProductForm'
import PrintPanel from './main/PrintPanel'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    /* ******************************** */
    let products = [
      {pk: 1, title: "Lorem", price: 100},
      {pk: 2, title: "Lorem", price: 200},
      {pk: 3, title: "Lorem", price: 300},
      {pk: 4, title: "Lorem", price: 400},
      {pk: 5, title: "Lorem", price: 500},
      {pk: 6, title: "Lorem", price: 600},
    ]
    /* ******************************** */

    this.state = {products, state: null, selectedProduct: null}
  }

  renderSideForm() {
    const {products, selectedProduct} = this.state

    switch (this.getAppState()) {
      case PANEL_ACTIONS.ADD:
        return (
          <ProductForm
            product={{}}
            onClose={() => this.setAppState()}
            headerTitle="Add product"
            onSubmit={::this.onProductSubmit}
          />)

      case PANEL_ACTIONS.EDIT:
        if (!selectedProduct) {
          setTimeout(() => this.setAppState())
        }
        return (selectedProduct &&
          <ProductForm
            product={products.find(product => product.pk === selectedProduct)}
            onClose={() => this.setAppState()}
            headerTitle="Edit product"
            onSubmit={::this.onProductSubmit}
          />)
      case PANEL_ACTIONS.PRINT:
        return (
          <PrintPanel items={products} />
        )
      case PANEL_ACTIONS.DELETE:
        break;
      default:
        return null
    }
  }

  render() {
    const {products, selectedProduct} = this.state

    return (
      <Frame>
        <ActionPanel onAction={::this.onPanelAction} />
        <Container>
          <Panel>
            <PrintPanel items={products} selectedProduct={selectedProduct} onSelectProduct={::this.onSelectProduct} />
          </Panel>
          <Panel>
            { this.renderSideForm() }
          </Panel>
        </Container>
      </Frame>
    )
  }

  onPanelAction(action) {
    this.setAppState(action)
  }

  setAppState(state=null) {
    this.setState({state})
  }

  getAppState() {
    return this.state.state
  }

  onSelectProduct(pk) {
    this.setState({selectedProduct: pk})
  }

  onProductSubmit(product) {
    console.log(product)
  }
}
