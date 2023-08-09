const checkEnvVariableString = (name: string) => {
	const variable = import.meta.env[name];
	if (!variable) {
		console.log(`${name} not defined`);
		throw new Error(`${name} not defined`);
	}
	return variable;
};

export const nodeEnv = checkEnvVariableString("VITE_NODE_ENV");

export const apiRoot =
	nodeEnv === "production"
		? checkEnvVariableString("VITE_PROD_API_ROOT")
		: checkEnvVariableString("VITE_DEV_API_ROOT");

export const apiVersion = checkEnvVariableString("VITE_API_VERSION");

export const apiBaseUrl = `${apiRoot}/${apiVersion}`;
