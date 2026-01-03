import React from "react";
import Typewriter from "typewriter-effect";

/**
 * Reusable typewriter.
 * Pass strings from profile config to keep the hero unique and easy to maintain.
 */
function Type({ strings }) {
  return (
    <Typewriter
      options={{
        strings: strings && strings.length ? strings : ["Full-Stack Web Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
