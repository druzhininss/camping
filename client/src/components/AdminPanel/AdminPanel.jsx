import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminPanelLogin from '../AdminPanelLogin/AdminPanelLogin.jsx';
import style from './AdminPanel.module.css';

function AdminPanel() {
  const { chechAdmin } = useSelector((state) => state.productsReducers);
  
  return (
    <>
      {chechAdmin ?
        <div>
          <AdminPanelLogin />  {/*когда будет готов isAdmin то этот див с компонетом поменять местами с кнопками */}
        </div> :
        <div className='order_flex'>
          <button className={style.order} ><Link to='/admin/order'>Заказы</Link></button>
          <button className={style.order} ><Link c to='/admin/products'>Товары</Link></button>
        </div>
      }
    </>
  );
}

export default AdminPanel;
