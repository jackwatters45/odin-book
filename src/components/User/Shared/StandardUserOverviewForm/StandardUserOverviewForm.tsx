import { FormEvent, ReactNode } from "react";

import { StyledAboutOverviewDialogActions } from "./StandardUserOverviewForm.styles";
import AudienceRadio from "@/components/Shared/AudienceRadio";
import { Control, UseFormSetValue } from "react-hook-form";
import {
	AudienceStatusOptions,
	FormFieldsWithAudience,
} from "@/types/AudienceSettingsTypes";

export interface StandardUserOverviewFormProps<T> {
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

const StandardUserOverviewForm = <T,>({
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
}: StandardUserOverviewFormProps<T>) => {
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

export default StandardUserOverviewForm;
