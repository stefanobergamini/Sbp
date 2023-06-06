import React from 'react'
import "./HomePage.scss"
import { motion } from 'framer-motion';
import Header from '../../Components/Header/Header';
import { fadeIn, slideIn, textVariant } from '../../Utils/motion';
import BemVindo from '../../Components/BemVindo/BemVindo';
import Sobre from '../../Components/Sobre/Sobre';
import Timeline from '../../Components/Timeline/Timeline';

export default function HomePage() {

  return (
    <div>
      <Header />
      
      <BemVindo />

      <Sobre />

      <Timeline />
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
    </div>
  )
}
