/**
 * numberGenerator.js
 * This script handles the logic for the Partial Phone Number Combination Generator.
 * This is a simplified version that displays all results at once.
 */

// DOM Elements
const generateBtn = document.getElementById('generate-btn');
const phoneInput = document.getElementById('phone-input');
const resultsContainer = document.getElementById('results-container');
const resultsList = document.getElementById('results-list');
const comboCount = document.getElementById('combo-count');
const messageBox = document.getElementById('message-box');
const copyBtn = document.getElementById('copy-btn');

// --- EVENT LISTENERS ---
generateBtn.addEventListener('click', handleGenerateClick);
copyBtn.addEventListener('click', handleCopy);

/**
 * Main function to handle the "Generate" button click.
 */
function handleGenerateClick() {
    const pattern = phoneInput.value;
    resetUI();

    const unknownCount = (pattern.match(/x/gi) || []).length;

    // --- Input Validation ---
    if (unknownCount === 0) {
        showMessage("Please use 'x' to mark unknown digits.", 'error');
        return;
    }

    // Set a reasonable limit to prevent browser from crashing
    // 100,000 combinations is a safe upper limit for most modern browsers.
    if (unknownCount > 5) { 
        showMessage(`Generating 10^${unknownCount} combinations may crash your browser! Please use 5 or fewer 'x's.`, 'error');
        return;
    }
    
    // --- Generation & Display ---
    const combinations = [];
    generateCombinations(pattern, combinations);
    displayResults(combinations);
}

/**
 * Handles copying the full list of combinations to the clipboard.
 */
function handleCopy() {
    const textToCopy = Array.from(resultsList.children)
        .map(p => p.textContent)
        .join('\n');

    if (!textToCopy) {
        showMessage('Nothing to copy. Please generate a list first.', 'error');
        return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    textArea.style.position = 'fixed';
    textArea.style.opacity = 0;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showMessage('Copied to clipboard!', 'success');
    } catch (err) {
        showMessage('Failed to copy. Your browser may not support this feature.', 'error');
    }
    
    document.body.removeChild(textArea);
}


/**
 * Recursively generates all combinations for a given pattern.
 * @param {string} currentPattern - The pattern with 'x' placeholders.
 * @param {Array<string>} combinations - The array to store results.
 */
function generateCombinations(currentPattern, combinations) {
    const index = currentPattern.indexOf('x');
    if (index === -1) {
        combinations.push(currentPattern);
        return;
    }
    for (let i = 0; i <= 9; i++) {
        const newPattern = currentPattern.substring(0, index) + i + currentPattern.substring(index + 1);
        generateCombinations(newPattern, combinations);
    }
}


/**
 * Displays the generated combinations on the page.
 * @param {Array<string>} combinations - The array of generated numbers.
 */
function displayResults(combinations) {
    if (combinations.length === 0) return;
    
    const fragment = document.createDocumentFragment();
    combinations.forEach(num => {
        const p = document.createElement('p');
        p.textContent = num;
        p.className = 'text-gray-300 font-mono text-sm leading-relaxed';
        fragment.appendChild(p);
    });
    resultsList.appendChild(fragment);

    comboCount.textContent = `${combinations.length.toLocaleString()} Combinations Found`;
    resultsContainer.classList.remove('hidden');
}

/**
 * Resets the UI to its initial state before a generation.
 */
function resetUI() {
    resultsList.innerHTML = '';
    messageBox.classList.add('hidden');
    resultsContainer.classList.add('hidden');
}

/**
 * Shows an error or informational message.
 * @param {string} message - The message to display.
 * @param {'success' | 'error'} type - The type of message to style.
 */
function showMessage(message, type = 'error') {
    messageBox.textContent = message;
    
    messageBox.classList.remove('bg-red-800/50', 'border-red-700', 'text-red-200', 'bg-green-800/50', 'border-green-700', 'text-green-200');

    if (type === 'success') {
        messageBox.classList.add('bg-green-800/50', 'border-green-700', 'text-green-200');
    } else {
        messageBox.classList.add('bg-red-800/50', 'border-red-700', 'text-red-200');
    }
    
    messageBox.classList.remove('hidden');
}