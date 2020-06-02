import React from 'react';
import Menu from './Menu';

function Contact() {
  return (
    <div>
      <Menu></Menu>
      <h2>Contacto</h2>
      <p>
        Si te apete que charlemos más sobre posibles colaboraciones, puedes contactarme al correo{' '}
        <a href='mailto:eva.lopez.merino@gmail.com' target='_blank' rel='noopener noreferrer'>
          eva.lopez.merino@gmail.com
        </a>
        o en cualquiera de mis redes sociales:
      </p>
      <nav>
        <a href='https://www.linkedin.com/in/evalopezmerino/' target='_blank' rel='noopener noreferrer'>
          Linkedin
        </a>
        <a href='https://twitter.com/evalopezmerino2' target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>
        <a href='https://github.com/evalopezm' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </nav>
    </div>
  );
}

export default Contact;
