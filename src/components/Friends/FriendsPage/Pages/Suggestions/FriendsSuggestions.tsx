import Friends from "../../Components";
import FriendsSuggestionsNav from "./Nav";
import FriendsSuggestionsContent from "./Content";

const FriendsSuggestions = () => {
	return (
		<Friends Nav={<FriendsSuggestionsNav />} Content={<FriendsSuggestionsContent />} />
	);
};

export default FriendsSuggestions;
