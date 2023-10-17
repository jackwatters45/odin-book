import { Dispatch, FormEvent, SetStateAction } from "react";
import { Control, UseFormRegister, UseFormSetValue } from "react-hook-form";

import DialogHeader from "@/components/Shared/DialogHeader";
import ContentTextArea from "./CreatePostTextArea";
import UserInfo from "./CreatePostUserInfo";
import PhotoForm from "../AddToPost/Photo/Form";
import { StandardButtonFullWidth } from "@/styles/SharedStyles";
import { CreatePostFormValues, InitialOpenedState } from "../types/CreatePostTypes";
import useBaseCreatePostForm from "./useBaseCreatePostForm";
import AddToPostButtons from "./AddToPostButtons";
import {
	StyledCreatePostForm,
	StyledMainFormContainer,
} from "./BaseCreatePostForm.styles";
import { PhotoPreviews } from "../AddToPost/Photo/types/PhotoTypes";

interface BaseCreatePostFormProps {
	isPreviousDefault: boolean;
	closeDialog: () => void;
	formValues: CreatePostFormValues;
	initialOpenedState: InitialOpenedState;
	setValue: UseFormSetValue<CreatePostFormValues>;
	control: Control<CreatePostFormValues>;
	register: UseFormRegister<CreatePostFormValues>;
	submitForm: (e: FormEvent<HTMLFormElement>) => void;
	toggleIsTaggingUsers: () => void;
	toggleIsAddingFeeling: () => void;
	toggleIsCheckingIn: () => void;
	photoPreviews: PhotoPreviews;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const BaseCreatePostForm = ({
	isPreviousDefault,
	closeDialog,
	formValues,
	initialOpenedState,
	setValue,
	control,
	register,
	submitForm,
	photoPreviews,
	setPhotoPreviews,
	...toggleSetStateOptions
}: BaseCreatePostFormProps) => {
	const {
		currentUser,
		addPhotoState: [isAddingPhoto, toggleIsAddingPhoto],
		isSubmitDisabled,
	} = useBaseCreatePostForm({
		formValues,
		initialOpenedState,
	});

	return (
		<StyledMainFormContainer $isPreviousDefault={isPreviousDefault}>
			<DialogHeader title={"Create post"} closeDialog={closeDialog} />
			<StyledCreatePostForm onSubmit={submitForm}>
				<UserInfo
					setValue={setValue}
					control={control}
					avatarUrl={currentUser?.avatarUrl}
					fullName={currentUser?.fullName}
					userId={currentUser?._id}
					formValues={formValues}
				/>
				<ContentTextArea
					register={register("content")}
					isPhotosSelected={photoPreviews.length > 0}
				/>
				{(photoPreviews.length > 0 || isAddingPhoto) && (
					<PhotoForm
						toggleIsAddingPhoto={toggleIsAddingPhoto}
						control={control}
						setValue={setValue}
						photoPreviews={photoPreviews}
						setPhotoPreviews={setPhotoPreviews}
					/>
				)}
				<AddToPostButtons
					formValues={formValues}
					isAddingPhoto={isAddingPhoto}
					toggleIsAddingPhoto={toggleIsAddingPhoto}
					{...toggleSetStateOptions}
				/>
				<StandardButtonFullWidth
					text="Post"
					type="submit"
					disabled={isSubmitDisabled}
					colorClass={isSubmitDisabled ? undefined : "blue"}
				/>
			</StyledCreatePostForm>
		</StyledMainFormContainer>
	);
};

export default BaseCreatePostForm;
