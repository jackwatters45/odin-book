export type defaultOption = "save" | "edit" | "audience" | "delete";

export type defaultOptions = defaultOption[];

export interface MoreOptionsOption {
	text: string;
	icon: string | undefined;
	onClick: () => void;
}

export type MoreOptionsOptions = MoreOptionsOption[];

export type DialogDirectionX = "left" | "right" | "both";

export type DialogDirectionY = "top" | "bottom" | "both";

export type Direction = {
	x: DialogDirectionX;
	y: DialogDirectionY;
};
