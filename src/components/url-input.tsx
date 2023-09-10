import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TLinkpreview, getLinkpreview, storeLinkPreview } from "../fakeApi";
import Linkpreview from "./Linkpreview";
import TagInput from "./TagInput";
import { Tstatus } from "../App";
function isURL(str: string) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}
export default function UrlInput({
  setStatus,
}: {
  setStatus: Dispatch<SetStateAction<Tstatus>>;
}) {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<{ data: TLinkpreview; id: string } | null>(
    null,
  );
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    isURL(url) && getLinkpreview(url).then((d) => setData(d));
  }, [url]);

  const handleSave = () => {
    if (data) {
      storeLinkPreview({ id: data.id, tags: tags }).then(() => {
        setStatus("updated");
        setUrl("");
        setData(null);
        setTags([]);
      });
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <input
          className="my-2 w-11/12 rounded-lg border-2 px-4 py-3 sm:w-[80vm] md:w-[70vw] lg:w-[30vm]"
          type="url"
          value={url}
          placeholder="HTTPS://"
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
      </div>
      {data && (
        <InputDropdown
          data={data}
          handleSave={handleSave}
          tags={tags}
          setTags={setTags}
        />
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
    <div className="mx-auto max-w-[30rem] rounded-xl border border-gray-700 outline outline-gray-700">
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
