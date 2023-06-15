import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Progress from './Progress'
import { slideIn } from '../../Utils/motion';

export default function Sobre() {
    const [showTechs, setShowtechs] = useState(false);

    console.log(showTechs)

    return (
        <section id="about" className="section">
            <motion.div
                initial="hidden"
                whileInView="show"
                className="container">
                <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="content">
                    <h2>Sobre mim</h2>
                    <p>
                    Eu sou um programador front-end com formação técnica em eletrônica pelo IFSC 
                    e graduação em ciências da computação pela UFSC. 
                    Ao longo da minha jornada acadêmica e profissional, 
                    desenvolvi habilidades sólidas na criação de interfaces de usuário interativas e responsivas, 
                    utilizando as mais recentes tecnologias front-end, como HTML, CSS e JavaScript.
                    <br />Também tenho experiências na área de back-end, tendo familiaridade com Python, Java, C, C# e Node.
                    </p>
                </motion.div>
                
                <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="content">
                    {!showTechs ? <button onClick={() => setShowtechs(true)}>Tecnologias Aprendidas</button> : <Progress />}
                </motion.div>
            </motion.div>




            <div className='air air1'></div>
            <div className='air air2'></div>
            <div className='air air3'></div>
            <div className='air air4'></div>
        </section>
    )
}
