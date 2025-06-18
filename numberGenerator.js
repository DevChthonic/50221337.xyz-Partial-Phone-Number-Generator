/**
 * numberGenerator.js
 * This script handles the logic for the Phone Number Combination Generator.
 * It generates number combinations based on a user-provided pattern,
 * validates input, and displays results dynamically.
 */

// DOM Elements
const generateBtn = document.getElementById('generate-btn');
const phoneInput = document.getElementById('phone-input');
const resultsContainer = document.getElementById('results-container');
const resultsList = document.getElementById('results-list');
const comboCount = document.getElementById('combo-count');
const messageBox = document.getElementById('message-box');
const copyBtn = document.getElementById('copy-btn');

// Event listener for the generate button
generateBtn.addEventListener('click', () => {
    const pattern = phoneInput.value;
    // Clear previous results and messages
    resultsList.innerHTML = '';
    messageBox.classList.add('hidden');
    resultsContainer.classList.add('hidden');

    const unknownCount = (pattern.match(/x/gi) || []).length;

    // --- Input Validation ---
    if (unknownCount === 0) {
        showMessage("Please use 'x' to mark unknown digits.", 'error');
        return;
    }

    // Set a reasonable limit to prevent browser from crashing
    if (unknownCount > 6) { 
        showMessage(`Generating 10^${unknownCount} combinations is too much for your browser! Please use 6 or fewer 'x's.`, 'error');
        return;
    }
    
    // --- Generation Logic ---
    const combinations = [];
    generateCombinations(pattern, combinations);
    
    // --- Display Results ---
    displayResults(combinations);
});

/**
 * Recursively generates all combinations for a given pattern.
 * @param {string} currentPattern - The pattern with 'x' placeholders.
 * @param {Array<string>} combinations - The array to store results.
 */
function generateCombinations(currentPattern, combinations) {
    const index = currentPattern.indexOf('x');

    // Base case: If no 'x' is found, we have a complete number.
    if (index === -1) {
        combinations.push(currentPattern);
        return;
    }

    // Recursive step: Replace 'x' with digits 0-9 and recurse.
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
    
    // Use a DocumentFragment for performance when adding many elements
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
 * Shows an error or informational message.
 * @param {string} message - The message to display.
 * @param {'success' | 'error'} type - The type of message to style.
 */
function showMessage(message, type = 'error') {
    messageBox.textContent = message;
    
    // Reset classes
    messageBox.classList.remove('bg-red-800/50', 'border-red-700', 'text-red-200', 'bg-green-800/50', 'border-green-700', 'text-green-200');

    // Apply new classes based on type
    if (type === 'success') {
        messageBox.classList.add('bg-green-800/50', 'border-green-700', 'text-green-200');
    } else {
        messageBox.classList.add('bg-red-800/50', 'border-red-700', 'text-red-200');
    }
    
    messageBox.classList.remove('hidden');
}

// Event listener for the copy button
copyBtn.addEventListener('click', () => {
    const textToCopy = Array.from(resultsList.children)
        .map(p => p.textContent)
        .join('\n');
    
    // Create a temporary textarea element to copy the text
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    // Make it invisible
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.opacity = 0;

    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        // Use the older execCommand for broader compatibility in sandboxed environments
        document.execCommand('copy');
        showMessage('Copied to clipboard!', 'success');
    } catch (err) {
        showMessage('Failed to copy. Your browser may not support this feature.', 'error');
    }
    
    document.body.removeChild(textArea);
});
