"use client"

import DATA from '../data/data.json';

export default function Home() {


  return (
    <div className="bg-black text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Logo centrado */}
      <div className="row-start-1 flex justify-center">
        <picture>

        <img
          src="https://www.duoc.cl/wp-content/themes/wordpress-duoc-cl/images/logo-duoc.svg" // Ruta de tu imagen de logo
          alt="Logo"
          width={150} // Ancho del logo
          height={150} // Altura del logo
          />
        </picture>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        {DATA.map((item) => (
            <div key={item.Id} className="w-full p-4 bg-gray-800 rounded-lg text-left">
              <h2 className="text-2xl font-bold">{item.oferta}</h2>
              <p><strong>Empresa:</strong> {item.RUT} - {item.Empresa}</p>
              <p><strong>Rubro:</strong> {item.Rubro}</p>
              <p><strong>Área de trabajo:</strong> {item.Área_de_trabajo}</p>
              <p><strong>Tipo de cargo:</strong> {item.Tipo_de_cargo}</p>
              <p><strong>Modalidad:</strong> {item.Modalidad}</p>
              <p><strong>Región:</strong> {item.Region}</p>
              <p><strong>Sueldo:</strong> {item.Sueldo === 0 ? "No especificado" : `$${item.Sueldo}`}</p>
              <p><strong>Link de la oferta:</strong> <a href={item["#_republicaciones"]} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ver oferta</a></p>
            </div>
          ))
         }
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Duoc UC 2024
      </footer>
    </div>
  );
}
