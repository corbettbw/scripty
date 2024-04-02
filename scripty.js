import scriptConfig from "./scriptConfig.js";

const prompts = document.querySelector(".prompts");


function act(choice) {
  const newConfig = scriptConfig.find(config => config.choice === choice);

  // Create a new container for scene and dialogue
  const sceneDialogueContainer = document.createElement("div");
  sceneDialogueContainer.classList.add("scene-dialogue");

  // Create and append header for scene
  const sceneHeader = document.createElement("div");
  sceneHeader.classList.add("header", "scene-header");
  sceneHeader.textContent = "Scene Description";
  // sceneDialogueContainer.appendChild(sceneHeader);

  // Create and append new scene
  const newScene = document.createElement("div");
  newScene.classList.add("scene");
  newScene.appendChild(sceneHeader);
  newScene.appendChild(document.createTextNode(newConfig.scene));

  // newScene.textContent = newConfig.scene;
  // sceneDialogueContainer.appendChild(newScene);

  // Create and append header for dialogue
  const dialogueHeader = document.createElement("div");
  dialogueHeader.classList.add("header", "dialogue-header");
  dialogueHeader.textContent = "Dialogue";
  // sceneDialogueContainer.appendChild(dialogueHeader);

  // Create and append new dialogue
  const newDialogue = document.createElement("div");
  newDialogue.classList.add("dialogue");
  newDialogue.appendChild(dialogueHeader); // Append the header to the dialogue
  newDialogue.appendChild(document.createTextNode(newConfig.dialogue));

  // Append the scene and dialogue to the scene-dialogue container
  sceneDialogueContainer.appendChild(newScene);
  sceneDialogueContainer.appendChild(newDialogue);

  // newDialogue.textContent = newConfig.dialogue;
  // sceneDialogueContainer.appendChild(newDialogue);
  
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

  
  // Create and append new options container
  const newOptions = document.createElement("div");
  newOptions.classList.add("options");
  
  newConfig.options.forEach(option => {
    const button = document.createElement("button");
    button.className = 'action-btn';
    button.textContent = option;
    button.addEventListener('click', () => act(option));
    newOptions.appendChild(button);
  });
  
  // Append the new scene, dialogue, and options to the prompts container
  prompts.appendChild(sceneDialogueContainer);
  prompts.appendChild(newOptions);

  // Scroll the newOptions into view to ensure the choices are visible
  newOptions.scrollIntoView({ behavior: 'smooth', block: 'end' });

}

act("Start"); // Call this to start the game