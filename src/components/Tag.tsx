export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="m-1  rounded-md border border-blue-100 bg-blue-100 px-2 text-blue-500">
      {tag}
    </div>
  );
}
