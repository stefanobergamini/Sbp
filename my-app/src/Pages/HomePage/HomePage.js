import React from 'react'
import "./HomePage.scss"
import Header from '../../Components/Header/Header';

export default function HomePage() {

  return (
    <div>
      <Header />
      <section id="home" className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content">
              <h2>Bem vindo ao meu <strong>Portfólio</strong></h2>
              <p>
                Aqui é um site onde realizei por conta própria para treinar e aprender ainda mais sobre React,
                tendo a liberdade de realizar da maneira que desejo, apesar de não ser especialista em design.
              </p>
            </div>
            <div className="content">
              <h2>Bem vindo ao meu <strong>Portfólio</strong></h2>
              <p>
                Aqui é um site onde realizei por conta própria para treinar e aprender ainda mais sobre React,
                tendo a liberdade de realizar da maneira que desejo, apesar de não ser especialista em design.
              </p>
            </div>
          </div>
        </div>

        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>

      <section id="about" className="section">

        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
        <div className="container">
          <div className="content-wrapper text-center">
            <div className="content">
              <h2>Sobre mim</h2>
              <p>
                Conheci a programação em meu ensino médio técnico, realizado no Instituto Federal de Santa Catarina. Lá aprendi minha primeira linguagem, C.
                Com ela tive uma base para aprender outras linguagens como Java, Python e JavaScript, tendo algumas noções basicas de C++, C# e TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="content-wrapper text-center">
            <div className="content">
              <h2>Hello, I'm The <br />Work Section</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore odit ipsam expedita dolorem.<br />
                Distinctio, aliquid minima voluptatem saepe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
