import clsx from "clsx";
import { FC } from "react";
import { EntryType } from "./Lr3";

interface IEntireButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	bottom?: number;
	left?: number;
	top?: number;
	right?: number;
	activeBtn?: EntryType;
}

export const EntryButton: FC<IEntireButtonProps> = ({ bottom, left, top, right, activeBtn, ...rest }) => {
	return (
		<button
			{...rest}
			className={`absolute w-[70px] h-[140px]`}
			style={{
				bottom,
				left,
				top,
				right,
			}}
		>
			<div
				className={clsx(
					"absolute w-[70px] h-[70px] bg-red-700 bottom-0 left-0 border",
					activeBtn === "exit" && "animate-pulse"
				)}
			/>
			<div
				className={clsx(
					"absolute w-[70px] h-[70px] bg-green-700 bottom-[70px] left-0 border",
					activeBtn === "entry" && "animate-pulse"
				)}
			/>
		</button>
	);
};
