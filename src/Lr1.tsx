import { FC } from "react";
import { Card } from "./Card";
import { Counter } from "./Counter";
import { Func } from "./Func";

export const Lr1: FC = () => {
	return (
		<div>
			<h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
				Часть первая
			</h2>
			<div className="w-full flex flex-col items-center mb-4">
				<Func title={"F1 = A + B"} func={data => data.A || data.B} fields={["A", "B"]} prefix="1" />
				<Func title={"F2 = A * B"} func={data => data.A && data.B} fields={["A", "B"]} prefix="2" />
				<Func
					title={"F2 = (A + B) * C"}
					func={data => (data.A || data.B) && data.C}
					fields={["A", "B", "C"]}
					prefix="3"
				/>
				<Func
					title="F4 = !(A + B) * C + !D"
					func={data => (!(data.A || data.B) && data.C) || !data.D}
					fields={["A", "B", "C", "D"]}
					prefix="4"
				/>
				<Func
					title="F5 = (A ^ B) + С"
					func={data => ((data.A || data.B) && !(data.A && data.B)) || data.C}
					fields={["A", "B", "C"]}
					prefix="5"
				/>
			</div>

			<h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
				Часть вторая
			</h2>
			<div className="w-full flex flex-col items-center">
				<Card title="Счетчик">
					<Counter />
				</Card>
			</div>
		</div>
	);
};
