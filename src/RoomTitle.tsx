import { FC, PropsWithChildren } from "react";

export const RoomTitle: FC<PropsWithChildren> = ({ children }) => {
	return <div className="text-5xl text-white absolute left-10 bottom-10">{children}</div>;
};
