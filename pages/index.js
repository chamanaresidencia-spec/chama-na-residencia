import '../styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-grafite text-white w-full m-0 p-0">
      <header className="border-b border-gray-800 p-8">
        <h1 className="text-4xl font-black tracking-tighter text-ciano-tech">
          CHAMA NA RESIDÊNCIA
        </h1>
      </header>
      <main className="p-8">
        <div className="max-w-2xl">
          <h2 className="text-xl text-gray-300 mb-6">Bem-vindo, Doutor.</h2>
          <button className="w-full bg-ciano-tech text-black font-bold py-4 hover:opacity-90 transition">
            INICIAR REVISÃO DE DTG
          </button>
        </div>
      </main>
    </div>
  );
}
