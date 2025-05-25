
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  BarChart3,
  Package,
  Users,
  FileText,
  Warehouse,
  Building2,
  Calculator,
  PieChart,
  UserCog,
  SettingsIcon,
  HelpCircle,
  Sparkles,
  LayoutDashboard,
  PencilLine,
} from "lucide-react"
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { BsRecordBtn } from "react-icons/bs";
import { WiCloud } from "react-icons/wi";
import { LuDownload } from "react-icons/lu";


export default function AppSidebar() {

    const sidebarItems = [
  {
    title: "BUSINESS",
    items: [
      { title: "Overview", icon: LayoutDashboard, active: true },
      { title: "Order Management", icon: PencilLine },
      { title: "Distributor/ CNF List", icon: CgNotes },
      { title: "Expiry Returns / Credit Note", icon: BsRecordBtn },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      { title: "Product Management", icon: Package },
      { title: "Stock Management", icon: Warehouse },
    ],
  },
  {
    title: "ORGANIZATION MANAGEMENT",
    items: [
      { title: "Employee Management", icon: UserCog },
      { title: "Divisions Management", icon: Building2 },
    ],
  },
  {
    title: "FINANCE & REPORTING",
    items: [
      { title: "Accounting", icon: Calculator },
      { title: "Analytics & Reports", icon: PieChart },
    ],
  },
  {
    title: "OTHER",
    items: [
      { title: "Profile Settings", icon: SettingsIcon },
      { title: "Help!", icon: HelpCircle },
    ],
  },
]
  return (
    <Sidebar className="bg-gray-300 w-68 max-h-screen">
      <SidebarHeader className="p-1 bg-gray-100">
         <Link href="/" className="flex items-center justify-center lg:justify-center mt-3">
            <h1 className="font-bold text-4xl text-center underline text-gray-600">Jee</h1>
            <span className="text-5xl underline underline-offset-auto -ml-2 text-blue-600 font-bold">1</span>
          </Link>
        <Button className="mt-4 ml-5 mr-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
          <Sparkles className="w-4 h-4 mr-2" />
          AI Coming Soon
        </Button>
      </SidebarHeader>
      <SidebarContent className="px-2 bg-gray-100 scrollbar-hide">
        {sidebarItems.map((section, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={itemIndex}>
                    <SidebarMenuButton asChild isActive={item.active} className="w-full justify-start active:bg-gray-200">
                      <a href="#" className="flex items-center gap-3 px-3 py-2">
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3 mb-2">
            <WiCloud color="blue" height={20} width={20} />
            <span className="text-sm font-medium">Profile</span>
            <Button variant="outline" size="sm" className="ml-auto rounded-full">
              Update
            </Button>
          </div>
          <p className="text-xs text-gray-500">Complete your profile to enjoy more features!</p>
          <Button variant="ghost" size="sm" className="w-full mt-2 text-blue-600">
            <LuDownload className="w-4 h-4 mr-2" />
            Get JEE1 App! Coming Soon!
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
