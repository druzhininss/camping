import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanelLogin from '../ AdminPanelLogin/AdminPanelLogin.jsx';

function  AdminPanel() {
  
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
