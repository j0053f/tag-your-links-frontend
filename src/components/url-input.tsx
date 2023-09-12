import { useState } from "react";
import { TLinkpreview, getLinkpreview, storeLinkPreview } from "../fakeApi";
import Linkpreview from "./Linkpreview";
import TagInput from "./TagInput";

import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
function isURL(str: string) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}
export default function UrlInput() {
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const queryClient = useQueryClient();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["linkpreview", url],
    queryFn: () => getLinkpreview(url),
    enabled: isURL(url),
  });

  const mutation = useMutation({
    mutationFn: storeLinkPreview,
    onSuccess: (data) => {
      console.log("onSuccess");
      console.log(data);
      queryClient.invalidateQueries(["linkpreview-list"]);
      setUrl("");
      setTags([]);
    },
  });

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

      {isLoading && "Loading..."}
      {isError && "An error has occurred: "}
      {data && (
        <InputDropdown
          data={data}
          handleSave={() => {
            console.log({ id: data.id, tags: tags });
            mutation.mutate({ id: data.id, tags: tags });
          }}
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
