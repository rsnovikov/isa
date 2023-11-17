import { FC, useState } from "react";

export const Counter: FC = () => {
	const [counter, setCounter] = useState<number>(0);

	const onClick = () => {
		setCounter(prev => prev + 1);
	};

	return (
		<div className="flex justify-between items-center">
			<button
				onClick={onClick}
				type="button"
				className="inline-flex items-center justify-between px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:border-blue-600  dark:peer-checked:text-gray-300 peer-checked:text-gray-600  dark:text-gray-400 dark:bg-gray-800"
			>
				Кнопка
			</button>
			<div>
				Счетчик нажатий: <span className="font-bold"> {counter}</span>
			</div>
		</div>
	);
};
