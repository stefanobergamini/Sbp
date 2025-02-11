import React from 'react'
import { motion } from 'framer-motion';
import photo from '../../Assets/imgs/photo.jpg'
import { fadeIn, textVariant } from '../../Utils/motion';

export default function BemVindo() {
  return (
    <section id="home" className="section">
        <motion.div
          initial="hidden"
          whileInView="show"
          className="container">
          <div className="content-wrapper">
            <motion.div

              variants={textVariant()} className="content">
              <h2>Bem vindo ao meu <strong>Portfólio</strong></h2>
              <p>
                <strong>Bem-vindo(a) ao meu site desenvolvido com React!</strong> <br />
                Aqui você encontrará um espaço digital criado por mim, dedicado a oferecer soluções inovadoras e eficientes para o mundo da web.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} variants={fadeIn('', '', 0, 1)} className="content">
              <img src={photo} alt='foto' />
            </motion.div>
          </div>
        </motion.div>

        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
  )
}
