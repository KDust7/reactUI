import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import $ from 'jquery'
import { Button } from "@/components/ui/button";
$(function() {
  $("#operaUserStyle").remove();
  //override any web modding extensions they may have (specifically opera)
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
