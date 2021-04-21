import { updateUI } from "../src/client/js/updateUI"

describe("Testing the update function", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    // Define the input for the function, if any, in the form of variables/array
    test("Testing the updateUI function", () => {
        const input={
            score_tag: 'P',
            agreement: 'DISAGREEMENT',
            subjectivity: 'SUBJECTIVE',
            confidence: '86',
            irony: 'NONIRONIC',
        };
        expect(updateUI(input)).toBe(document.getElementById("polarity").innerHTML = "Polarity: " + 'P');
    });
});

