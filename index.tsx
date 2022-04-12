import { renderHook } from "@testing-library/react-hooks";
import * as React from "react";


const DummyWrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	return <>{children}</>;
};

const useDummyHook = () => {};

describe("demo", () => {
	it("shows bug in typing", () => {
		const wrapper = ({ children }: { children?: React.ReactNode }) => <DummyWrapper>{children}</DummyWrapper>;
		const out = renderHook((options: { foo: string }) => useDummyHook(), {
			wrapper, // <-- Error: TS2322
			initialProps: { foo: "bar" },
		});
	});
});