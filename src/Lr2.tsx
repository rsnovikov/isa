import { FC } from "react";
import { Card } from "./Card";
import { Lights } from "./Lights";

export const Lr2: FC = () => {
	return (
		<div>
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
				ЛР2
			</h1>
			<div className="w-full flex flex-col items-center mb-4">
				<Card title="Светофор">
					<Lights />
				</Card>
			</div>
		</div>
	);
};
