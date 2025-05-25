// src/lib/api.ts

import axios from "axios";

export interface stockItems {
  name: string;
  quantity: number;
  status?: string;
}

export interface DistributorProduct {
  id: number;
  name: string;
  percentage: number;
  color: string;
}

const API_BASE = "process.env.NEXT_PUBLIC_API_BASE";
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const getStockRunningLow = async (): Promise<stockItems[]> => {
  try {
    const res = await axios.get(`${API_BASE}/stock-runningLow-test`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    // Api not works if print the error use below command
    // console.error("Error fetching stock running low:", error);
    return [
     { name: "Dolo", quantity: 10, status: "Low" },
      { name: "Paracetamol", quantity:15, status: "Low" },
      { name: "Betadin", quantity: 5, status: "Low" },
      { name: "Vitamin-D", quantity: 8, status: "Low" },
    ];
  }
};

export const getDistProductInfo = async (): Promise<DistributorProduct[]> => {
  try {
    const res = await axios.get(`${API_BASE}/distProductInfo`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    // Api not works if print the error use below command
    // console.error("Error fetching distributor products:", error);
    return [
      { id: 1, name: "Agarwal Pharma", percentage: 20, color: "bg-blue-500" },
      { id: 2, name: "Jyoty Pharma", percentage: 10, color: "bg-green-500" },
      { id: 3, name: "Rama Dealers", percentage: 5, color: "bg-orange-500" },
      { id: 4, name: "Shyam Dealers", percentage: 6, color: "bg-pink-500" },
      { id: 5, name: "Agarwal Pharma", percentage: 4, color: "bg-yellow-500" },
      { id: 6, name: "Jyoty Pharma", percentage: 2, color: "bg-black-500" },
      { id: 7, name: "Rama", percentage: 6, color: "bg-gray-500" },
      { id: 8, name: "Shyam", percentage: 7, color: "bg-purple-500" },
      { id: 9, name: "Agarwal Dealers", percentage: 8, color: "bg-green-900" },
      { id: 10, name: "Jyoty Dealers", percentage: 12, color: "bg-purle-200" },
      { id: 11, name: "Rama Pharma", percentage: 9, color: "bg-green-500" },
      { id: 12, name: "Shyam Pharma", percentage: 11, color: "bg-green-500" },
    ];
  }
};
