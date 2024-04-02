const scriptConfig = [
    {
        choice: "Start",
        dialogue: "\"Oh No! There's a dragon!\"",
        scene: "A dragon is in front of you!",
        options: ["Run", "Fight", "Talk"]
      },
      {
        choice: "Run",
        dialogue: "There's a wall in front of you.",
        scene: "You're facing a high wall, blocking your path.",
        options: ["Start"]
      },
      {
        choice: "Fight",
        dialogue: "The dragon breathes fire!",
        scene: "Flames rush towards you as the dragon attacks.",
        options: ["Start"]
      },
      {
        choice: "Talk",
        dialogue: "What do you say?",
        scene: "The dragon looks at you curiously, waiting for your words.",
        options: ["Friendly", "Aggressive"]
      },
      {
          choice: "Friendly",
          dialogue: "\"We should be friends!\"",
          scene: "You stretch out a hand in friendship towards the dragon.",
          options: ["Start"]
      },
      {
        choice: "Aggressive",
        dialogue: "\"From Hell's heart, I stab at thee!\"",
        scene: "With a fierce gaze, you confront the dragon, ready for battle.",
        options: ["Start"]
      },
];

export default scriptConfig;