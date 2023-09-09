import { TLinkpreview } from "../fakeApi";
export default function Linkpreview({
  data,
  id,
}: {
  id: string;
  data: TLinkpreview;
}) {
  const { image, title } = data;
  return (
    <div className="w-[30rem] rounded ">
      <img src={`https://test-url.ir/api/${image}`} className="rounded-t-lg" />

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
