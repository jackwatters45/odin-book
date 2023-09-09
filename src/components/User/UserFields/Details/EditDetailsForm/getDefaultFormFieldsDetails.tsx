import DetailsFormFields from "@/types/DetailsFormFields";
import { IUser } from "@/types/IUser";

const getDefaultFormStateDetails = ({ intro, ...user }: IUser): DetailsFormFields => {
	if (!intro) {
		return {
			pronouns: { pronouns: false },
			work: {},
			education: {},
			currentCity: { currentCity: false },
			hometown: { hometown: false },
			relationshipStatus: { relationshipStatus: false },
			namePronunciation: { namePronunciation: false },
			joined: { joined: false },
			websites: { websites: "Only Me" },
			socialLinks: { socialLinks: "Only Me" },
		};
	}

	const pronouns = user.pronouns
		? { pronouns: intro?.pronouns?.["pronouns"] ?? false }
		: undefined;

	const work = user.work?.reduce((acc, workRecord) => {
		acc[workRecord._id] = intro?.work?.[workRecord._id] ?? false;
		return acc;
	}, {} as Record<string, boolean>);

	const education = user.education?.reduce((acc, educationRecord) => {
		acc[educationRecord._id] = intro?.education?.[educationRecord._id] ?? false;
		return acc;
	}, {} as Record<string, boolean>);

	const { placesLived } = user;

	let hometown = undefined;
	let currentCity = undefined;

	if (placesLived) {
		for (const place of placesLived) {
			if (place.type === "hometown") {
				hometown = { hometown: intro?.hometown?.["hometown"] ?? false };
			} else if (place.type === "current") {
				currentCity = { currentCity: intro?.currentCity?.["currentCity"] ?? false };
			}
		}
	}

	const relationshipStatus = user.relationshipStatus
		? { relationshipStatus: intro?.relationshipStatus?.["relationshipStatus"] ?? false }
		: undefined;

	const namePronunciation = user.namePronunciation
		? { namePronunciation: intro?.namePronunciation?.["namePronunciation"] ?? false }
		: undefined;

	const joined = { joined: intro?.joined?.["joined"] ?? false };

	const websites: DetailsFormFields["websites"] = user.websites
		? { websites: intro?.websites?.["websites"] ?? "Only Me" }
		: undefined;

	const socialLinks: DetailsFormFields["socialLinks"] = user.socialLinks
		? { socialLinks: intro?.socialLinks?.["socialLinks"] ?? "Only Me" }
		: undefined;

	return {
		pronouns,
		work,
		education,
		currentCity,
		hometown,
		relationshipStatus,
		namePronunciation,
		joined,
		websites,
		socialLinks,
	};
};

export default getDefaultFormStateDetails;
