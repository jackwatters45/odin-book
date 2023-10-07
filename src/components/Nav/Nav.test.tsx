import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router";

import Nav from ".";
import TestEnvironmentWrapper from "../../config/tests/Utils/setupRender";
import * as useCurrentUser from "../../hooks/useCurrentUser";

window.fetch = vi
	.fn()
	.mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify({}))));

describe("Nav Component", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/nav"]}>
				<Route path="/nav" element={<Nav />} />
				<Route path="/login" element={<>login component</>} />
				<Route path="/" element={<div>Dashboard</div>} />
				<Route path="/friends" element={<div>Friends</div>} />
				<Route path="/notifications" element={<div>Notifications</div>} />
				<Route path="/profile" element={<div>Profile</div>} />
				<Route path="/settings" element={<div>Settings</div>} />
				<Route path="/create" element={<div>Create</div>} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing", () => {
		expect(screen.getByTestId("dashboard-button")).toBeInTheDocument();
	});

	it("renders the search bar", () => {
		expect(screen.getByTestId("search-dropdown")).toBeInTheDocument();
	});

	it("renders the home button", () => {
		expect(screen.getByTestId("home-button")).toBeInTheDocument();
	});

	it("renders the friends button", () => {
		expect(screen.getByTestId("friends-button")).toBeInTheDocument();
	});

	it("renders the notifications button", () => {
		expect(screen.getByTestId("notifications-button")).toBeInTheDocument();
	});

	it("renders the create button", () => {
		expect(screen.getByTestId("create-button")).toBeInTheDocument();
	});

	it("renders the profile button", () => {
		expect(screen.getByTestId("profile-dropdown")).toBeInTheDocument();
	});

	it("renders the profile dropdown options ", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("profile-dropdown"));

		expect(screen.getByTestId("profile-button")).toBeInTheDocument();
		expect(screen.getByTestId("settings-button")).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId("logout-button")).toBeInTheDocument();
		});
	});

	it("clicking dashboard button redirects to dashboard", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("dashboard-button"));
		expect(screen.getByText("Dashboard")).toBeInTheDocument();
	});

	it("clicking home button redirects to home", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("home-button"));
		expect(screen.getByText("Dashboard")).toBeInTheDocument();
	});

	it("clicking friends button redirects to friends", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("friends-button"));
		expect(screen.getByText("Friends")).toBeInTheDocument();
	});

	it("clicking notifications button redirects to notifications", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("notifications-button"));
		expect(screen.getByText("Notifications")).toBeInTheDocument();
	});

	it("clicking create button redirects to create", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("create-button"));
		expect(screen.getByText("Create")).toBeInTheDocument();
	});

	it("clicking profile button redirects to profile", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("profile-dropdown"));
		await user.click(screen.getByTestId("profile-button"));
		expect(screen.getByText("Profile")).toBeInTheDocument();
	});

	it("clicking settings button redirects to settings", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("profile-dropdown"));
		await user.click(screen.getByTestId("settings-button"));
		expect(screen.getByText("Settings")).toBeInTheDocument();
	});

	it("clicking logout button redirects to login", async () => {
		const user = userEvent.setup();
		await user.click(screen.getByTestId("profile-dropdown"));
		await user.click(screen.getByTestId("logout-button"));
		expect(screen.getByText("login component")).toBeInTheDocument();
	});

	it("if no current user, redirects to login", async () => {
		vi.spyOn(useCurrentUser, "default").mockReturnValue({
			currentUser: null,
			isSuccess: true,
			isError: false,
			isLoading: false,
			error: null,
		});

		render(
			<TestEnvironmentWrapper initialRoute={["/nav"]}>
				<Route path="/nav" element={<Nav />} />
				<Route path="/login" element={<>login component</>} />
			</TestEnvironmentWrapper>,
		);

		expect(screen.getByText("login component")).toBeInTheDocument();
	});
});
