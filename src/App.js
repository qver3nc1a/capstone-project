/* global fetchAPI */
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Layout } from 'antd';

import Main from './pages/Main/Main';
import Reservation from './pages/Reservation/Reservation';
import Confirmation from './pages/Confirmation/Confirmation';

const { Content } = Layout;

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'update') {
    const date = new Date(action.date);
    return fetchAPI(date);
  }
  return state;
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Router>
      <Layout>
        <Content>
          <Routes>
            <Route
              path="/"
              element={<Main />}
            />
            <Route
              path='/reservation'
              element={<Reservation dispatch={dispatch} availableTimes={availableTimes} />}
            />
            <Route
              path='/confirmation'
              element={<Confirmation />}
            />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;