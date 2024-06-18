import {scriptConfig, frequentlyAskedQuestions} from "./scriptConfig.js";

const prompts = document.querySelector(".prompts");


function act(choice, fromFAQ = false) {
    const newConfig = fromFAQ ? frequentlyAskedQuestions.find(config => config.choice === choice) :
                               scriptConfig.find(config => config.choice === choice);

    // Clear previous selections if any
    clearClickedState();

    // Existing code to create scene and dialogue...
    const sceneDialogueContainer = createSceneDialogueContainer(newConfig);

    // Create and append header for scene
    const sceneHeader = document.createElement("div");
    sceneHeader.classList.add("header", "scene-header");
    sceneHeader.textContent = "Description";

    // Create and append header for dialogue
    const dialogueHeader = document.createElement("div");
    dialogueHeader.classList.add("header", "dialogue-header");
    dialogueHeader.textContent = "Dialogue";

    // Create and append new scene
    const newScene = document.createElement("div");
    newScene.classList.add("scene");
    newScene.appendChild(sceneHeader);
    newScene.appendChild(document.createTextNode(newConfig.scene));

    // Create and append new dialogue
    const newDialogue = document.createElement("div");
    newDialogue.classList.add("dialogue");
    newDialogue.appendChild(dialogueHeader); // Append the header to the dialogue
    newDialogue.appendChild(document.createTextNode(newConfig.dialogue));
    
    // Append the scene and dialogue to the scene-dialogue container
    sceneDialogueContainer.appendChild(newScene);
    sceneDialogueContainer.appendChild(newDialogue);

    // Remove existing FAQ from previous scenes if it exists
    const existingFAQ = document.querySelector(".FAQ");
    if (existingFAQ) {
        existingFAQ.remove();
    }
  
    // Create and append new options container
    const newOptions = document.createElement("div");
    newOptions.classList.add("options", "options-container");

    // Create and handle FAQ display
    const newFAQ = createFAQSection();
    newFAQ.classList.add("FAQ");
    
    // Append the FAQ and buttons container to the newOptions container
    newOptions.appendChild(newFAQ);
    
    // Create buttons container for actions
    const buttonsContainer = createButtonsContainer(newConfig, fromFAQ);
    newOptions.appendChild(buttonsContainer);
    
    // Check if the last child of the prompts container exists and has the "options" class
    if (prompts.lastChild && prompts.lastChild.classList && prompts.lastChild.classList.contains("options")) {
        const previousOptions = prompts.lastChild;
        const buttons = previousOptions.querySelectorAll("button");
        buttons.forEach(button => {
            button.remove()
        });
        const newButton = createButton(choice, fromFAQ);
        newButton.disabled = true; // Disable the button
        newButton.classList.add("clicked"); // Add a class to style the clicked button
        previousOptions.querySelector(".buttons-container").appendChild(newButton);
    }
    // Append the new scene, dialogue, and options to the prompts container
    prompts.appendChild(sceneDialogueContainer);
    prompts.appendChild(newOptions);

    // Scroll the newOptions into view to ensure the choices are visible
    newOptions.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function createSceneDialogueContainer(newConfig) {
    // Create a new container for scene and dialogue
    const container = document.createElement("div");
    container.classList.add("scene-dialogue");
    return container;
}

function clearClickedState() {
    // This function removes the 'clicked' class from all buttons in the options and FAQ sections
    const allButtons = document.querySelectorAll('.action-btn, .faq-button');
    allButtons.forEach(button => {
        button.classList.remove('clicked');
    });
}

function createFAQSection(selectedFaqChoice) {
    const faqContainer = document.createElement("div");
    faqContainer.classList.add("FAQ");

    // Create and append header for FAQ
    const faqHeader = document.createElement("div");
    faqHeader.classList.add("header", "faq-header");
    faqHeader.textContent = "FAQ";
    faqContainer.appendChild(faqHeader);

    // Create and append the search bar at the top of the FAQ container
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.classList.add("faq-search");
    searchInput.placeholder = "Search questions...";
    faqContainer.appendChild(searchInput);

    // Container for FAQ buttons to ensure vertical layout
    const faqButtonsContainer = document.createElement("div");
    faqButtonsContainer.style.display = "flex";
    faqButtonsContainer.style.flexDirection = "column";
    faqContainer.appendChild(faqButtonsContainer);

    // Add FAQ options below the search bar
    frequentlyAskedQuestions.slice(0, 3).forEach(faq => {
        const faqButton = document.createElement("button");
        faqButton.classList.add("faq-button", "action-btn");
        faqButton.textContent = faq.choice;
        faqButton.onclick = () => {
            updateFAQSelection(faq.choice);
            act(faq.choice, true);
        };
        if (faq.choice === selectedFaqChoice) {
            faqButton.classList.add("clicked");
        }
        faqButtonsContainer.appendChild(faqButton);
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        faqButtonsContainer.innerHTML = '';  // Clear existing buttons
        const filteredFAQs = frequentlyAskedQuestions.filter(faq =>
            faq.choice.toLowerCase().includes(searchTerm)
        );
        filteredFAQs.forEach(faq => {
            const faqButton = document.createElement("button");
            faqButton.classList.add("faq-button", "action-btn");
            faqButton.textContent = faq.choice;
            faqButton.onclick = () => {
                updateFAQSelection(faq.choice);
                act(faq.choice, true);
            };
            faqButtonsContainer.appendChild(faqButton);
        });
    });

    return faqContainer;
}



function updateFAQSelection(choice) {
    const faqButtons = document.querySelectorAll(".faq-button");
    faqButtons.forEach(button => {
        if (button.textContent === choice) {
            button.classList.add("clicked");
        } else {
            button.classList.remove("clicked");
        }
    });
}

function createButton(option, fromFAQ) {
    const button = document.createElement("button");
    button.className = 'action-btn';
    button.textContent = option;
    button.onclick = () => act(option, fromFAQ);
    return button;
}

function createButtonsContainer(newConfig, fromFAQ) {
    const container = document.createElement("div");
    container.classList.add("buttons-container");

    newConfig.options.forEach(option => {
        container.appendChild(createButton(option, fromFAQ));
    });

    return container;
}

act("Start"); // Call this to start the game