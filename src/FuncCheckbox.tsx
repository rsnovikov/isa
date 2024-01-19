import {
	FC,
	InputHTMLAttributes,
	PropsWithChildren
} from "react";


interface FuncBtnProps extends InputHTMLAttributes<HTMLInputElement>{
}
const FuncCheckbox: FC<PropsWithChildren<FuncBtnProps>> = ({
	children,
	...rest
}) => {
  return (
		<form>
		<input type="checkbox" className="hidden peer" id={rest.name} {...rest} />
		<label htmlFor={rest.id || rest.name} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  dark:border-gray-700 peer-checked:border-blue-600  dark:peer-checked:text-gray-300 peer-checked:text-gray-600  dark:text-gray-400 dark:bg-gray-800 ">
				<div className="block">
						<div className="w-full text-lg font-semibold">{children}</div>
				</div>
		</label>
</form>
  );
};

export default FuncCheckbox;
