import React from "react";

const moodCategories = {
    "😄": "positive",
    "😊": "positive",
    "😐": "neutral",
    "😞": "negative",
    "😠": "negative",
    "😭": "negative",
};

const weeklyActions = {
    positive: [
        {
            title: "Keep the Good Vibes Going",
            actions: [
                "You're on a roll! Set a small goal to keep the momentum.",
                "Share your joy—send a compliment to someone.",
                "Gratitude journaling will amplify this good vibe.",
            ],
        },
        {
            title: "Spread Positivity",
            actions: [
                "Celebrate a small win with a treat.",
                "Leave a positive review for a local business.",
                "Start your day with an uplifting playlist.",
            ],
        },
        {
            title: "Anchor in the Joy",
            actions: [
                "Savor your favorite drink slowly and mindfully.",
                "Create a playlist that feels like sunshine.",
                "Reflect on one thing that made you laugh this week.",
            ],
        },
        {
            title: "Shine It Forward",
            actions: [
                "Send an encouraging message to someone unexpectedly.",
                "Donate to a cause you believe in—even a little helps.",
                "Make time to simply enjoy being—you’ve earned it.",
            ],
        },
    ],
    negative: [
        {
            title: "Gentle Reset",
            actions: [
                "Been a tough week? Make time for self-care this weekend.",
                "Reach out to a friend or family member for a quick chat.",
                "Try journaling or walking to process emotions gently.",
            ],
        },
        {
            title: "Mood Boost",
            actions: [
                "Watch a comfort movie or show tonight.",
                "Write down three things that made you smile recently.",
                "Light a candle, make tea, and slow down.",
            ],
        },
        {
            title: "Climb Out Slowly",
            actions: [
                "Do one kind thing for your future self—like tidying a corner.",
                "Name one emotion you're feeling right now without judgment.",
                "Breathe deeply for one minute. That's all. Just breathe.",
            ],
        },
        {
            title: "Soothe the Storm",
            actions: [
                "Wrap yourself in a blanket and rest—no guilt, just grace.",
                "Listen to soft instrumental music while lying still.",
                "Let one tear fall, if it needs to. You're human. It's okay.",
            ],
        },
    ],
    neutral: [
        {
            title: "Mix It Up",
            actions: [
                "Feeling meh? Try something new—food, hobby, or route.",
                "Plan one small thing just for you this week.",
                "Maybe declutter a little—it helps shift the mood.",
            ],
        },
        {
            title: "Spark a Shift",
            actions: [
                "Text someone you haven't talked to in a while.",
                "Try a 10-minute meditation session.",
                "Switch up your workspace or room layout.",
            ],
        },
        {
            title: "Stir the Stillness",
            actions: [
                "Listen to music from a genre you rarely explore.",
                "Step outside, even for five minutes—just notice things.",
                "Draw something silly or random, just for the fun of it.",
            ],
        },
        {
            title: "Gently Rekindle",
            actions: [
                "Revisit an old photo album or memory box.",
                "Try writing one paragraph about your current day.",
                "Ask yourself: What do I need more of this week?",
            ],
        },
    ],
};

function WeeklyActions({ moods }) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 6);

    const weeklyMoods = moods.filter((m) => new Date(m.date) >= oneWeekAgo);

    const moodCount = { positive: 0, negative: 0, neutral: 0 };

    for (const m of weeklyMoods) {
        const category = moodCategories[m.mood];
        if (category) moodCount[category]++;
    }

    const dominantCategory = Object.entries(moodCount).sort((a, b) => b[1] - a[1])[0]?.[0];

    if (!dominantCategory || weeklyMoods.length === 0) return null;

    const options = weeklyActions[dominantCategory];
    const randomSet = options[Math.floor(Math.random() * options.length)];

    return (
        <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold text-center mb-4">{randomSet.title}</h2>
            <ul className="text-gray-700 space-y-3">
                {randomSet.actions.map((action, idx) => (
                    <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:top-0" key={idx}>{action}</li>
                ))}
            </ul>
        </div>
    );
}

export default WeeklyActions;