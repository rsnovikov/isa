import clsx from "clsx";
import { FC, useState } from "react";
import { EntryButton } from "./EntryButton";
import { RoomTitle } from "./RoomTitle";

export type Room = "A" | "B" | "C";

export type ActiveEntiry = { room: Room; type: "entry" | "exit" } | null;

export const Lr3: FC = () => {
	const [currentRooms, setCurrentRooms] = useState<Room[]>(["A", "B", "C"]);
	const [activeEntry, setActiveEntry] = useState<ActiveEntiry>(null);

	return (
		<div>
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
				ЛР2
			</h1>
			<div className="mt-4 flex justify-center">
				<div className="relative w-[1100px] h-[1000px]">
					<div
						className={clsx(
							"absolute w-[1000px] h-[800px] top-0 right-0 border-2 border-gray-500 bg-gray-700",
							currentRooms.includes("A") && "bg-yellow-500"
						)}
					>
						<RoomTitle>A</RoomTitle>
						<EntryButton bottom={50} left={-70} />

						<div
							className={clsx(
								"absolute w-[400px] h-[250px] top-0 right-[300px] border-2 border-gray-500 bg-gray-700",
								currentRooms.includes("B") && "bg-green-800"
							)}
						>
							<RoomTitle>C</RoomTitle>
							<EntryButton bottom={50} left={-70} />
						</div>

						<div
							className={clsx(
								"absolute w-[500px] h-[350px] bottom-0 right-0 border-2 border-gray-500 bg-gray-700",
								currentRooms.includes("C") && "bg-green-800"
							)}
						>
							<RoomTitle>B</RoomTitle>
							<EntryButton bottom={50} left={-70} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
