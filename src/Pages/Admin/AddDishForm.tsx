import React, { useState } from 'react';
// import "./Admin.css"

const AddDishForm = () => {
  const [dishName, setDishName] = useState('');
  const [category, setCategory] = useState('');

  const handleAddDish = () => {
    // Implement logic to add the dish (e.g., send a request to the server)
    console.log(`Adding dish: ${dishName} in category: ${category}`);
  };

  return (
    <div>
      <h2>Add Dish</h2>
      <form onSubmit={handleAddDish}>
        <label>
          Dish Name:
          <input type="text" value={dishName} onChange={(e) => setDishName(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};

export default AddDishForm;
