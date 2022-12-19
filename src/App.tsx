import { Entry } from "./Entry";
import { tree } from "./tree";

function App() {
  return (
    <>
      {tree.children.map((entry) => (
        <Entry key={entry.name} entry={entry} depth={1} />
      ))}
    </>
  );
}

export default App;
