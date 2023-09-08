export interface TLinkpreview {
  success: boolean;
  title: string;
  description: string;
  image: string;
  sitename: string;
  ogUrl: string;
  type: string;
  domain: string;
  favicon: string;
}
export interface TData {
  linkpreviewCollection: { [key: string]: TLinkpreview };
  linkpreviewId: string[];
  tagsCollection: { [key: string]: string[] };
}
const fakeData: TData = {
  linkpreviewId: [
    "1693334686029-3598",
    "1693334729567-458",
    "1693334733726-901",
    "1693334734150-437",
    "1693334734463-7034",
    "1693334734823-394",
    "1693334735102-6545",
  ],
  tagsCollection: {
    "1693334686029-3598": ["fun"],
    "1693334729567-458": ["frontend"],
    "1693334733726-901": [],
    "1693334734150-437": [],
    "1693334734463-7034": ["frontend"],
    "1693334734823-394": ["frontend"],
    "1693334735102-6545": [],
  },
  linkpreviewCollection: {
    "1693334686029-3598": {
      success: true,
      title: "بخش دوم گفت‌وگوی عادل فردوسی‌پور و پژمان جمشیدی",
      description:
        "در این بخش از گفت‌وگو، عادل فردوسی‌پور و پژمان جمشیدی در لوکیشن یک تئاتر حضور پیدا کرده‌اند تا درباره زندگی هنری پژمان و مسیری که او را به ستاره بزرگ سینما ت...",
      image: "images/1693308049979maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=q1moA8pO-_s",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
    "1693334729567-458": {
      success: true,
      title:
        "All 12 useState & useEffect Mistakes Junior React Developers Still Make in 2023",
      description:
        "Avoid these 12 mistakes when working with useState & useEffect...👉 Professional JavaScript Course: https://www.udemy.com/course/professional-javascript-cour...",
      image: "images/1693308099837maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=-yIsQPp31L0",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
    "1693334733726-901": {
      success: true,
      title: "PHP Doesn't Suck Anymore? | Prime Reacts",
      description:
        "Recorded live on twitch, GET IN https://twitch.tv/ThePrimeagenReviewed video: https://www.youtube.com/watch?v=ZRV3pBuPxEQChannel: Aaron Francis | https://www...",
      image: "images/1693308167104maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=WsnHWxO7Krw",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
    "1693334734150-437": {
      success: true,
      title: "تاریخ هند از اول - A History of India",
      description:
        "تاریخ هند، یکی از قدیمی‌ترین تمدن‌های بشری با خیلی از چیزهایی که ریشه‌های شرایط امروزش هستند.#تاریخ #هند #india #history متن: آمنه محمدی، علی بندریویدیو: DAS...",
      image: "images/1693308209582maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=UuJ-faWIR7E",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
    "1693334734463-7034": {
      success: true,
      title: "The Truth About HTMX",
      description:
        "Fine, I'll talk about HTMX.Shoutout Ethan for the great examples https://www.youtube.com/watch?v=cpzowDDJj24ALL MY VIDEOS ARE POSTED EARLY ON PATREON https:/...",
      image: "images/1693308263160maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=NA5Fcgs_viU",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
    "1693334734823-394": {
      success: true,
      title: "These CSS best practices might be holding you back",
      description:
        "🎓 CSS Demystified: https://cssdemystified.com?utm_campaign=general&utm_source=youtube&utm_medium=bestpracticesWe’re told about a lot of CSS best practices e...",
      image: "images/1693308297290maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=7Q7qlquojQk",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
    "1693334735102-6545": {
      success: true,
      title: "EP 105 - Shayan Salehian | Engineer at Twitter",
      description:
        "در این قسمت پادکست، من با شایان صالحیان، مهندس ارشد ماشین لرنینگ در توییتر حرف زدم. شایان در توییتر تیمی رو مدیریت میکنه که مسئول الگوریتم‌های تایم لاین و سی...",
      image: "images/1693308355348maxresdefault.jpg",
      sitename: "YouTube",
      ogUrl: "https://www.youtube.com/watch?v=F_uiFmXEwSg",
      type: "video.other",
      domain: "youtube.com",
      favicon:
        "https://www.youtube.com/s/desktop/462a8d5d/img/favicon_32x32.png",
    },
  },
};
function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000);

  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}

export const fetchFakeData = (): Promise<TData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 1000);
  });
};
const tmp: TData = {
  linkpreviewCollection: {},
  linkpreviewId: [],
  tagsCollection: {},
};
export const getLinkpreview = async (
  url: string,
): Promise<{ data: TLinkpreview; id: string }> => {
  const id = generateUniqueId();
  const res = await fetch(`https://test-url.ir/api/linkpreview?url=${url}`);
  const data = await res.json();
  const r = { id, data };
  tmp.linkpreviewCollection[id] = data; // maybe it's not rquired!
  tmp.linkpreviewId.push(id);
  console.log("tmp", tmp);
  return r;
};

export const storeLinkPreview = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (id in tmp.linkpreviewCollection) {
      fakeData.linkpreviewId.push(id);
      fakeData.linkpreviewCollection[id] = tmp.linkpreviewCollection[id];
      fakeData.tagsCollection[id] = [];
      resolve();
    }
    reject(new Error("server internal Error,"));
  });
};
