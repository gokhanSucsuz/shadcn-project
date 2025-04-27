import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from "@/components/ui/hover-card";
import CardList from "@/components/CardList";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
const UsersDetailPage = () => {
	return (
		<div>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/users">Users Page</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Gökhan SUÇSUZ</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{/* CONTAINER */}
			<div className="mt-4 flex flex-col xl:flex-row gap-8">
				{/* LEFT */}
				<div className="w-full xl:w-1/3 flex flex-col gap-4">
					{/* USER BADGES CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<h1 className="text-xl font-semibold">User Badges</h1>
						<div className="flex gap-4 mt-4">
							<HoverCard>
								<HoverCardTrigger>
									<BadgeCheck
										size={36}
										className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">Verified User</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin.
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Shield
										size={36}
										className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">Verified User</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin.
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Candy
										size={36}
										className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">Verified User</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin.
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Citrus
										size={36}
										className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">Verified User</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin.
									</p>
								</HoverCardContent>
							</HoverCard>
						</div>
					</div>
					{/* INFORMATION CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<h1 className="text-xl font-semibold">User Information</h1>
						<div className="space-y-4 mt-4">
							<div className="flex flex-col gap-2 mb-4">
								<p className="text-sm text-muted-foreground">
									Profile Completion
								</p>
								<Progress value={75} />
								<div className="flex items-center gap-2">
									<span className="font-bold">Username: </span>
									<span>Gökhan.Suçsuz </span>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-bold">Email: </span>
									<span>gokhansucsuz@gmail.com </span>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-bold">Phone: </span>
									<span>+90 542 585 25 78 </span>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-bold">Location: </span>
									<span>New Jersey, USA </span>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-bold">Role: </span>
									<Badge>Admin</Badge>
								</div>
								<p className="text-sm text-muted-foreground mt-4">
									Joined on 2025.01.01
								</p>
							</div>
						</div>
					</div>
					{/* CARD LIST CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<CardList title="Latest Transactions" />
					</div>
				</div>
				{/* RIGHT */}
				<div className="w-full xl:w-2/3 flex flex-col gap-4">
					{/* USER CARD CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
					{/* CHART CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
				</div>
			</div>
		</div>
	);
};

export default UsersDetailPage;
