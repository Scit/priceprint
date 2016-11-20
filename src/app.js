import React from 'react'
import Frame from './components/Frame'
import ActionPanel from './components/ActionPanel'
import Panel from './components/Panel'
import Container from './components/Container'
import PriceList from './main/PriceList'
import ProductForm from './main/ProductForm'

export default class App extends React.Component {
  render() {
    return (
      <Frame>
        <ActionPanel />
        <Container>
          <Panel>
            <PriceList />
          </Panel>
          <Panel>
            <ProductForm />
          </Panel>
        </Container>
      </Frame>
    )
  }
}
