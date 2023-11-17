import clsx from "clsx";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Card } from "./Card";
import FuncCheckbox from "./FuncCheckbox";

interface IFuncData {
	[key: string]: boolean;
}

interface FuncProps {
	fields: string[];
	func: (data: IFuncData) => boolean;
	title: string;
	prefix: string;
}

export const Func: FC<FuncProps> = ({ fields, func, title, prefix }) => {
	const [data, setData] = useState<IFuncData>(
		fields.reduce((acc, item) => ({ ...acc, [item]: false }), {})
	);

	const [isEnable, setIsEnable] = useState<boolean>(false);

	const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
		setData(prev => ({
			...prev,
			[event.target.name]: !prev[event.target.name],
		}));
	};

	useEffect(() => {
		setTimeout(() => {
			if (func(data)) {
				setIsEnable(true);
			} else {
				setIsEnable(false);
			}
		}, 2000);
	}, [data, func]);

	return (
		<Card title={title}>
			<div className="flex justify-between items-center">
				<div className="flex flex-columm gap-5">
					{Object.keys(data).map(fieldName => (
						<FuncCheckbox
							id={prefix + fieldName}
							key={fieldName}
							name={fieldName}
							onChange={handleChange}
							checked={data[fieldName]}
						>
							{fieldName}
						</FuncCheckbox>
					))}
				</div>
				<div
					className={clsx(
						"border border-gray-300 rounded-lg dark:text-white dark:border-gray-600 min-w-[200px] min-h-[50px]",
						isEnable ? "bg-gray-100" : "bg-gray-700"
					)}
				></div>
			</div>
		</Card>
	);
};
