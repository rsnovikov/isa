import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

export const Lights: FC = () => {
	const [isEnable, setIsEnable] = useState<boolean>(false);
	const [activeColor, setActiveColor] = useState<number | null>(null);
	const intervalRef = useRef<number | null>(null);

	useEffect(() => {
		if (!isEnable && intervalRef.current) {
			clearInterval(intervalRef.current);
			setActiveColor(null);
			return;
		}

		setActiveColor(0);
		intervalRef.current = setInterval(() => {
			setActiveColor(prev => {
				if (prev === 2) {
					return 0;
				}
				return (prev as number) + 1;
			});
		}, 3000);
	}, [isEnable]);

	const onStart = () => setIsEnable(true);
	const onStop = () => setIsEnable(false);

	return (
		<div className="flex justify-between items-center px-3">
			<div>
				{!isEnable ? (
					<button
						type="button"
						className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						onClick={onStart}
					>
						Старт
					</button>
				) : (
					<button
						type="button"
						className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
						onClick={onStop}
					>
						Стоп
					</button>
				)}
			</div>
			<div className="flex flex-col gap-4">
				<div
					className={clsx("w-20 h-20 rounded-full bg-white", activeColor === 0 && "bg-red-600")}
				></div>
				<div
					className={clsx("w-20 h-20 rounded-full bg-white", activeColor === 1 && "bg-yellow-400")}
				></div>
				<div
					className={clsx("w-20 h-20 rounded-full bg-white", activeColor === 2 && "bg-green-600")}
				></div>
			</div>
		</div>
	);
};
