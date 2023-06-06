import React, { useEffect, useState } from 'react'
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
                        Conheci a programação em meu ensino médio técnico, realizado no Instituto Federal de Santa Catarina. Lá aprendi minha primeira linguagem, C.
                        Com ela tive uma base para aprender outras linguagens como Java, Python e JavaScript, tendo algumas noções basicas de C++, C# e TypeScript.
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
