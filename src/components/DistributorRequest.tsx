import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";


export default function DistributorRequests() {
    const requests = [
        {
            id: 1,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "1 day ago",
            status: "Pending",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
        {
            id: 2,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "1 day ago",
            status: "Pending",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
        {
            id: 3,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "1 day ago",
            status: "Rejected",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
        {
            id: 4,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "18 days ago",
            status: "Approved",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
        {
            id: 5,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "18 days ago",
            status: "Approved",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
        {
            id: 6,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "1 day ago",
            status: "Rejected",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
        {
            id: 7,
            name: "Aparna Pharmacy",
            license: "License No. 1238966",
            location: "3B Sitapura Ind Area Jaipur",
            timeAgo: "1 day ago",
            status: "Rejected",
            contact: "+91 8899268833",
            avatar: "🏪"
        },
    ];

    return (

        <div className="lg:col-span-2">
            <Card className="rounded-3xl">
                <CardHeader className="border-b-2 flex flex-col md:flex-col xl:flex-row 2xl:flex-row">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start justify-between mb-4">
                            <div className="flex gap-3">
                                <CardTitle className="text-lg font-semibold text-gray-900">Distributor Requests</CardTitle>
                                <div className="p-2 rounded-full border-2">
                                    <p className="text-sm text-center text-gray-500">42 Pending</p>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm">
                                <span className="text-gray-500"> You have got orders!!</span> Approve the dealers and start processing orders
                            </div>
                        </div>
                    </div>
                    <Tabs defaultValue="all" className="mt-8 xl:ml-8 2xl:ml-8">
                        <TabsList className="rounded-3xl bg-gray-100">
                            <TabsTrigger value="all" className="rounded-l-3xl active:bg-green-700 hover:bg-blue-200">All</TabsTrigger>
                            <TabsTrigger value="pending" className="hover:bg-blue-200">Pending</TabsTrigger>
                            <TabsTrigger value="approved" className="hover:bg-blue-200">Approved</TabsTrigger>
                            <TabsTrigger value="rejected" className="rounded-r-3xl hover:bg-blue-200">Rejected</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardHeader>
                <CardContent className="mt-2">
                    <div className="space-y-4 h-[300px] overflow-y-scroll">
                        <div className="flex justify-between sticky top-0 bg-inherit p-2 mx-5" >
                            <div>Distributors Name</div>
                            <div className="flex gap-16">
                                <div className="ml-10">Status</div>
                                <div>Contact No.</div>
                                <div>Action</div>
                            </div>
                        </div>
                        {requests.map((request) => (
                            <div key={request.id} className="flex items-center justify-between p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={request.avatar || "/placeholder.svg"} />
                                        <AvatarFallback>AP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-medium">{request.name}</h4>
                                        <p className="text-sm text-gray-500">{request.license}</p>
                                        <p className="text-xs text-gray-400">
                                            {request.location} • {request.timeAgo}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12">
                                    <Badge
                                        variant={
                                            request.status === "Approved"
                                                ? "default"
                                                : request.status === "Pending"
                                                    ? "secondary"
                                                    : "destructive"
                                        }
                                        className={
                                            request.status === "Approved"
                                                ? "bg-green-100 text-green-800"
                                                : request.status === "Pending"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-red-100 text-red-800"
                                        }
                                    >
                                        {request.status}
                                    </Badge>
                                    <p className="text-sm text-gray-500">{request.contact}</p>
                                    <Button variant="ghost" size="default" className="text-blue-800">
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>


    )
}