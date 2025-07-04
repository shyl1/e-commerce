export default function SkeletonLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 animate-pulse bg-white">
      <div className="w-48 h-6 bg-gray-300 rounded"></div>
      <div className="w-72 h-6 bg-gray-300 rounded"></div>
      <div className="w-64 h-6 bg-gray-300 rounded"></div>
      <div className="flex space-x-4">
        <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
        <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
        <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}
