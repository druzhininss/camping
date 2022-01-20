import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AdminPanelLogin from '../AdminPanelLogin/AdminPanelLogin.jsx';
import { adminLogoutAC } from '../../redux/actionCreators/adminLogoutAC';
import style from './AdminPanel.module.css';

function AdminPanel() {
  const { isAdmin } = useSelector((state) => state.productsReducers);
  const dispatch = useDispatch();

  return (
    <>
      {!isAdmin
        ?
        <div>
          <AdminPanelLogin />  {/*когда будет готов isAdmin то этот див с компонетом поменять местами с кнопками */}
        </div>
        :
        <div className='order_flex'>
          <button className={style.order} ><Link to='/admin/orders'>Заказы</Link></button>
          <button className={style.order} ><Link to='/admin/products'>Товары</Link></button>
          <button><Link to='/admin/' onClick={() => dispatch(adminLogoutAC())}>Выход из админ панели</Link></button>
        </div>
      }
    </>
  );
}

export default AdminPanel;
