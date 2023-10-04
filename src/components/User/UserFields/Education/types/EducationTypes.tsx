import { FormFieldsWithAudience } from "@/types/AudienceSettingsTypes";
import { IncludesStartEndDates } from "@/types/IncludesDates";

export interface EducationData extends IncludesStartEndDates {
	_id: string;
	type: "college" | "high school";
	school: string;
	graduated: boolean;
	degree?: string;
	attendedFor?: "undergraduate" | "graduate school";
	concentrations?: string[];
	description?: string;
}

export type EducationWithConcentrations = EducationData & {
	concentrations1: string | undefined;
	concentrations2: string | undefined;
	concentrations3: string | undefined;
};

export type EducationFormFields = FormFieldsWithAudience<EducationWithConcentrations>;
