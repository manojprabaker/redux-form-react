import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Form from './Form/Form'
import List from './List/List'
import { Provider } from 'react-redux';
import { store } from './Store/Store';
const Router = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/list" element={<List/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default Router