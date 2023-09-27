export const relationshipStatusPrepositions = {
	single: null,
	"in a relationship": "with",
	engaged: "to",
	married: "to",
	"in a civil union": "with",
	"in a domestic partnership": "with",
	"in an open relationship": "with",
	"it's complicated": "with",
	separated: "from",
	divorced: "from",
	widowed: "from",
};

const getRelationshipStatusPreposition = (
	relationshipStatus: keyof typeof relationshipStatusPrepositions | undefined,
) => {
	if (!relationshipStatus) return null;
	return relationshipStatusPrepositions[relationshipStatus];
};

export default getRelationshipStatusPreposition;
