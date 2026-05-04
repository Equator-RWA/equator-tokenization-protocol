export default function AdminDashboard() {
  return (
    <main className="min-h-screen p-12 max-w-5xl mx-auto">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-3xl font-bold">Equator Tokenization Protocol</h1>
        <p className="text-gray-500 mt-2">SEP-8 Issuer Dashboard (V1 Scaffold)</p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Pending Authorizations</h2>
        
        {/* GOOD FIRST ISSUE: Fetch real pending requests from a database and allow the Issuer to Approve/Reject them via Freighter */}
        <div className="border rounded divide-y">
          <div className="p-4 flex justify-between items-center bg-gray-50 text-sm font-medium">
            <span>Stellar Address</span>
            <span>KYC Status</span>
            <span>Action</span>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="font-mono text-sm text-gray-600">GD3...X9P2</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending Webhook</span>
            <button disabled className="bg-blue-600 text-white px-3 py-1 rounded text-sm opacity-50 cursor-not-allowed">
              Authorize On-Chain
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}