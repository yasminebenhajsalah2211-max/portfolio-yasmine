'use client'

import AnimatedText from "../common/AnimatedText"

export default function Engagement() {
  return (
    <section id="engagement" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Engagement & Vie associative
          </h1>
        </AnimatedText>

        <AnimatedText>
          <div className="space-y-6">

            <div className="p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold">
                Soutien scolaire – Acadomia
              </h2>

              <p className="text-foreground/80 mt-2">
                Accompagnement d’élèves en mathématiques et physique-chimie.
                Développement de compétences pédagogiques et de communication.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10">
              <h2 className="text-xl font-semibold">
                Projets étudiants en électronique
              </h2>

              <p className="text-foreground/80 mt-2">
                Participation à des projets académiques autour de
                l’électronique embarquée, des capteurs et des systèmes IoT.
              </p>
            </div>

          </div>
        </AnimatedText>

      </div>
    </section>
  )
}