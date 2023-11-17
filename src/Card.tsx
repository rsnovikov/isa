import { FC, PropsWithChildren } from "react";

interface ICardProps {
	title: string;
}

export const Card: FC<PropsWithChildren<ICardProps>> = ({ title, children }) => {
	return (
		<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-10 max-w-screen-md w-full flex-1">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-b-[1px] border-gray-400">
				{title}
			</h5>

			<div className="font-normal text-gray-700 dark:text-gray-400 pt-5">{children}</div>
		</div>
	);
};
