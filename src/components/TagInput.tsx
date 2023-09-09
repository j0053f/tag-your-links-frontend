import { Dispatch, SetStateAction, useState } from "react";
import Tag from "./Tag";
export default function TagInput({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}) {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  return (
    <div>
      <span className="ml-4 text-lg">Tags:</span>
      <div
        className={`mx-4 flex flex-wrap items-center rounded-md border border-gray-400  ${
          isInputFocused ? "outline outline-blue-200" : ""
        }`}
        onClick={(event) => {
          event.currentTarget.querySelector("input")?.focus();
          setInputFocused(true);
        }}
      >
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
        <input
          placeholder="Add Tags for easily accessing them later!"
          className=" w-20 flex-grow p-2  outline-none"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === " ") {
              setInputValue("");
              setTags((tags) => [...tags, inputValue]);
              console.log(inputValue);
            }
          }}
          onBlur={() => {
            console.log(isInputFocused);
            setInputFocused(false);
          }}
          value={inputValue}
        />
      </div>
    </div>
  );
}
