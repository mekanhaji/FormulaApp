import formulasData from "./formulas";

// Function to search formulas by name
export function searchFormulaByName(name) {
    return formulasData.find((formula) => formula.name === name);
}
// Function to get all formula names
export function getAllFormulaNames() {
    return formulasData.map((formula) => formula.name);
}
