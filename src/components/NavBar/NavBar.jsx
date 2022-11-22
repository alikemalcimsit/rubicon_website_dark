import React from 'react'
import logo from "../../assets/logo.png"
import styles from "./NavBar.module.scss"
function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarItems}>
    <img src={logo} className={styles.logo}></img>

    <ul className={styles.navbarButtons}>
       <li><a  href='#' className={styles.active}>Home</a></li>
       <li><a  href='#'>About</a></li>
       <li><a  href='#'>Projects</a></li>
       <li><a  href='#'>Members</a></li>
       <li><a href='#'>Alora</a></li>
    </ul>
</div>
      </div>



  )
}

export default NavBar