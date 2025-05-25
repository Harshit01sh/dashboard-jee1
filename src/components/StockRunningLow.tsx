"use client"
import { Badge } from "@/components/ui/badge";

import { useEffect, useState } from "react";
import { getStockRunningLow,stockItems } from "@/lib/api";

export const StockRunningLow = () => {
  const [stockData, setStockData] = useState<stockItems[]>([]);
   const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
   useEffect(() => {
    getStockRunningLow()
      .then((data) => {
        setStockData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch stock data.");
        setLoading(false);
      });
  }, []);
  const stockItems = [
    { name: "Dolo", quantity: "10 Packet", status: "Low" },
    { name: "Paracetamol", quantity: "15 Packet", status: "Low" },
    { name: "Betadin", quantity: "15 Packet", status: "Low" },
    { name: "Vitamin-D", quantity: "10 Packet", status: "Low" }
  ];

   if (loading) return <p>Loading Stock Running Low products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-3xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Stocks Running Low</h2>
      
      <div className="space-y-4 overflow-y-auto h-[200px]">
        {stockItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">Remaining Quantity: {item.quantity}</p>
            </div>
            <Badge variant="destructive" className="bg-red-100 text-red-800">
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>

    // <div className="bg-white border border-gray-200 p-6 rounded-3xl">
    //   <h2 className="text-lg font-semibold text-gray-900 mb-6">Stocks Running Low</h2>
      
    //   <div>
    //   {stockData.map((item, index) => (
    //     <div key={index}>
    //       <p>Product: {item.product}</p>
    //       <p>Qty: {item.qty}</p>
    //     </div>
    //   ))}
    // </div>
    // </div>
  );
};
