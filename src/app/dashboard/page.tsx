import { IoNotificationsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { TopDistributors } from "@/components/TopDistributors";
import { StockRunningLow } from "@/components/StockRunningLow";
import { FaLink } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import Footer from "@/components/Footer"
import DistributorRequests from "@/components/DistributorRequest";
import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TopProducts } from "@/components/TopProducts";
import StatsCard from "@/components/StatsCard";



export default function Dashboard() {
    return (
        <div className="bg-gray-100 min-h-screen p-6 space-y-6 overflow-y-auto">
            <div className="flex gap-5 ">
                <div className="rounded-full w-[90%] bg-white h-10"><SidebarTrigger /></div>
                <div className="flex items-center gap-2 bg-white rounded-full">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Settings className="w-5 h-5" />
                    </Button>
                    <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="flex flex-col md:flex-col xl:flex-row 2xl:flex-row gap-2 rounded-3xl bg-white">
                {/* Left Section */}
                <div className="w-full md:w-full xl:w-[64%] 2xl:w-[64%] bg-white h-full p-6 flex flex-col gap-8 rounded-3xl">
                    <StatsCard/>
                    <DistributorRequests />
                    <TopProducts />
                </div>
                {/* Right Section */}
                <div className="w-full md:full xl:w-[36%] 2xl:w-[36%] bg-white h-full flex flex-col p-6 justify-between rounded-3xl gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="bg-gray-900 border-2 border-gray-200 text-center p-3 rounded-full flex items-center justify-start gap-2">
                            <div className="rounded-full bg-blue-800 p-3 h-3 ml-10"></div>
                            <span className="text-white text-3xl font-bold">270+ </span>
                            <span className="text-sm font-normal text-gray-300"> PO received today</span>
                        </div>
                        <div className="bg-gray-200 border-2 border-gray-200 text-center p-3 rounded-full flex items-center justify-between gap-2">
                            <div className="text-black text-4xl flex items-center justify-center gap-3 ml-5"><FaLink width={20} height={20} />

                                <span className="text-black text-xl font-bold">Your Business </span>
                                <span className="text-sm text-blue-500 font-bold underline"> Copy Link</span>
                            </div>
                            <div className="mr-5 text-3xl">
                                <FiShare2 />
                            </div>
                        </div>
                    </div>
                    <TopDistributors />
                    <StockRunningLow />
                </div>
            </div>
            <Footer />
        </div>
    );
};