import React, { useState, Fragment } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.svg'
import Menu from '../../img/menu.svg'

const Navbar = (props) => {
  const [open, setOpen] = useState(false)
  const click = () => {

  }
  return (
    <Fragment>
      <header className="page-header">
        <nav>
          <img src={Logo} className="logo-dashboard" />
          <button className="toggle-m-menu" onClick={() => open ? setOpen(false) : setOpen(true)} >
            <img src={Menu} className="icon-toggle" />
          </button>
          <ul className="admin-menu">
            <li className="menu-heading">
              <h3>{localStorage.getItem("status")}</h3>
            </li>
            <li>
              <Link to={`${props.match.path}/`}>
                <svg></svg>
                <span>หน้าแรก</span>
              </Link>
            </li>
            <li>
              <Link to={`${props.match.path}/setting`}>
                <svg></svg>
                <span>บันทึกผู้ให้ทุน</span>
              </Link>
            </li>
            <li>
              <Link to="#0">
                <svg></svg>
                <span>บันทึกข่าวสาร</span>
              </Link>
            </li>
            <li>
              <Link to="#0">
                <svg></svg>
                <span>บันทึกข้อมูลนักศึกษา</span>
              </Link>
            </li >
            <li>
              <Link to="#0">
                <svg></svg>
                <span>ประกาศผู้มีสิทธิ</span>
              </Link>
            </li >
            <li>
              <Link to="#0">
                <svg></svg>
                <span>ประกาศผล</span>
              </Link>
            </li >
            <li className="menu-heading">
              <h3>ตั้งค่า</h3>
            </li>
            <li>
              <Link to="#0">
                <svg></svg>
                <span>บัญชี</span>
              </Link>
            </li >
            <li>
              <Link to="#0">
                <svg></svg>
                <span>ตั้งค่า</span>
              </Link>
            </li >
            <li>
              <Link to="/login">
                <svg></svg>
                <span>ออกจากระบบ</span>
              </Link>
            </li >
            <li>
              <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu">
                <svg aria-hidden="true"></svg>
                <span>Collapse</span>
              </button>
            </li >
          </ul >
        </nav >
      </header >
      <header className={open ? "slide-bar":""} onClick={()=> setOpen(false)}>
            <Link className="link-item" to={`${props.match.path}/`}> หน้าแรก</Link>
            <Link className="link-item" to={`${props.match.path}/setting`}>บันทึกผู้ให้ทุน</Link>
            <Link className="link-item">บันทึกข่าวสาร</Link>
            <Link className="link-item">บันทึกข้อมูลนักศึกษา</Link>
            <Link className="link-item">ประกาศผู้มีสิทธิ</Link>
            <Link className="link-item">ประกาศผล</Link>
            <Link className="link-item" to="/login">ออกจากระบบ</Link>
      </header>
    </Fragment>
  )
}


export default Navbar