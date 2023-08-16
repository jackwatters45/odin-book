export interface ValidationError {
	type: string;
	value: string;
	msg: string;
	path: string;
	location: string;
}

export interface FormError {
	message?: string;
	errors?: ValidationError[];
}
