import { useState } from "react";
import {
  TData,
  TLinkpreview,
  getLinkpreview,
  storeLinkPreview,
} from "../fakeApi";
import Linkpreview from "./Linkpreview";
import TagInput from "./TagInput";
import { AiOutlineLoading } from "react-icons/ai";

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

  const { isLoading, isFetching, isError, data } = useQuery({
    queryKey: ["linkpreview", url],
    queryFn: () => getLinkpreview(url),
    enabled: isURL(url),
  });

  const mutation = useMutation({
    mutationFn: storeLinkPreview,
    onMutate: (variables) => {
      const newLinkpreview = queryClient.getQueryData<{
        id: string;
        data: TLinkpreview;
      }>(["linkpreview", url]);
      queryClient.setQueryData<TData>(["linkpreview-list"], (oldData) => {
        if (oldData && newLinkpreview) {
          const {
            linkpreviewCollection,
            linkpreviewId,
            tagsCollection,
            tagsId,
          } = oldData;

          const { id, tags } = variables;
          const { data } = newLinkpreview;
          console.log(oldData);
          return {
            linkpreviewCollection: { ...linkpreviewCollection, [id]: data },
            linkpreviewId: [...linkpreviewId, id],
            tagsCollection: { ...tagsCollection, [id]: tags },
            tagsId: [...tagsId],
          };
        }
      });
    },
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
        <div className="relative my-2 w-11/12  rounded-lg border sm:w-[80vm] md:w-[70vw] lg:w-[30vm]">
          <input
            className=" w-full px-4 py-3 outline-none"
            type="url"
            value={url}
            placeholder="HTTPS://"
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
          {isLoading && isFetching && (
            <div className="absolute right-3 top-0 flex h-full items-center">
              <div className="animate-spin">
                <AiOutlineLoading size="1.5rem" />
              </div>
            </div>
          )}
        </div>
      </div>

      {isError && "An error has occurred: "}
      {data && (
        <InputDropdown
          data={data}
          handleSave={() => {
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
