import React, { useEffect } from 'react'
import styles from "./HomePage.module.scss"
import araba from "../../assets/araba.png"
import {BsChevronDoubleDown} from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function HomePage() {
    useEffect(() => {
        AOS.init();
      
      }, [])
  return (
    <div  data-aos="zoom-in"  className={styles.homePage}>
        <div className={styles.leftContents}>
        <div className={styles.text}></div>
<p className={styles.textRubicon}>Rubicon</p>
<p className={styles.textComment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
<button className={styles.button}>VIEW MY PROJECT</button>
    </div>
    <div  data-aos="zoom-in" className={styles.rightContents}>
<img className={styles.car} src={araba} ></img>
<div className={styles.elipse}></div>


    </div>

    <p   data-aos="fade-down"

     data-aos-duration="3000" className={styles.downIcon}><BsChevronDoubleDown size={70}></BsChevronDoubleDown></p>
        </div>

  )
}

export default HomePage