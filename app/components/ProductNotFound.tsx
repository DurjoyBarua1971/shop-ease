export const ProductNotFound: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
    <button
      onClick={onBack}
      className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Back
    </button>
    <h1 className="text-2xl font-bold">Product Not Found</h1>
  </div>
);