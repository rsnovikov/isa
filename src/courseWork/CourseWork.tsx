import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Card } from "../Card";
import FuncCheckbox from "../FuncCheckbox";
import { Alert, Button, FooterDivider } from "flowbite-react";

// Интерфейс объекта состояние приложения
interface ISecurity {
	alarm: boolean;
	atHouse: boolean;
	isWindowBroken: boolean;
	counter: number;
	gsm: boolean;
}

// Начальное состояние приложения
const securityInitial: ISecurity = {
	alarm: false,
	atHouse: false,
	isWindowBroken: false,
	counter: 0,
	gsm: false,
};

export const CourseWork: FC = () => {
	const [security, setSecurity] = useState<ISecurity>(securityInitial);

const updateSecurityField = (fieldName: keyof ISecurity, value: boolean | number) => {
	setSecurity(prev => ({ ...prev, [fieldName]: value }));
};

	const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = e => {
		updateSecurityField(e.target.name as keyof ISecurity, e.target.checked);
	};

const onBreakWindow = () => {
	updateSecurityField("isWindowBroken", true);
};

useEffect(() => {
	if (!security.isWindowBroken) {
		return;
	}
	setTimeout(() => {
		updateSecurityField("isWindowBroken", false);
	}, 2000);

	if (!security.alarm || security.atHouse) {
		return;
	}

	updateSecurityField("gsm", true);
	setTimeout(() => {
		updateSecurityField("gsm", false);
		updateSecurityField("counter", security.counter + 1);
	}, 1500);
}, [security.isWindowBroken]);

	const resetCounter = () => {
		updateSecurityField("counter", 0);
	};

	return (
		<div>
			<h2 className="mb-6 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
				Охранная система умного дома
			</h2>
			<div className="w-full flex flex-col items-center mb-4">
				<Card>
					<div className="flex flex-col gap-5">
<FuncCheckbox name="alarm" onChange={onCheckboxChange} checked={security.alarm}>
	Сигнализация
</FuncCheckbox>

<FuncCheckbox name="atHouse" onChange={onCheckboxChange} checked={security.atHouse}>
	Жильцы в доме
</FuncCheckbox>

<Alert color={security.gsm ? "failure" : "indigo"}>
	<div className="text-lg font-medium">
		{!security.gsm ? "В данный момент GSM передатчик не активен" : "В данный момент GSM 											передатчик передает сигнал"}
	</div>
</Alert>

<div className="text-xl font-medium">
	Передано сигналов: <span className="font-bold">{security.counter}</span>
</div>

						<FooterDivider className="!my-3" />

<Button color="pink" onClick={onBreakWindow} disabled={security.isWindowBroken}>
	{!security.isWindowBroken ? "Разбить окно" : "Окно разбито, в данный момент его нельзя трогать"}
</Button>

<Button onClick={resetCounter}>Сбросить счетчик</Button>
					</div>
				</Card>
			</div>
		</div>
	);
};
