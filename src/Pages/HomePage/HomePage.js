import React from 'react'
import "./HomePage.scss"
import Header from '../../Components/Header/Header';
import BemVindo from '../../Components/BemVindo/BemVindo';
import Sobre from '../../Components/Sobre/Sobre';
import Timeline from '../../Components/Timeline/Timeline';
import Footer from '../../Components/Footer/Footer';

export default function HomePage() {

  return (
    <>
      <Header />
      
      <BemVindo />

      <Sobre />

      <Timeline />

      <Footer />
      
      {/* <section id="work" className="section">
        <div className="container">
          <div className="content-wrapper text-center">
            <motion.div variants={textVariant()} className="content">
              <h2>Hello, I'm The <br />Work Section</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore odit ipsam expedita dolorem.<br />
                Distinctio, aliquid minima voluptatem saepe.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
    </>
  )
}
