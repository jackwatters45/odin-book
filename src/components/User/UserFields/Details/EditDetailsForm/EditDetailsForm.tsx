import Icon from "@mdi/react";
import { mdiWeb } from "@mdi/js";

import ModalHeader from "@/components/Shared/Dialog/DialogHeader";
import { IUser } from "@/types/IUser";
import { FormEvent, forwardRef } from "react";
import ExistingDetailSwitch from "./ExistingDetailSwitch";
import { UseFormReturn } from "react-hook-form";
import DialogActions from "../../../../Shared/Dialog/DialogActions";
import AddDetailLink from "./AddDetailLink";
import {
	FormContentContainer,
	SectionContainer,
	StyledDetailsFormDialog,
	StyledSectionTitleHeader,
} from "./EditDetailsForm.styles";
import useEditDetailsForm from "./useEditDetailsForm";
import SectionTitle from "./SectionTitle";
import getSocialLinkImage from "../../SocialLinks/socialLinkImages";
import AudienceRadio from "@/components/Shared/AudienceRadio";
import DetailsFormFields from "@/types/DetailsFormFields";
import formatWorkData from "../../Work/formatWorkValue";
import { formatEducationTitle } from "../../Education/formatEducationData";
import formatRelationshipStatus from "../../RelationshipStatus/formatRelationshipStatus";

interface EditDetailsFormProps {
	user: IUser;
	closeDialog: () => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	register: UseFormReturn<DetailsFormFields>["register"];
	control: UseFormReturn<DetailsFormFields>["control"];
	setValue: UseFormReturn<DetailsFormFields>["setValue"];
}

