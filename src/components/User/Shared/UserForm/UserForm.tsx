import { FormEvent, ReactNode } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import AudienceRadio from "@/components/Shared/AudienceRadio";
import { StyledAboutOverviewDialogActions } from "./UserForm.styles";
import {
	AudienceStatusOptions,
	FormFieldsWithAudience,
} from "@/types/AudienceSettingsTypes";

export interface UserFormProps<T> {
	initial: FormFieldsWithAudience<T> | undefined;
	formValues: FormFieldsWithAudience<T>;
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	handleSave: (e: FormEvent<HTMLFormElement>) => void;
	control: Control<FormFieldsWithAudience<T>>;
	setValue: UseFormSetValue<FormFieldsWithAudience<T>>;
	disableSave?: boolean;
	children: ReactNode;
	className?: string;
}

const UserForm = <T,>({
	initial,
	formValues,
	audience,
	handleCloseForm,
	handleSave,
	control,
	setValue,
	disableSave,
	children,
	className,
}: UserFormProps<T>) => {
	return (
		<form onSubmit={handleSave} className={className}>
			{children}
			<StyledAboutOverviewDialogActions
				handleCancel={handleCloseForm}
				handleSave={undefined}
				initial={initial}
				unsavedValue={formValues}
				disableSave={disableSave}
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

export default UserForm;
