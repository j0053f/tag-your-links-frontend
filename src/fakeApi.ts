export interface TLinkpreview {
  success?: boolean;
  title?: string;
  description?: string;
  image?: string;
  sitename?: string;
  ogUrl?: string;
  type?: string;
  domain?: string;
  favicon?: string;
}
export interface TData {
  linkpreview: { [key: string]: TLinkpreview };
  tag: { [key: string]: string[] };
  linkpreviewId: string[];
  tagId: string[];
}
export interface TUser {
  name: string;
  password: string;
}
export interface TUserData {
  user: { [key: string]: TData };
  userInfo: { [key: string]: TUser };
  userId: string[];
}

export const getData = async (): Promise<TData> => {
  const credentials = "Basic " + btoa("admin:password");
  const res = await fetch("https://test-url.ir/api/linkpreview/admin", {
    headers: { Authorization: credentials },
  });
  const data = await res.json();
  return data;
};

export const getLinkpreview = async (
  url: string,
): Promise<{ data: TLinkpreview; id: string }> => {
  const res = await fetch(`https://test-url.ir/api/linkpreview?url=${url}`);
  const data = await res.json();
  return data;
};

export const storeLinkPreview = async ({
  id,
  tags,
}: {
  id: string;
  tags: string[];
}): Promise<string> => {
  const credentials = "Basic " + btoa("admin:password");
  const res = await fetch("https://test-url.ir/api/linkpreview", {
    method: "POST",
    headers: { Authorization: credentials, "Content-Type": "application/json" },
    body: JSON.stringify({ id, tags }),
  });
  const data = res.json();
  return data;
};
