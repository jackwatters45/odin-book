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
import getSocialLinkImage from "../../SocialLinks/utils/socialLinkImages";
import AudienceRadio from "@/components/Shared/AudienceRadio";
import DetailsFormFields from "@/components/User/UserFields/Details/types/DetailsTypes";
import formatWorkData from "../../Work/utils/formatWorkValue";
import { formatEducationTitle } from "../../Education/utils/formatEducationData";
import formatRelationshipStatus from "../../RelationshipStatus/utils/formatRelationshipStatus";
import getFullName from "../../NamePronunciation/utils/getFullName";

interface EditDetailsFormProps {
	user: IUser;
	closeDialog: () => void;
	closeAllDialogs: () => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	register: UseFormReturn<DetailsFormFields>["register"];
	control: UseFormReturn<DetailsFormFields>["control"];
	setValue: UseFormReturn<DetailsFormFields>["setValue"];
}

const EditDetailsForm = forwardRef<HTMLDialogElement, EditDetailsFormProps>(
	(
		{ user, closeDialog, closeAllDialogs, onSubmit, register, control, setValue },
		ref,
	) => {
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
									to={"about/contact_and_basic_info"}
									onClickLink={closeAllDialogs}
								/>
							) : (
								<AddDetailLink
									text={"Add pronouns to your profile"}
									to={"about/contact_and_basic_info"}
									onClick={closeAllDialogs}
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
											onClickLink={closeAllDialogs}
											to={"about/work_and_education"}
										/>
									);
								})}
							<AddDetailLink
								text={"Add a workplace"}
								to={"about/work_and_education"}
								onClick={closeAllDialogs}
							/>
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
											onClickLink={closeAllDialogs}
											to={"about/work_and_education"}
										/>
									);
								})}
							<AddDetailLink
								text={"Add high school or college"}
								onClick={closeAllDialogs}
								to={"about/work_and_education"}
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
									onClickLink={closeAllDialogs}
									to={"about/places"}
								/>
							) : (
								<AddDetailLink
									text={"Add a current city"}
									to={"about/places"}
									onClick={closeAllDialogs}
								/>
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
									onClickLink={closeAllDialogs}
									to={"about/places"}
								/>
							) : (
								<AddDetailLink
									text={"Add a hometown"}
									to={"about/places"}
									onClick={closeAllDialogs}
								/>
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Relationship" />
							{user.relationshipStatus?.status ? (
								<ExistingDetailSwitch
									id="relationshipStatus"
									value={formatRelationshipStatus({
										partner: user.relationshipStatus.user as IUser,
										status: user.relationshipStatus.status,
									})}
									register={register("relationshipStatus.relationshipStatus")}
									onClickLink={closeAllDialogs}
									to={"about/family_and_relationships"}
								/>
							) : (
								<AddDetailLink
									text={"Add a relationship"}
									to={"about/family_and_relationships"}
									onClick={closeAllDialogs}
								/>
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Name pronunciation" />
							{user.namePronunciation ? (
								<ExistingDetailSwitch
									id="namePronunciation"
									value={getFullName(
										user.namePronunciation.firstName,
										user.namePronunciation.lastName,
									)}
									register={register("namePronunciation.namePronunciation")}
									onClickLink={closeAllDialogs}
									to={"about/details"}
								/>
							) : (
								<AddDetailLink
									text={"Add a name pronunciation"}
									to={"about/details"}
									onClick={closeAllDialogs}
								/>
							)}
						</SectionContainer>
						<SectionContainer>
							<SectionTitle title="Joined Odinbook" />
							{user.createdAt && (
								<ExistingDetailSwitch
									id="joined"
									value={formattedJoined}
									register={register("joined.joined")}
									onClickLink={closeAllDialogs}
									to={"about/details"}
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
										to={"about/contact_and_basic_info"}
										register={undefined}
										onClickLink={closeAllDialogs}
										icon={<Icon path={mdiWeb} size={1} color={"#65676B"} />}
									/>
								))
							) : (
								<AddDetailLink
									text={"Add a website"}
									to={"about/details"}
									onClick={closeAllDialogs}
								/>
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
											onClickLink={closeAllDialogs}
											to={"about/contact_and_basic_info"}
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
								<AddDetailLink
									text={"Add a social link"}
									to={"about/details"}
									onClick={closeAllDialogs}
								/>
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
