import { useEffect, useState } from "react";
import { TLinkpreview, getLinkpreview, storeLinkPreview } from "../fakeApi";
import Linkpreview from "./Linkpreview";

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
  useEffect(() => {
    getLinkpreview(url).then((d) => setData(d));
  }, [url]);

  const handleSave = () => {
    storeLinkPreview(data.id).then(() => {
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
      {data && <InputDropdown data={data} handleSave={handleSave} />}
    </div>
  );
}

function InputDropdown({
  data,
  handleSave,
}: {
  data: { data: TLinkpreview; id: string };
  handleSave: () => void;
}) {
  return (
    <div className="border border-red-600">
      <Linkpreview {...data} />

      <div className="flex w-full justify-end">
        <button
          onClick={handleSave}
          className="m-2 rounded-md border bg-blue-400 p-1 text-white"
        >
          save
        </button>
      </div>
    </div>
  );
}
