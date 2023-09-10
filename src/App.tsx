import { useEffect, useState } from "react";
import { fetchFakeData, TData } from "./fakeApi";
import UrlInput from "./components/url-input";
import Linkpreview from "./components/Linkpreview";
import Tag from "./components/Tag";
export type Tstatus = "updated" | "sync";
function App() {
  const [status, setStatus] = useState<Tstatus>("updated");
  const [data, setData] = useState<TData>({
    linkpreviewCollection: {},
    linkpreviewId: [],
    tagsCollection: {},
    tagsId: [],
  });
  useEffect(() => {
    if (status === "updated") {
      fetchFakeData()
        .then((fakeData) => {
          setData(fakeData);
          setStatus("sync");
        })
        .catch((error) => {
          console.log("error fetching fake Data ", error);
        });
    }
  }, [status]);
  return (
    <div>
      <UrlInput setStatus={setStatus} />
      <LinkpreviewList data={data} />
    </div>
  );
}

function LinkpreviewList({ data }: { data: TData }) {
  return (
    <div>
      <h1>fake data:</h1>

      <div className="mx-auto max-w-[30rem]">
        {data.linkpreviewId
          .map((id) => (
            <div className="mb-4 bg-gray-100 shadow-xl ring-1 ring-gray-900/5">
              <Linkpreview
                key={id}
                data={data.linkpreviewCollection[id]}
                id={id}
              />
              <div className="m-2 flex flex-wrap">
                {data.tagsCollection[id].map((tag) => (
                  <Tag tag={tag} />
                ))}
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default App;
