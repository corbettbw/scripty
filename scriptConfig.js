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
      {
        choice: "Received Letter",
        dialogue: "\"Great! Could you confirm the account number mentioned in the letter?\"",
        scene: "<h2>Verification needed for security reasons.</h2>",
        options: ["Account Number Correct", "Account Number Incorrect"]
    },
    {
        choice: "Account Number Correct",
        dialogue: "\"Thank you for confirming. How may I assist you with the contents of the letter today?\"",
        scene: "<h3>Proceed to assist with the content of the letter.</h3>",
        options: ["Inquiry About Charges", "Request for Service Adjustment"]
    },
    {
        choice: "Account Number Incorrect",
        dialogue: "\"It seems there is a discrepancy. Let me put you on a brief hold while I fetch someone from our verification department.\"",
        scene: "<h3>Put the caller on hold and prepare to transfer the call.</h3>",
        options: ["Transfer to Verification Department"]
    },
    {
        choice: "Transfer to Verification Department",
        dialogue: "\"Hello, this is [Verification Agent], how can I assist you?\"",
        scene: "<h1>Transfer Instructions</h1><p>Confirm details and assist the caller.</p>",
        options: ["End The Call"]
    },
    {
        choice: "Inquiry About Charges",
        dialogue: "\"I see that the charges are due to an annual service fee as noted in your account type specifics. Would you like more information on how these charges are calculated or perhaps discuss changing your account type?\"",
        scene: "<h3>Provide options to the caller for further assistance.</h3>",
        options: ["Change Account Type", "End The Call"]
    },
    {
        choice: "Request for Service Adjustment",
        dialogue: "\"I will need to check with our adjustments department to see if we can waive or reduce the fee. One moment please.\"",
        scene: "<h3>Prepare for a possible adjustment or transfer to another department.</h3>",
        options: ["Adjustment Approved", "Adjustment Denied"]
    },
    {
        choice: "Adjustment Approved",
        dialogue: "\"Good news! We can adjust the fee for you. I've gone ahead and updated your account.\"",
        scene: "<h2>Inform the caller of the successful adjustment.</h2>",
        options: ["End The Call"]
    },
    {
        choice: "Adjustment Denied",
        dialogue: "\"I'm sorry, but after reviewing your account, we're unable to adjust the fee at this time.\"",
        scene: "<h2>Provide options for the caller to escalate the issue or end the call.</h2>",
        options: ["Transfer to Supervisor", "End The Call"]
    }
    
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
    },
    {
        choice: "What are your operating hours?",
        dialogue: "\"Our call center is open from 8 AM to 8 PM, seven days a week, except on major planetary conjunctions.\"",
        scene: "Use this answer if asked about operating hours.",
        options: ["Further Questions", "End The Call"]
    },
    {
        choice: "Can I email my query instead?",
        dialogue: "\"Certainly! You can email us at help@dragons-hoard.com. We typically respond within one business cycle.\"",
        scene: "Provide email contact information and expected response time.",
        options: ["Further Questions", "End The Call"]
    },
    {
        choice: "How do I update my contact details?",
        dialogue: "\"You can update your contact details through our online portal or you can tell me what changes need to be made, and I can update them for you right now.\"",
        scene: "Give options for updating contact details.",
        options: ["Update Now", "Use Online Portal", "End The Call"]
    }    
]
