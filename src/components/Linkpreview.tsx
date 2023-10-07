import { TLinkpreview } from "../fakeApi";
export default function Linkpreview({
  data,
  id,
}: {
  id: string;
  data: TLinkpreview;
}) {
  const { image, title } = data;
  console.log(data);
  return (
    <div className=" rounded ">
      <img
        src={`http://localhost:4000/api/images/${image}`}
        className="rounded-t-lg"
      />

      <div
        className={`px-2 pt-3 text-lg font-bold  ${
          title.charCodeAt(0) > 1000 ? "text-right" : "text-left"
        }`}
      >
        {title}
      </div>
    </div>
  );
}
