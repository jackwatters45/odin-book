import { colorClassTypes } from "@/components/Shared/StandardButton/StandardButton";

export type ResponseState = "accepted" | "declined" | "pending" | undefined;

export interface buttonOption {
	text: string;
	onClick: (() => void) | undefined;
	colorClass?: colorClassTypes;
	disabled?: boolean;
}

export type buttonOptions = buttonOption[];
