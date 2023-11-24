import { HTMLProps } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";

import useSearchInput from "./useSearchInput";
import { StyledHobbiesSearchLabel } from "@/components/User/UserFields/Hobbies/EditHobbiesForm/HobbiesSearch/HobbiesSearch.styles";

interface SearchInputProps<T extends FieldValues> extends HTMLProps<HTMLInputElement> {
	id: string;
	placeholder: string;
	register: ReturnType<UseFormRegister<T>> | undefined;
	className?: string;
}

const SearchInput = <T extends FieldValues>({
	id,
	placeholder,
	register,
	className,
	...props
}: SearchInputProps<T>) => {
	const { inputRef } = useSearchInput();

	return (
		<StyledHobbiesSearchLabel className={className} htmlFor={id}>
			<span>
				<Icon path={mdiMagnify} size={0.85} color={"#65676b"} />
			</span>
			<input
				type="text"
				id={id}
				placeholder={placeholder}
				{...register}
				ref={(e) => {
					if (register) register.ref(e);
					inputRef.current = e;
				}}
				{...props}
			/>
		</StyledHobbiesSearchLabel>
	);
};

export default SearchInput;
