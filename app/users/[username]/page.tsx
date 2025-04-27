import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import CardList from "@/components/CardList";
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
					<div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
					{/* INFORMATION CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">Info</div>
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
