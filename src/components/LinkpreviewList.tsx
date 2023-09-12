import Linkpreview from "./Linkpreview";
import Tag from "./Tag";
import { fetchFakeData } from "../fakeApi";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading } from "react-icons/ai";

export default function LinkpreviewList() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["linkpreview-list"],
    queryFn: fetchFakeData,
  });

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin">
          <AiOutlineLoading size="3rem" />
        </div>
      </div>
    );
  if (isError) return "An error has occurred: ";

  console.log("LinkpreviewList");

  console.log("LinkpreviewList");
  return (
    <div>
      <h1>fake data:</h1>

      <div className="mx-auto max-w-[30rem]">
        {data.linkpreviewId
          .map((id) => (
            <div
              key={id}
              className="mb-4 bg-gray-100 shadow-xl ring-1 ring-gray-900/5"
            >
              <Linkpreview data={data.linkpreviewCollection[id]} id={id} />
              <div className="m-2 flex flex-wrap">
                {data.tagsCollection[id].map((tag) => (
                  <Tag tag={tag} key={tag} />
                ))}
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
