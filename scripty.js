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

    // Create and append header for FAQ
    const faqHeader = document.createElement("div");
    faqHeader.classList.add("header", "faq-header");
    faqHeader.textContent = "FAQ";

    // Create search bar element
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.classList.add("faq-search");
    searchInput.placeholder = "Search questions...";

    // Event listener for search bar
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredScenarios = scriptConfig.filter(scenario => 
            scenario.dialogue.toLowerCase().includes(searchTerm) || scenario.scene.toLowerCase().includes(searchTerm));
        displayFAQResults(filteredScenarios); // Function to display search results
    });

    newFAQ.appendChild(faqHeader);
    newFAQ.appendChild(searchInput);

    // newFAQ.appendChild(document.createTextNode(newConfig.FAQ));

    // Check if the last child of the prompts container exists and has the "options" class
    if (prompts.lastChild && prompts.lastChild.classList && prompts.lastChild.classList.contains("options")) {
        const previousOptions = prompts.lastChild;
        const buttons = previousOptions.querySelectorAll("button");
        buttons.forEach(button => {
            if (button.textContent === choice) {
            button.disabled = true; // Disable the button
            button.classList.add("clicked"); // Add a class to style the clicked button
            } else {
            button.style.display = "none"; // Hide the unclicked buttons
            }
        });
    }
  
    // Append the FAQ and buttons container to the newOptions container
    newOptions.appendChild(newFAQ);

    // Create buttons container for actions
    const buttonsContainer = createButtonsContainer(newConfig, fromFAQ);
    newOptions.appendChild(buttonsContainer);

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

    frequentlyAskedQuestions.slice(0, 3).forEach(faq => {
        const faqButton = document.createElement("button");
        faqButton.classList.add("faq-button", "action-btn"); // Ensure button has action button styling
        faqButton.textContent = faq.choice;
        faqButton.onclick = () => {
            updateFAQSelection(faq.choice); // Function to handle FAQ selection
            act(faq.choice, true); // Call act with the FAQ choice, marking it fromFAQ
        };
        // Style the clicked FAQ
        if (faq.choice === selectedFaqChoice) {
            faqButton.classList.add("clicked");
        }
        faqContainer.appendChild(faqButton);
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

function createButtonsContainer(newConfig, fromFAQ) {
    const container = document.createElement("div");
    container.classList.add("buttons-container");

    newConfig.options.forEach(option => {
        const button = document.createElement("button");
        button.className = 'action-btn';
        button.textContent = option;
        button.onclick = () => act(option, fromFAQ);
        container.appendChild(button);
    });

    return container;
}

act("Start"); // Call this to start the game