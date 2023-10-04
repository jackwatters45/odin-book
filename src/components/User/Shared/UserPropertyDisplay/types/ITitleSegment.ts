type ITitleSegment =
	| { type: "text"; content: string }
	| { type: "bold"; content: string }
	| { type: "link"; content: string; linkTo: string };

export default ITitleSegment;
