"use client";
import logo from "@/public/logo.png";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
	LogOut,
	Moon,
	Sun,
	Settings,
	User,
	ToggleLeftIcon
} from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";
const Navbar = () => {
	const { setTheme } = useTheme();
	// const { toggleSidebar } = useSidebar();
	return <nav className="flex p-4 items-center justify-between sticky top-0 bg-background z-10">
			<SidebarTrigger className="cursor-pointer" />
			{/* <Button variant="outline" onClick={toggleSidebar}>
				<ToggleLeftIcon className="h-4 w-4" />
				Toggle Button
			</Button> */}
			<div className="flex items-center gap-4">
				<Link href="/">Dashboard</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme("light")}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<DropdownMenu>
					<DropdownMenuTrigger className="cursor-pointer rounded-full">
						<Avatar>
							<AvatarImage className="h-8 w-8 rounded-full" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW0NbncSWEnZ83TNSs2LnzrIvoLcDCBU2pw&s"} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent sideOffset={10}>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<User className="h-[1.2rem] w-[1.2rem] mr-2" />
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
							Settings
						</DropdownMenuItem>
						<DropdownMenuItem variant="destructive">
							<LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>;
};

export default Navbar;
