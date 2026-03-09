'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">

        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">À propos de moi</h1>
        </AnimatedText>

        <div className="space-y-8">

          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Je m'appelle <strong>Yasmine BEN HAJ SALAH</strong>, ingénieure en électronique embarquée 
                et actuellement en formation <strong>Expert en Informatique et Systèmes d’Information (Data)</strong> 
                à <strong>SUPINFO Paris</strong>. 
                Mon parcours se situe à l’intersection des <strong>systèmes embarqués</strong>, 
                du <strong>traitement de données</strong> et des <strong>systèmes informatiques</strong>.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                J’ai développé une solide expérience dans la conception de systèmes électroniques : 
                développement sur microcontrôleurs (STM32, Arduino, ESP32), conception de cartes électroniques 
                (PCB), intégration de capteurs et traitement du signal.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Compétences principales</h2>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Mes projets m’ont permis de travailler sur l’acquisition et l’analyse de données issues de capteurs, 
                la <strong>vision par ordinateur</strong> et l’optimisation d’algorithmes d’<strong>intelligence artificielle</strong>.
                J’utilise notamment des outils comme <strong>Python, TensorFlow, PyTorch et OpenCV</strong> 
                pour développer des solutions d’apprentissage automatique.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                En parallèle, je possède une solide expérience en <strong>systèmes embarqués</strong> 
                avec le développement en <strong>C/C++</strong>, la communication <strong>UART, SPI, I2C</strong> 
                et l’intégration de capteurs dans des systèmes contraints et temps réel.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Objectifs professionnels</h2>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Aujourd’hui, je souhaite évoluer vers des projets combinant 
                <strong>systèmes intelligents</strong>, <strong>infrastructures informatiques</strong> 
                et <strong>traitement de données</strong>, où je peux mettre à profit ma double compétence 
                <strong>hardware & software</strong> pour concevoir des systèmes robustes et performants.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Curieuse, rigoureuse et passionnée par les technologies avancées, 
                je recherche une <strong>alternance</strong> dans les domaines des 
                <strong>systèmes informatiques</strong>, des <strong>systèmes embarqués</strong> 
                ou de la <strong>data appliquée</strong>.
              </p>
            </div>
          </AnimatedText>

        </div>
      </div>
    </section>
  )
}