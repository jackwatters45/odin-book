export interface ValidationError {
	type: string;
	value: string;
	msg: string;
	path: string;
	location: string;
}

export interface ResponseError {
	message?: string;
	errors?: ValidationError[];
}

export type FormError = string | ValidationError[];
