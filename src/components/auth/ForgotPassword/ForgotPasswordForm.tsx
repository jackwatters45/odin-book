const ForgotPasswordForm = () => {
	return (
		<div>
			<h1>Find your account</h1>
			<p>Please enter your email or mobile number to search for your account.</p>
			<form>
				<input type="text" placeholder="Email or phone number" />
				<input type="button" value="Cancel" />
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default ForgotPasswordForm;
