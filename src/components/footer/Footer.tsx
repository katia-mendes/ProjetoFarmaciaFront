import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import React from 'react';

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-red-500 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Farmácia | Copyright: {new Date().getFullYear()}</p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={48} weight="bold" color="blue" />
            <InstagramLogo size={48} weight="bold" color="pink" />
            <FacebookLogo size={48} weight="bold" color="blue" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;