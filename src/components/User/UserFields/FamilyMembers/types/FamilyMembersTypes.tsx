import { IUser } from "@/types/IUser";

export const FamilyRelationshipOptions = [
	"Mother",
	"Father",
	"Daughter",
	"Son",
	"Sister",
	"Brother",
	"Aunt",
	"Uncle",
	"Nephew",
	"Cousin (female)",
	"Cousin (male)",
	"Grandmother",
	"Grandfather",
	"Granddaughter",
	"Grandson",
	"Stepsister",
	"Stepbrother",
	"Stepmother",
	"Stepfather",
	"Stepdaughter",
	"Stepson",
	"Sister-in-law",
	"Brother-in-law",
	"Mother-in-law",
	"Father-in-law",
	"Daughter-in-law",
	"Son-in-law",
	"Sibling",
	"Parent",
	"Child",
	"Sibling of Parent",
	"Child of Sibling",
	"Cousin",
	"Grandparent",
	"Grandchild",
	"Step Sibling",
	"Step Parent",
	"Step Child",
	"Sibling-in-law",
	"Parent-in-law",
	"Child-in-law",
	"Family member",
	"Pet",
];

export type FamilyRelationshipOptionsType = (typeof FamilyRelationshipOptions)[number];

export type FamilyMember = {
	_id: string;
	user: Partial<IUser>;
	relationship: FamilyRelationshipOptionsType;
};
