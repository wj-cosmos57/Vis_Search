import React, { useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Parameter from './pages/Parameter';
import Query from './pages/Query';
import Resultpage from './pages/Resultpage';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Viewer from './pages/Viewer'

function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/urlparameter" element={<Parameter />}/>
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/querystring" element={<Query />} />

        <Route path="/result" element={<Resultpage />} />

        <Route path="/search" element={<Search />} />
        <Route path="/searchResult" element={<Viewer />} />
      </Routes>
    );
}

export default App;