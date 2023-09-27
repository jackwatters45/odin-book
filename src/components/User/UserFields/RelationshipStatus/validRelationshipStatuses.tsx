const VALID_RELATIONSHIP_STATUSES_ARRAY = [
	{ status: "single", partner: null },
	{ status: "in a relationship", partner: "string" },
	{ status: "engaged", partner: "string" },
	{ status: "married", partner: "string" },
	{ status: "in a civil union", partner: "string" },
	{ status: "in a domestic partnership", partner: "string" },
	{ status: "in an open relationship", partner: "string" },
	{ status: "it's complicated", partner: "string" },
	{ status: "separated", partner: "string" },
	{ status: "divorced", partner: "string" },
	{ status: "widowed", partner: "string" },
] as const;

export default VALID_RELATIONSHIP_STATUSES_ARRAY;
