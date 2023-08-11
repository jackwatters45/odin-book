import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "jest-styled-components";

import Loading from "../../src/components/Shared/Loading";

describe("Loading Component", () => {
	it("renders without crashing", () => {
		render(<Loading />);
		const spinner = document.querySelector("div");
		expect(spinner).toBeInTheDocument();
	});

	it("applies correct styles based on the size prop", () => {
		const { container } = render(<Loading size={40} />);
		const spinner = container.firstChild as HTMLElement;

		expect(spinner).toHaveStyleRule("width: 40px");
		expect(spinner).toHaveStyleRule("height: 40px");
		expect(spinner).toHaveStyleRule("border: 10px solid #f3f3f3");
		expect(spinner).toHaveStyleRule("border-top: 10px solid rgba(55, 55, 55, 0.5)");
	});

	it("applies correct className based on the className prop", () => {
		const { container } = render(<Loading className="test" />);
		const spinner = container.firstChild as HTMLElement;

		expect(spinner).toHaveClass("test");
	});

	it("has the spin animation", () => {
		const { container } = render(<Loading />);
		const spinner = container.firstChild as HTMLElement;

		const style = window.getComputedStyle(spinner);
		expect(style.animationName).toBeDefined();
	});

	it("matches the snapshot", () => {
		const { asFragment } = render(<Loading />);
		expect(asFragment()).toMatchSnapshot();
	});
});
