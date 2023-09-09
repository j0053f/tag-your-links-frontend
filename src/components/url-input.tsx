import { useEffect, useState } from "react";
import { TLinkpreview, getLinkpreview, storeLinkPreview } from "../fakeApi";
import Linkpreview from "./Linkpreview";
import TagInput from "./TagInput";
function isURL(str: string) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}
export default function UrlInput({ setStatus }) {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<{ data: TLinkpreview; id: string } | null>(
    null,
  );
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    isURL(url) && getLinkpreview(url).then((d) => setData(d));
  }, [url]);

  const handleSave = () => {
    storeLinkPreview({ id: data.id, tags: tags }).then(() => {
      setStatus("updated");
      setUrl("");
      setData(null);
    });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="my-2 w-11/12  rounded-lg border-2 px-4 py-3 md:w-[50vw]"
        type="text"
        value={url}
        placeholder="HTTPS://"
        onChange={(event) => {
          setUrl(event.target.value);
        }}
      />
      {data && (
        <div className="w-[30rem]">
          <InputDropdown
            data={data}
            handleSave={handleSave}
            tags={tags}
            setTags={setTags}
          />
        </div>
      )}
    </div>
  );
}

function InputDropdown({
  data,
  handleSave,
  tags,
  setTags,
}: {
  data: { data: TLinkpreview; id: string };
  handleSave: () => void;
  tags: string[];
  setTags: any;
}) {
  return (
    <div className="flex flex-col rounded-md border-2">
      <Linkpreview {...data} />
      <TagInput tags={tags} setTags={setTags} />
      <div className="flex w-full justify-end">
        <button
          className="m-2 rounded-md border bg-blue-400 p-1 text-white"
          onClick={handleSave}
        >
          save
        </button>
      </div>
    </div>
  );
}
