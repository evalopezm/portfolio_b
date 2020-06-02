import React from 'react';
import Menu from './Menu';

function Cv() {
  return (
    <div>
      <Menu></Menu>
      <h2>Mi CV / Mi historia</h2>
      <p>Soy una recién estrenada programadora front-end, pero tengo muchos años de experiencia en comunicación a mis espaldas. He trabajado como cámara, realizadora, coordinadora de producción y directora de comunicación entre otros. He creado mi propia empresa y he estado trabajando y viviendo 2 años en Inglaterra.</p>

      <p>Siempre me ha llamado la atención el mundo de la tecnología y en 2019 he tenido la oportunidad de llevar la comunicación en una start-up de Inteligencia Artificial desde cero (plan de comunicación, elevator pitch, artículos para Medium, mantenimiento y mejora de la web y gestión de sus RRSS). Esta oportunidad me ha permitido aprender mucho (entornos tecnológicos, trabajo en remoto, agile, github, trello…) pero sobre todo me ha descubierto las posibilidades que ofrece la tecnología web, sin más limitaciones que las que tu te pongas y en el que puedes y debes estar siempre evolucionando.</p>

      <p>Gracias a Adalab he aprendido a materializar esas ideas y a dar forma a cualquier proyecto que se me ocurra.</p>
      <button>Download CV</button>
    </div>
  );
}

export default Cv;
