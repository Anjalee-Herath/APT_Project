import React from 'react'
import Sidebar from '../../layouts/Sidebar'
import ProductOverViewChart from '../../components/charts/PropertyChart'
import Userchart from '../../components/charts/Userchart'
import "../../App.css";
import "../../Styles/Property.css";

const Dashboard = () => {
  return (
    <Sidebar>
      <div className='container'>
        <nav className="navbar mt-3 py-1 mb-3 rounded">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <span className="navbar-brand mb-0 h1 text-white">
            Dashboard Section
            </span>
          </div>
        </nav>
        <div className='Property-Main-Section px-2 py-3'>
        <div className='Property-Main-Section mb-5'><ProductOverViewChart /></div>
        <div className='Property-Main-Section'><Userchart/></div>
        </div>
        
      </div>

    </Sidebar>
  )
}

export default Dashboard