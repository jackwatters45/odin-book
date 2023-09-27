import { FormEvent, ReactNode } from "react";

import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { StyledAboutOverviewDialogActions } from "./StandardUserOverviewForm.styles";
import AudienceRadio from "@/components/Shared/AudienceRadio";
import { Control, UseFormSetValue } from "react-hook-form";

export interface UserAboutFormFields<T> {
	audience: AudienceStatusOptions;
	values: T | undefined;
}

export interface StandardUserOverviewFormProps<T> {
	initial: UserAboutFormFields<T> | undefined;
	formValues: UserAboutFormFields<T>;
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	handleSave: (e: FormEvent<HTMLFormElement>) => void;
	control: Control<UserAboutFormFields<T>>;
	setValue: UseFormSetValue<UserAboutFormFields<T>>;
	children: ReactNode;
}

const StandardUserOverviewForm = <T,>({
	initial,
	formValues,
	audience,
	handleCloseForm,
	handleSave,
	control,
	setValue,
	children,
}: StandardUserOverviewFormProps<T>) => {
	return (
		<form onSubmit={handleSave}>
			{children}
			<StyledAboutOverviewDialogActions
				handleCancel={handleCloseForm}
				handleSave={undefined}
				initial={initial}
				unsavedValue={formValues}
				unchangedBehavior="disable"
				leftColumn={
					<AudienceRadio
						formField={"audience"}
						initial={audience}
						control={control}
						setValue={setValue}
						submitsForm={false}
						submitButtonText={"Done"}
					/>
				}
			/>
		</form>
	);
};

export default StandardUserOverviewForm;
