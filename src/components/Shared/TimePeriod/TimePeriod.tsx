import { FieldValues, UseFormRegister } from "react-hook-form";

import StandardSelect from "@/components/Shared/StandardSelect";
import { renderDates, renderMonths, renderYears } from "@/utils/dateHelpers";
import {
	StyledTimePeriodContainer,
	StyledTimePeriodText,
	StyledTimePeriodDatesDiv,
	StyledStandardCheckbox,
	StyledStandardCheckboxMarginTop,
} from "./TimePeriod.styles";
import { HTMLAttributes } from "react";

type DatePart = string | undefined;

export interface SelectedValues {
	startYear: DatePart;
	startMonth: DatePart;
	endYear?: DatePart;
	endMonth?: DatePart;
}

export interface TimePeriodValues extends SelectedValues {
	checked?: boolean | undefined;
	startDay: DatePart;
	endDay?: DatePart;
}

type TimeSegmentInputs = {
	[K in keyof TimePeriodValues]: ReturnType<UseFormRegister<FieldValues>>;
};

interface TimePeriodProps extends HTMLAttributes<HTMLDivElement> {
	checked: boolean | undefined;
	inputs: TimeSegmentInputs;
	selectedValues: SelectedValues;
	checkboxText?: string;
	title?: string;
	numFutureDates?: number;
	includeDefaultInDropdowns?: boolean;
	includeEndDateIfChecked?: boolean;
}

const TimePeriod = ({
	checked,
	inputs,
	selectedValues,
	checkboxText,
	title = "Time Period",
	numFutureDates,
	includeDefaultInDropdowns = true,
	includeEndDateIfChecked = false,
	...props
}: TimePeriodProps) => {
	return (
		<StyledTimePeriodContainer {...props}>
			<StyledTimePeriodText>{title}</StyledTimePeriodText>
			{!includeEndDateIfChecked && inputs.checked && (
				<StyledStandardCheckbox
					id="checked"
					register={inputs.checked}
					labelText={checkboxText}
				/>
			)}
			<StyledTimePeriodDatesDiv>
				{!includeEndDateIfChecked && checked && <span>From</span>}
				<div>
					<StandardSelect
						id="starYear"
						options={renderYears(includeDefaultInDropdowns, numFutureDates)}
						register={inputs.startYear}
					/>
					{selectedValues.startYear && (
						<StandardSelect
							id="startMonth"
							options={renderMonths(includeDefaultInDropdowns)}
							register={inputs.startMonth}
						/>
					)}
					{selectedValues.startMonth && selectedValues.startYear && (
						<StandardSelect
							id="startDay"
							options={renderDates(
								selectedValues.startMonth,
								selectedValues.startYear,
								includeDefaultInDropdowns,
							)}
							register={inputs.startDay}
						/>
					)}
				</div>
				{(includeEndDateIfChecked || !checked) &&
					inputs.endYear &&
					inputs.endMonth &&
					inputs.endDay && (
						<>
							<span>to</span>
							<div>
								<StandardSelect
									id="endYear"
									options={renderYears(includeDefaultInDropdowns, numFutureDates)}
									register={inputs.endYear}
								/>
								{selectedValues.endYear && (
									<StandardSelect
										id="endMonth"
										options={renderMonths(includeDefaultInDropdowns)}
										register={inputs.endMonth}
									/>
								)}
								{selectedValues.endMonth && selectedValues.endYear && (
									<StandardSelect
										id="endDay"
										options={renderDates(
											selectedValues.endMonth,
											selectedValues.endYear,
											includeDefaultInDropdowns,
										)}
										register={inputs.endDay}
									/>
								)}
							</div>
						</>
					)}
			</StyledTimePeriodDatesDiv>
			{includeEndDateIfChecked && inputs.checked && (
				<StyledStandardCheckboxMarginTop
					id="checked"
					register={inputs.checked}
					labelText={checkboxText}
				/>
			)}
		</StyledTimePeriodContainer>
	);
};

export default TimePeriod;
