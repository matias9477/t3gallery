/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6b660035-4b3d-4599-939c-9ca9a6f2a0f4-dnjorb.jpeg",
  "https://utfs.io/f/17f22dc4-cfdf-499d-bcde-87d24b17f1b4-xf1xdn.jpeg",
  "https://utfs.io/f/f166de9a-2883-4b39-b727-5e5d822323b1-q8ts25.jpeg",
  "https://utfs.io/f/c3efbd68-965a-4a95-a9b8-c0419fb2ab4f-gh4u64.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
      gallery in progress
    </main>
  );
}
