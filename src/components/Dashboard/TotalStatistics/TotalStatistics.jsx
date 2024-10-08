
export default function TotalStatistics() {
  return (
    <div className="my-8  gap-4 flex flex-col w-full md:w-1/2">
    <div className="rounded-lg bg-white p-4 text-center shadow-sm   hover:shadow-xl transition-all duration-300">
      <div className="text-2xl font-bold">569</div>
      <div className="text-sm text-gray-500">Total Concierge</div>
    </div>
    <div className="rounded-lg bg-white p-4 text-center shadow-sm  hover:shadow-xl transition-all duration-300">
      <div className="text-2xl font-bold">2,342</div>
      <div className="text-sm text-gray-500">Total Customer</div>
    </div>
    <div className="rounded-lg bg-white p-4 text-center shadow-sm  hover:shadow-xl transition-all duration-300">
      <div className="text-2xl font-bold">992</div>
      <div className="text-sm text-gray-500">Total Room</div>
    </div>
    <div className="rounded-lg bg-white p-4 text-center shadow-sm  hover:shadow-xl transition-all duration-300">
      <div className="text-2xl font-bold">76k</div>
      <div className="text-sm text-gray-500">Total Transaction</div>
    </div>
  </div>
  )
}
