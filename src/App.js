import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { routes } from 'modules/routes'
import { createStore } from 'modules/store'
import { Layout } from 'components'
import 'antd/dist/antd.css'
import './App.scss'

const { store, persistor } = createStore()

const App = () => (
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <HashRouter>
        <Layout>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Layout>
      </HashRouter>
    </Provider>
  </PersistGate>
)

export default App
