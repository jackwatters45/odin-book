const encodeWebsiteId = (websiteId: string | undefined) => {
	if (!websiteId) return undefined;
	return websiteId.replace(/\./g, "%2E");
};
export default encodeWebsiteId;
