export const scriptConfig = [
    {
        choice: "Start",
        dialogue: `"Thank you for calling the Dragon's Hoard Bank Product Remediation Information Line, this call may be monitored or recorded. My name is [NAME], may I have your first and last name?"`,
        scene: `<h1 style="color:red;">Phone agent must say this first, and read it verbatim!</h1>`,
        options: ["Consents to Recording", "Does Not Consent"]
    },
    {
        choice:     `Consents to Recording`,
        dialogue:   `"Thank you, [Caller's Name], did you receive a letter from us?"`,
        scene:      `<h2>Make sure to confirm their name.</h2>`,
        options:    [`Received Letter`,`Did Not Receive Letter`]
    },
    {
        choice:     `Does Not Consent`,
        dialogue:   `"I'm sorry [sir, madame, Mx, Your Highness, Your Horribleness], but in order to continue I must have your consent to record the call."`,
        scene:      `<h1>User must give consent to be recorded in order to continue</h1>
        <p>Explain that it is policy to get consent, that it is to protect both caller and Magiq, and ask again.</p>`,
        options:    [`Consents to Recording`,`Still Does Not Consent`]
    },
    {
        choice:     `Still Does Not Consent`,
        dialogue:   `"Do you mind going on a brief hold while I escalate you to someone who can answer your questions?"`,
        scene:      `<h3>If caller still does not consent to be recorded, ask them to hold to be transferred to a supervisor.<h3>`,
        options:    [`Transfer Hold`,`Won't Hold`]
    },
    {
        choice:     `Won't Hold`,
        dialogue:   `"I'm sorry, I cannot continue the call without your consent to record. Thank you for calling the Dragon's Hoard Product Remediation Information Line, have a pleasant day!"`,
        scene:      `<h1>If the customer still refuses to consent to being recorded, end the call.</h1>`,
        options:    [`End The Call`]
    },
    {
        choice:     `Transfer Hold`,
        dialogue:   `<strong>To HelpDesk Agent:</strong> "Hello, my name is [Agent Name], this is a transfer call, caller will not consent to being recorded."
                     <p><strong>To Caller:</strong> "I have [HelpDesk Agent] on the line to better assist you, [HelpDesk Agent], go ahead"`,
        scene:      `<h1>Transfer Instructions</h1><p>
                        <ol>
                        <li>Mute Caller</li>
                        <li>Navigate to HelpDesk</li>
                        <li>Call HelpDesk</li>
                        <li>Explain situation</li>
                        <li>Merge calls</li>
                        </ol>`,
        options:    [`End The Call`]
    },
    {
        choice:     `End The Call`,
        dialogue:   ``,
        scene:      `<h1>Call Ended</h1>`,
        options:    []
    },
    {
        choice:     ``,
        dialogue:   ``,
        scene:      ``,
        options:    []
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
