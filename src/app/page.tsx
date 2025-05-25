import { Button } from "@/components/ui/button";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
        <h1 className="text-5xl font-bold">Click on Dashboard Button</h1>
        <p className="text-2xl font-bold"><FaArrowDown /></p>
        <Button className="rounded-full hover:bg-slate-500">
        <a href="/dashboard" className=" p-3 w-32 flex items-center justify-center gap-3" >Dashboard <FaArrowRight size={40} /></a>
        </Button>
    </div>
  );
}