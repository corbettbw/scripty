export const scriptConfig = [
    {
        choice: "Start",
        dialogue: `"Oh No! There's a <b style="color:red;">dragon!</b>"`,
        scene: `A <b style="color:green;">dragon</b> is in front of you!`,
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

export const frequentlyAskedQuestions = [
    {
        choice: "Who Are You?",
        dialogue: "\"Magiq is a third adventuring party retained by Dragon's Hoard Bank to administer this program. Do you have any other questions for me?\"",
        scene: "Provide this response if the caller asks who the agent is, or expresses confusion as to whether they are calling Dragon's Hoard Bank. \n If caller does not find the answer sufficient, transfer to supervisor.",
        options: ["Further Questions", "Closing Statement", "Transfer to Supervisor"]
    },
    {
        choice: "Caller Asks Personal Questions",
        dialogue: "\"I'm sorry, it is the policy of Magiq that we cannot give out personal information about ourselves. Do you have any other questions for me?\"",
        scene: "Provide this response if the caller asks any personal inforamtion about the agent, including geographic location, personal phone number, email, etc.",
        options: ["Further Questions", "Closing Statement", "Transfer to Supervisor"]
    },
    {
        choice: "Further Questions",
        dialogue: "\"What can I help you with?\"",
        scene: "Search FAQ for caller's question",
        options: ["Call Helpdesk"]
    }
]
