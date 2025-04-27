"use client";
import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarSeparator
} from "@/components/ui/sidebar";

import {
	Home,
	Inbox,
	Search,
	Calendar,
	Settings,
	User2,
	ChevronUp,
	Plus,
	Projector
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
	DropdownMenuContent,
	DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator
} from "./ui/dropdown-menu";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/components/ui/collapsible";

const items = [
	{
		title: "Home",
		url: "/",
		icon: Home
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar
	},
	{
		title: "Search",
		url: "#",
		icon: Search
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings
	}
];
const AppSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="py-4">
				<SidebarMenu>
					<SidebarMenuButton
						asChild
						className="flex items-center justify-start"
					>
						<Link href="/" className="flex items-center gap-3">
							<Image
								src="/logo.png"
								alt="Logo"
								width={32}
								height={32}
								className="rounded-full"
							/>
							Shadcn Project
						</Link>
					</SidebarMenuButton>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarSeparator />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>ITEMS</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item, index) =>
								<SidebarMenuItem
									key={index}
									className="flex items-center gap-3"
								>
									<SidebarMenuButton asChild>
										<Link href={item.url} className="flex items-center gap-3">
											<item.icon className="h-4 w-4" />
											<span>
												{item.title}
											</span>
										</Link>
									</SidebarMenuButton>
									{item.title === "Inbox" &&
										<SidebarMenuBadge>24</SidebarMenuBadge>}
								</SidebarMenuItem>
							)}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Projects</SidebarGroupLabel>
					<SidebarGroupAction>
						<Plus /> <span className="sr-only">Add Project</span>
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="#">
										<Plus />
										Add Projects
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel>
							<CollapsibleTrigger className="w-full flex items-center">
								<span>Collapsible Content</span>
								<ChevronUp className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<SidebarGroupContent>
							<CollapsibleContent className="space-y-2">
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href="#">
												<Projector />
												See All Projects
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href="#">
												<Plus />
												Add Projects
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</CollapsibleContent>
							<SidebarGroup>
								<SidebarGroupLabel>Projects</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton asChild>
												<Link href="#">
													<Projector />
													See All Projects
												</Link>
											</SidebarMenuButton>
											<SidebarMenuSub>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton asChild>
														<Link href="#">
															<Plus />
															Add Projects
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton asChild>
														<Link href="#">
															<Plus />
															Add Category
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											</SidebarMenuSub>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						</SidebarGroupContent>
					</SidebarGroup>
				</Collapsible>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 className="h-4 w-4" />
									Gökhan Suçsuz
									<ChevronUp />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Billing</DropdownMenuItem>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuItem>Subscription</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
