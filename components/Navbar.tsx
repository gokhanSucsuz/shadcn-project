"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Sun, Settings, User, Menu } from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { SidebarTrigger } from "./ui/sidebar";
const Navbar = () => {
	const { setTheme } = useTheme();
	const [open, setOpen] = React.useState(false);
	// const { toggleSidebar } = useSidebar();
	return (
		<nav className="flex p-4 items-center justify-between sticky top-0 bg-background z-10">
			<SidebarTrigger className="cursor-pointer" />
			{/* <Button variant="outline" onClick={toggleSidebar}>
				<ToggleLeftIcon className="h-4 w-4" />
				Toggle Button
			</Button> */}
			<div className="hidden md:flex items-center gap-4">
				<Link href="/">Dashboard</Link>
				<Link href="/users">Users</Link>
				<Link href="/users/admin">Admin</Link>
				<Link href="/payments">Payments</Link>
			</div>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger className="flex md:hidden">
					<Menu className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Shadcn Project</SheetTitle>
						<SheetDescription asChild>
							<div className="flex flex-col items-center gap-4 py-8">
								<Link onClick={() => setOpen(false)} href="/">
									Dashboard
								</Link>
								<Link onClick={() => setOpen(false)} href="/users">
									Users
								</Link>
								<Link onClick={() => setOpen(false)} href="/users/admin">
									Admin
								</Link>
								<Link onClick={() => setOpen(false)} href="/payments">
									Payments
								</Link>
							</div>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			<div className="flex items-center gap-4">
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
							<AvatarImage
								className="h-8 w-8 rounded-full"
								src={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW0NbncSWEnZ83TNSs2LnzrIvoLcDCBU2pw&s"
								}
							/>
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
		</nav>
	);
};

export default Navbar;
