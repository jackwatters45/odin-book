import { colorClassTypes } from "@/components/Shared/StandardButton/StandardButton";

export type responseState = "accepted" | "declined" | "pending" | undefined;

export interface buttonOption {
	text: string;
	onClick: (() => void) | undefined;
	colorClass?: colorClassTypes;
	disabled?: boolean;
}

export type buttonOptions = buttonOption[];
