import React from "react";
import Particles from "react-tsparticles";
import { profile } from "../profile";

/**
 * Particles are optional.
 * For a cleaner, more premium look (and to avoid template fingerprints),
 * we keep them OFF by default.
 */
function Particle() {
  if (!profile.showParticles) return null;

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 40,
            density: { enable: true, value_area: 1200 },
          },
          line_linked: { enable: false },
          move: { enable: true, speed: 0.35, out_mode: "out" },
          size: { value: 2, random: true, anim: { enable: false } },
          opacity: { value: 0.25, random: true },
        },
        interactivity: {
          events: { onclick: { enable: false }, onhover: { enable: false } },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
