import { useState } from "react";

export default function PiWizard() { const [page, setPage] = useState("home");

return ( <div className="min-h-screen bg-gray-100 text-gray-800"> {/* Header */} <header className="bg-purple-600 text-white p-4 text-center text-xl font-bold"> PiWizard 🚀 </header>

{/* Navigation */}
  <nav className="flex justify-around bg-white shadow p-2">
    <button onClick={() => setPage("home")} className="px-3 py-1 rounded hover:bg-purple-100">
      Home
    </button>
    <button onClick={() => setPage("news")} className="px-3 py-1 rounded hover:bg-purple-100">
      Daily Pi News
    </button>
  </nav>

  {/* Pages */}
  <main className="p-4">
    {page === "home" && (
      <div>
        <h2 className="text-2xl font-bold mb-2">Welcome to PiWizard ✨</h2>
        <p className="mb-2">Your companion app for Pi Network updates, tools, and motivation.</p>
        <p>Use the menu above to check today’s Pi news.</p>
      </div>
    )}

    {page === "news" && (
      <div>
        <h2 className="text-2xl font-bold mb-2">🚀 Daily Pi News – Sept 13, 2025</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Pi Core Team expands merchant pilot programs worldwide.</li>
          <li>Mainnet migration continues — ensure your wallet is ready.</li>
          <li>Exchange listing rumors ongoing, but no official date yet. Stay patient ✊.</li>
        </ul>
        <p className="mt-4 italic">Come back tomorrow for the latest Pi updates!</p>
      </div>
    )}
  </main>

  {/* Footer */}
  <footer className="bg-gray-200 text-center p-3 mt-6 text-sm">
    Built with ❤️ for Pioneers | PiWizard 2025
  </footer>
</div>

); }

