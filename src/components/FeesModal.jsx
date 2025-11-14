export default function FeesModal({ isOpen, onClose, fees }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Course-wise Fees</h2>

        <ul className="space-y-3 text-gray-700">
          {Object.entries(fees).map(([course, amount]) => (
            <li key={course}>
              <strong>{course}:</strong> {amount}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
