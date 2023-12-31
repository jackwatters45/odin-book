import { Dispatch, FormEvent, SetStateAction } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import DialogHeader from "@/components/Shared/DialogHeader";
import PhotoForm from "../AddToPost/Photo/Form";
import { StandardButtonFullWidth } from "@/styles/SharedStyles";
import { PostFormValues, InitialOpenedState } from "../types/PostFormTypes";
import useBasePostForm from "./useBasePostForm";
import AddToPostButtons from "./AddToPostButtons";
import {
	StyledBaseFormScrollContainer,
	StyledBasePostForm,
	StyledMainFormContainer,
} from "./BasePostForm.styles";
import { PhotoPreviews } from "../AddToPost/Photo/types/PhotoTypes";
import UserInfo from "./PostUserInfo";
import ContentTextArea from "./PostTextArea";
import PostSharedFrom from "../../Shared/PostSharedFrom/PostSharedForm";
import { PostFormInitialValues } from "../context/PostFormContext";

interface BasePostFormProps {
	isEditing: boolean;
	isSubmitting: boolean;
	isPreviousDefault: boolean;
	closeDialog: () => void;
	initialValues: PostFormInitialValues | undefined;
	formValues: PostFormValues;
	initialOpenedState: InitialOpenedState;
	setValue: UseFormSetValue<PostFormValues>;
	control: Control<PostFormValues>;
	submitForm: (e: FormEvent<HTMLFormElement>) => void;
	toggleIsTaggingUsers: () => void;
	toggleIsAddingFeeling: () => void;
	toggleIsCheckingIn: () => void;
	photoPreviews: PhotoPreviews;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const BasePostForm = ({
	isEditing,
	isSubmitting,
	initialValues,
	isPreviousDefault,
	closeDialog,
	formValues,
	initialOpenedState,
	setValue,
	control,
	submitForm,
	photoPreviews,
	setPhotoPreviews,
	...toggleSetStateOptions
}: BasePostFormProps) => {
	const {
		currentUser,
		addPhotoState: [isAddingPhoto, toggleIsAddingPhoto],
		isSubmitDisabled,
		sharedFromData,
		mediaData,
	} = useBasePostForm({
		formValues,
		initialOpenedState,
		initialValues,
	});

	return (
		<StyledMainFormContainer $isPreviousDefault={isPreviousDefault}>
			<DialogHeader
				title={`${isEditing ? "Edit" : "Create"} post`}
				closeDialog={closeDialog}
			/>
			<StyledBasePostForm onSubmit={submitForm}>
				<UserInfo
					setValue={setValue}
					control={control}
					avatarUrl={currentUser?.avatarUrl}
					fullName={currentUser?.fullName as string}
					userId={currentUser?._id as string}
					formValues={formValues}
				/>
				<StyledBaseFormScrollContainer>
					<ContentTextArea
						initialValue={formValues?.content || ""}
						setValue={setValue}
						isPhotosSelected={photoPreviews.length > 0}
					/>
					{(photoPreviews.length > 0 || formValues?.media?.length || isAddingPhoto) && (
						<PhotoForm
							control={control}
							setValue={setValue}
							photoPreviews={photoPreviews}
							savedMedia={mediaData}
							setPhotoPreviews={setPhotoPreviews}
						/>
					)}
					{sharedFromData?._id && <PostSharedFrom sharedFromPost={sharedFromData} />}
				</StyledBaseFormScrollContainer>
				{!sharedFromData?._id && (
					<AddToPostButtons
						formValues={formValues}
						isAddingPhoto={isAddingPhoto}
						toggleIsAddingPhoto={toggleIsAddingPhoto}
						{...toggleSetStateOptions}
					/>
				)}
				<StandardButtonFullWidth
					text={isSubmitting ? "Submitting..." : isEditing ? "Save" : "Post"}
					type="submit"
					disabled={isSubmitDisabled}
					colorClass={isSubmitting ? "light-blue" : isSubmitDisabled ? undefined : "blue"}
				/>
			</StyledBasePostForm>
		</StyledMainFormContainer>
	);
};

export default BasePostForm;
