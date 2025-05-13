import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './List.css';
import { assets, url } from '../../assets/assets';  // ← import url here

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch food list.");
      }
    } catch (error) {
      toast.error("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        fetchList();
        toast.success(response.data.message);
      } else {
        toast.error("Failed to remove food item.");
      }
    } catch (error) {
      toast.error("Error while removing the item.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length === 0
          ? <div>No food items available.</div>
          : list.map((item, idx) => (
            <div key={idx} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>X</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default List;
