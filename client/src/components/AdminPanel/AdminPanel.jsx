import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanelLogin from '../AdminPanelLogin/AdminPanelLogin.jsx';
import style from './AdminPanel.module.css';

function AdminPanel() {

  return (
    <div>
      <AdminPanelLogin />
      <div className='order_flex'>
        <button className={style.order} ><Link to='/admin/order'>Заказы</Link></button>
        <button className={style.order} ><Link c to='/admin/products'>Товары</Link></button>
      </div>
    </div>
  );
}

export default AdminPanel;
