import { useEffect, useState } from "react";
import { fetchFakeData, TLinkpreview, TData } from "./fakeApi";
import UrlInput from "./components/url-input";
import Linkpreview from "./components/Linkpreview";
type Tstatus = "updated" | "sync";
function App() {
  const [status, setStatus] = useState<Tstatus>("updated");
  const [data, setData] = useState<TData>({
    linkpreviewCollection: {},
    linkpreviewId: [],
    tagsCollection: {},
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
  console.log(data.linkpreviewId.reverse());
  return (
    <div>
      <h1>fake data:</h1>
      <div className="flex flex-col items-center">
        {data.linkpreviewId
          .reverse()
          .map((id) => (
            <div className="mb-4  bg-gray-100 shadow-xl ring-1 ring-gray-900/5">
              <Linkpreview
                key={id}
                data={data.linkpreviewCollection[id]}
                id={id}
              />
              <div className="mt-2 flex">
                {data.tagsCollection[id].map((tag) => (
                  <div className="m-2 rounded-md border border-gray-400 px-1">
                    {tag}
                  </div>
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
