export const TopProducts = () => {
  const products = [
    { rank: "01", name: "Paracetamol", popularity: 45, color: "bg-blue-500", textColor:"text-blue-500", borderColor:"text-blue-500" },
    { rank: "02", name: "Dolo", popularity: 25, color: "bg-green-500", textColor:"text-green-500", borderColor:"text-green-500" },
    { rank: "03", name: "Asprin", popularity: 18, color: "bg-purple-500", textColor:"text-purple-500", borderColor:"text-purple-500" },
    { rank: "04", name: "Caltabs", popularity: 25, color: "bg-orange-500",textColor:"text-orange-500", borderColor:"text-orange-500" },
    { rank: "05", name: "Caltabs", popularity: 25, color: "bg-pink-500",textColor:"text-pink-500", borderColor:"text-pink-500" },

  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6">
      <div className="flex items-center justify-start gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Top Products</h2>
        <span className="text-xs text-gray-500">Past 30 Days</span>
      </div>

      <div className="space-y-2 -mt-8">
        <span className="text-xs text-gray-500 h-2">Based on order Qty</span>
        <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 pb-2">
          <span>#</span>
          <span>Name</span>
          <span>Popularity</span>
          <span className="ml-14">Sales</span>
        </div>
        
        <div className="overflow-y-auto h-[200px]">
        {products.map((product) => (
          <div key={product.rank} className="grid grid-cols-4 gap-4 items-center py-3">
            <span className="text-sm font-medium text-gray-900">{product.rank}</span>
            <span className="text-sm text-gray-900">{product.name}</span>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className={`${product.color} h-2 rounded-full`}
                  style={{ width: `${product.popularity}%` }}
                ></div>
              </div>
            </div>
            <span className={`${product.textColor} text-sm font-medium text-gray-900 border-2 w-10 rounded-md text-center ml-16`}>{product.popularity}%</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
