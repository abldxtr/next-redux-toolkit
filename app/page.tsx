import Book from "@/component/book";
import Header from "@/component/header";

import Query from "@/component/query";

export default function Home() {
  return (
    <main className=" min-h-screen bg-gray-950 font-sans antialiased ">
      <Header />
      <div className="container mx-auto">
        <Query />
      </div>
      <Book />
    </main>
  );
}
