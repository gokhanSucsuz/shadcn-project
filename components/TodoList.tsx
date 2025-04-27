"use client";

import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";

import { format } from "date-fns/format";

const TodoList = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState(false);
	return (
		<div>
			<h1 className="text-lg font-medium mb-6">Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="default" className="w-full">
						<CalendarIcon />
						{date ? format(date, "PPP") : "Pick a date"}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={date => {
							setDate(date);
							setOpen(false);
						}}
						className="rounded-md border"
					/>
				</PopoverContent>
			</Popover>

			<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" checked />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
					<Card className="p-4">
						<div className="items-top flex space-x-2">
							<Checkbox id="item1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="item1"
									className="text-sm text-muted-foreground"
								>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
