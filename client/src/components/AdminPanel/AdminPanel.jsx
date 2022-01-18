import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actionCreators/adminAC';
import AdminPanelLogin from '../AdminPanelLogin/AdminPanelLogin.jsx';
import style from './AdminPanel.module.css';

function AdminPanel() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

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