const EditDetailsForm = forwardRef<HTMLDialogElement, EditDetailsFormProps>(
	({ user, closeDialog, onSubmit, register, control, setValue }, ref) => {
		const { formattedJoined, currentCity, hometown, defaultValues } = useEditDetailsForm({
			user,
		});

		return (
			<StyledDetailsFormDialog ref={ref}>
				<form onSubmit={onSubmit}>
					<ModalHeader title={"Edit details"} closeDialog={closeDialog} />
					<FormContentContainer>
						<StyledSectionTitleHeader
							title="Customize your intro"
							subtitle="Details you select will be public."
						/>
						<SectionContainer>
							<SectionTitle title="Pronouns" />
							{user.pronouns ? (
								<ExistingDetailSwitch
									id="pronouns"
									value={user.pronouns}
									register={register("pronouns.pronouns")}
									to={"about_contact_and_basic_info"}
								/>
							) : (
								<AddDetailLink
									text={"Add pronouns to your profile"}
									to={"about_contact_and_basic_info"}
								/>
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Work" />
							{user.work &&
								user.work.map((workRecord) => {
									return (
										<ExistingDetailSwitch
											key={workRecord._id}
											id={`work.${workRecord._id}`}
											value={formatWorkData({ work: workRecord })}
											register={register(`work.${workRecord._id}`)}
											to={"about_work_and_education"}
										/>
									);
								})}
							<AddDetailLink text={"Add a workplace"} to={"about_work_and_education"} />
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Education" />
							{user.education &&
								user.education.map((educationRecord) => {
									return (
										<ExistingDetailSwitch
											key={educationRecord._id}
											id={`education.${educationRecord._id}`}
											value={formatEducationTitle({ education: educationRecord })}
											register={register(`education.${educationRecord._id}`)}
											to={"about_work_and_education"}
										/>
									);
								})}
							<AddDetailLink
								text={"Add high school or college"}
								to={"about_work_and_education"}
							/>
						</SectionContainer>

						<SectionContainer>
							<SectionTitle title="Current city" />
							{currentCity ? (
								<ExistingDetailSwitch
									id="currentCity"
									value={`Lives in ${currentCity.city}${
										currentCity.state ? `, ${currentCity.state}` : ""
									}`}
									register={register("currentCity.currentCity")}
									to={"about_places"}
								/>
							) : (
								<AddDetailLink text={"Add a current city"} to={"about_places"} />
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Hometown" />
							{hometown ? (
								<ExistingDetailSwitch
									id="hometown"
									value={`From ${hometown.city}${
										hometown.state ? `, ${hometown.state}` : ""
									}`}
									register={register("hometown.hometown")}
									to={"about_places"}
								/>
							) : (
								<AddDetailLink text={"Add a hometown"} to={"about_places"} />
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Relationship" />
							{user.relationshipStatus?.status ? (
								<ExistingDetailSwitch
									id="relationshipStatus"
									value={formatRelationshipStatus({
										partner: user.relationshipStatus.partner as IUser,
										status: user.relationshipStatus.status,
									})}
									register={register("relationshipStatus.relationshipStatus")}
									to={"about_family_and_relationships"}
								/>
							) : (
								<AddDetailLink
									text={"Add a relationship"}
									to={"about_family_and_relationships"}
								/>
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Name pronunciation" />
							{user.namePronunciation ? (
								<ExistingDetailSwitch
									id="namePronunciation"
									value={user.namePronunciation.fullName}
									register={register("namePronunciation.namePronunciation")}
									to={"about_details"}
								/>
							) : (
								<AddDetailLink text={"Add a name pronunciation"} to={"about_details"} />
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Joined Odinbook" />
							{user.createdAt && (
								<ExistingDetailSwitch
									id="joined"
									value={formattedJoined}
									register={register("joined.joined")}
									to={"about_details"}
								/>
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle
								title="Websites"
								subtitle={[
									"To feature links on your profile, set the audience to ",
									<strong key="public">Public</strong>,
									".",
								]}
								rightColumn={
									user.websites &&
									user.websites.length > 0 && (
										<AudienceRadio<DetailsFormFields>
											formField="websites"
											initial={defaultValues.websites}
											control={control}
											setValue={setValue}
											submitsForm={false}
											submitButtonText="Done"
										/>
									)
								}
							/>
							{user.websites?.length ? (
								user.websites.map((websiteUrl) => (
									<ExistingDetailSwitch
										key={websiteUrl}
										id="websites"
										value={websiteUrl}
										to={"about_contact_and_basic_info"}
										register={undefined}
										icon={<Icon path={mdiWeb} size={1} color={"#65676B"} />}
									/>
								))
							) : (
								<AddDetailLink text={"Add a website"} to={"about_details"} />
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle
								title="Social Links"
								subtitle={[
									"To feature links on your profile, set the audience to ",
									<strong key="public">Public</strong>,
									".",
								]}
								rightColumn={
									user.socialLinks &&
									user.socialLinks.length > 0 && (
										<AudienceRadio<DetailsFormFields>
											formField="socialLinks"
											initial={defaultValues.socialLinks}
											control={control}
											setValue={setValue}
											submitsForm={false}
											submitButtonText="Done"
										/>
									)
								}
							/>
							{user.socialLinks?.length ? (
								user.socialLinks.map(({ username, platform }) => {
									return (
										<ExistingDetailSwitch
											key={`${platform}${username}`}
											id="socialLinks"
											value={username}
											to={"about_contact_and_basic_info"}
											register={undefined}
											icon={
												<Icon
													path={getSocialLinkImage(platform)}
													size={1}
													color={"#65676B"}
												/>
											}
										/>
									);
								})
							) : (
								<AddDetailLink text={"Add a social link"} to={"about_details"} />
							)}
						</SectionContainer>
					</FormContentContainer>
					<DialogActions<DetailsFormFields>
						handleCancel={closeDialog}
						unsavedValue={undefined}
						initial={undefined}
						handleSave={undefined}
					/>
				</form>
			</StyledDetailsFormDialog>
		);
	},
);

EditDetailsForm.displayName = "EditDetailsForm";

export default EditDetailsForm;
