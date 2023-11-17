import { FC } from "react";

interface IEntireButtonProps {
	bottom?: number;
	left?: number;
	top?: number;
	right?: number;
}

export const EntryButton: FC<IEntireButtonProps> = ({ bottom, left, top, right }) => {
	return (
		<button
			className={`absolute w-[70px] h-[140px]`}
			style={{
				bottom,
				left,
				top,
				right,
			}}
		>
			<div className="absolute w-[70px] h-[70px] bg-red-600 bottom-0 left-0 animate-pulse" />
			<div className="absolute w-[70px] h-[70px] bg-green-600 bottom-[70px] left-0" />
		</button>
	);
};
