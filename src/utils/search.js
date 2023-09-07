import formulasData from "./formulas";

// Function to search formulas by name
export function searchFormulaByName(name) {
  return formulasData.find((formula) => formula.name === name);
}
// Function to get all formula names
export function getAllFormulaNames() {
  return formulasData.map((formula) => formula.name);
}
export function createMsg(data) {
  return (
    <div>
      <h2>{data.name}</h2>
      <h3>{data.formula}</h3>
      <p>{data.description}</p>
      <p>{data.example}</p>
    </div>
  );
}
