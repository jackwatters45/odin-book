import { FriendPreview } from "../../types/FriendsTypes";
import { StyledHr } from "./FriendsHome.styles";
import FriendsHomeRequests from "./Sections/FriendsHomeRequests";
import FriendsHomeSuggestions from "./Sections/Suggestions/FriendsHomeSuggestions";

const FRIENDS: FriendPreview[] = [
	{
		fullName: "John Doe",
		_id: "1",
		mutualFriends: [
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "Jane Doe",
				_id: "3",
			},
		],
	},
	{
		fullName: "Patricia Doe",
		_id: "4",
		mutualFriends: [
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "Jane Doe",
				_id: "3",
			},
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "Peter Doe",
				_id: "2",
			},
		],
	},
	{
		fullName: "Jane Doe",
		_id: "3",
		mutualFriends: [],
	},
	{
		fullName: "Peter Doe",
		_id: "6",
		mutualFriends: [
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "John Doe",
				_id: "1",
			},
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "Jane Doe",
				_id: "3",
			},
		],
	},
	{
		fullName: "Patricia Doe",
		_id: "7",
		mutualFriends: [
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "John Doe",
				_id: "1",
			},
			{
				avatarUrl: "https://i.imgur.com/1d6Q1Za.jpg",
				fullName: "Jane Doe",
				_id: "3",
			},
		],
	},
];

// TODO Fetch

const FriendsHome = () => {
	return (
		<>
			<FriendsHomeRequests />
			<StyledHr />
			<FriendsHomeSuggestions />
		</>
	);
};

export default FriendsHome;
