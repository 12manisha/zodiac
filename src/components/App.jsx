import React from "react";
import Entry from "./Entry";
import Emojipedia from "../Emojipedia";

function createEntry(emojiterm) {
  return (
    <Entry
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      description={emojiterm.description}
    />
  );
}

function App() {
  return (
    <div>
      <h1>Hello Zodiac World</h1>

      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
