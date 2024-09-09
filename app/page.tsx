import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header>header</header>
      <main>
        <Link href={"/login"}>Login page</Link>
      </main>
      <footer>footer</footer>
    </React.Fragment>
  );
}
