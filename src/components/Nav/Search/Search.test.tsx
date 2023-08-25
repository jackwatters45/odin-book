import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router";

import Search from "./Search";
import TestEnvironmentWrapper from "../../../../config/tests/Utils/setupRender";

const mockSearchData = [
	{ fullName: "Test", avatarUrl: "url1", isFriend: true },
	{ fullName: "Test 2", avatarUrl: "url2", isFriend: false },
	{ fullName: "Test 3", avatarUrl: "url3", isFriend: false },
];

vi.mock("./useSearch", async () => ({
	...((await vi.importActual("./useSearch")) as typeof import("./useSearch")),
	default: () => ({
		register: vi.fn(),
		data: mockSearchData,
		searchQuery: "Test",
	}),
}));

describe("Search Component", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/"]}>
				<Route path="/" element={<Search />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing", () => {
		expect(screen.getByPlaceholderText("Search Odin Book")).toBeInTheDocument();
	});

	it("displays search query correctly", async () => {
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText("Search Odin Book");

		await user.click(input);
		await user.type(input, "Test");
		expect(screen.getByText("Search for Test")).toBeInTheDocument();
	});

	it("displays search results correctly", async () => {
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText("Search Odin Book");

		await user.type(input, "Test");

		expect(screen.getByText("Test")).toBeInTheDocument();
		expect(screen.getByText("Test 2")).toBeInTheDocument();
		expect(screen.getByText("Test 3")).toBeInTheDocument();
	});

	it("displays friend label for friends", async () => {
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText("Search Odin Book");
		await user.type(input, "Test");

		const friendLabel = screen.getAllByText("Friend")[0];
		expect(friendLabel).toBeInTheDocument();

		const parentContainer = friendLabel.parentElement?.parentElement;

		expect(parentContainer).toHaveTextContent("Test");
		expect(parentContainer).toHaveTextContent("Friend");
	});
});
