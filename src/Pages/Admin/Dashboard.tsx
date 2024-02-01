// Import necessary React components and libraries
import React, { useState } from 'react';
import AddDishForm from './AddDishForm';
import ManageCategories from './ManageCategories';
import ViewOrders from './ViewOrders';
import "./Admin.css"

// Main Dashboard component
const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('addDish');

  return (
    <div>
      {/* Navigation to switch between tabs */}
      <nav className="">
        <ul>
          <li onClick={() => setSelectedTab('addDish')}>Add Dish</li>
          <li onClick={() => setSelectedTab('manageCategories')}>Manage Categories</li>
          <li onClick={() => setSelectedTab('viewOrders')}>View Orders</li>
        </ul>
      </nav>

      {/* Render different components based on the selected tab */}
      {selectedTab === 'addDish' && <AddDishForm />}
      {selectedTab === 'manageCategories' && <ManageCategories />}
      {selectedTab === 'viewOrders' && <ViewOrders />}
    </div>
  );
};

export default Dashboard;
