export const MetricsPanel = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(metrics).map(([key, { value, change }]) => (
        <div key={key} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 font-medium capitalize">{key}</h3>
          <div className="flex items-end mt-2">
            <p className="text-3xl font-bold">{value}</p>
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs ${
                change.startsWith('+')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {change} from last month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};