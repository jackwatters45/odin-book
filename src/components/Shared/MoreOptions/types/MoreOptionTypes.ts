export type defaultOption = "save" | "edit" | "audience" | "delete";

export type defaultOptions = defaultOption[];

export interface MoreOptionsOption {
	text: string;
	icon: string | undefined;
	onClick: () => void;
}

export type MoreOptionsOptions = MoreOptionsOption[];
