import { useState } from "react";

type TEntry = {
  name: string;
  children?: TEntry[];
};

export const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  const { name, children } = entry;
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      {children ? (
        <button onClick={handleClick} className="name">
          {state ? "-" : "+"} {name}
        </button>
      ) : (
        <span>{name}</span>
      )}

      {state && (
        <div style={{ paddingLeft: `${depth * 10}px` }} className="children">
          {children?.map((entry) => (
            <Entry key={entry.name} entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
