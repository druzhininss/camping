import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actionCreators/adminAC';
import AdminPanelLogin from '../ AdminPanelLogin/AdminPanelLogin.jsx';

function  AdminPanel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  
  return (
    <div>
      <AdminPanelLogin />
      <Link to='/admin/order'>Заказы</Link>
      <hr></hr>
      <Link c to='/admin/products'>Товары</Link>
    </div>
  );
}

export default  AdminPanel;
