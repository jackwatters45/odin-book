import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { CreateAccountInputs } from "../useCreateAccountForm";
import {
	StyledFullWidthStandardSelect,
	StyledGenderVisibleText,
} from "./CustomGender.styles";
import AuthTextInput from "../../Shared/AuthTextInput";

interface CustomGenderProps<T extends FieldValues> {
	register: UseFormRegister<T>;
	formValues: T;
	errors: FieldErrors<T>;
}

const CustomGender = ({
	register,
	formValues,
	errors,
}: CustomGenderProps<CreateAccountInputs>) => {
	return (
		<div>
			<div>
				<label htmlFor="pronouns" hidden>
					Pronouns
				</label>
				<StyledFullWidthStandardSelect
					id="pronouns"
					defaultValue=""
					aria-invalid={!!errors.pronouns}
					register={register("pronouns")}
					options={[
						<option key="default" value="" disabled>
							Select your pronouns
						</option>,
						<option key="she/her" value="she/her">
							She: &ldquo;Wish her a happy birthday!&rdquo;
						</option>,
						<option key="he/him" value="he/him">
							He: &ldquo;Wish him a happy birthday!&rdquo;
						</option>,
						<option key="they/them" value="they/them">
							They: &ldquo;Wish them a happy birthday!&rdquo;
						</option>,
					]}
				/>
				<StyledGenderVisibleText>
					Your pronoun is visible to everyone.
				</StyledGenderVisibleText>
				{errors.pronouns && <div>{errors.pronouns.message}</div>}
			</div>
			<AuthTextInput<CreateAccountInputs>
				id="genderCustom"
				idText="Gender (optional)"
				formValues={formValues}
				errors={errors}
				register={register("genderCustom")}
			/>
		</div>
	);
};

export default CustomGender;
