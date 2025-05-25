"use client";

import { MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getDistProductInfo, DistributorProduct } from "@/lib/api";

export const TopDistributors = () => {
   const [distProducts, setDistProducts] = useState<DistributorProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDistProductInfo()
      .then((data) => {
        setDistProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch distributor products.");
        setLoading(false);
      });
  }, []);

 

   if (loading) return <p>Loading distributor products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <Card className="rounded-3xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Top 10 Distributors</CardTitle>
              <p className="text-sm text-gray-500">Based on order Qty</p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress bar */}
          <div className="w-full mt-4 h-4 bg-gray-200 rounded-full overflow-hidden flex">
            {distProducts.map((dist, idx) => (
              <div
                key={idx}
                className={`${dist.color}`}
                style={{ width: `${dist.percentage}%` }}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent className="h-[510px] overflow-y-auto">
          <div className="space-y-3">
            {distProducts.map((distributor, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                  {distributor.name.charAt(0)}
                </div>
                <div className={`w-2 h-2 rounded-full ${distributor.color}`} />
                <span className="text-sm flex-1">{distributor.name}</span>
                <span className="text-sm font-medium">{distributor.percentage}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
