export const feelings = [
	{ name: "Happy", emoji: "😀" },
	{ name: "Sad", emoji: "😢" },
	{ name: "Angry", emoji: "😡" },
	{ name: "Excited", emoji: "😆" },
	{ name: "Tired", emoji: "😴" },
	{ name: "Hungry", emoji: "🍔" },
	{ name: "Sick", emoji: "🤢" },
	{ name: "Bored", emoji: "😐" },
	{ name: "Confused", emoji: "🤔" },
	{ name: "Anxious", emoji: "😰" },
	{ name: "Surprised", emoji: "😮" },
	{ name: "Insecure", emoji: "🙇" },
	{ name: "Frustrated", emoji: "😖" },
	{ name: "Hopeless", emoji: "😔" },
	{ name: "Joyful", emoji: "🤩" },
	{ name: "Astonished", emoji: "😲" },
	{ name: "Guilty", emoji: "😳" },
	{ name: "Inspired", emoji: "✨" },
	{ name: "Gloomy", emoji: "🌧️" },
	{ name: "Cheerful", emoji: "😃" },
	{ name: "Energetic", emoji: "🌞" },
	{ name: "Skeptical", emoji: "🙄" },
	{ name: "Disappointed", emoji: "😞" },
	{ name: "Adventurous", emoji: "🏞️" },
	{ name: "Amused", emoji: "😄" },
	{ name: "Indifferent", emoji: "😑" },
	{ name: "Optimistic", emoji: "😁" },
	{ name: "Pessimistic", emoji: "😩" },
	{ name: "Motivated", emoji: "💪" },
	{ name: "Devastated", emoji: "😭" },
	{ name: "Afraid", emoji: "😱" },
	{ name: "Elated", emoji: "🎉" },
	{ name: "Grateful", emoji: "🙏" },
	{ name: "Impatient", emoji: "⏳" },
	{ name: "Overwhelmed", emoji: "😵" },
	{ name: "Loved", emoji: "❤️" },
	{ name: "Lonely", emoji: "👤" },
	{ name: "Relieved", emoji: "😌" },
	{ name: "Shy", emoji: "😳" },
	{ name: "Hopeful", emoji: "🌠" },
	{ name: "Jealous", emoji: "💚" },
	{ name: "Disgusted", emoji: "😝" },
	{ name: "Embarrassed", emoji: "🤭" },
	{ name: "Flirty", emoji: "😉" },
	{ name: "Irritated", emoji: "😒" },
	{ name: "Nostalgic", emoji: "📼" },
	{ name: "Regretful", emoji: "😣" },
	{ name: "Proud", emoji: "🦚" },
	{ name: "Unsure", emoji: "🤷" },
	{ name: "Envious", emoji: "😒" },
];

export const getFeelingEmoji = (feeling: string) =>
	feelings.find((f) => f.name === feeling)?.emoji;

export type FeelingsType = (typeof feelings)[number];
