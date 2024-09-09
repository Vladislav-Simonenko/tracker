import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header>header</header>
      <main style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link href={"/login"}>Login page</Link>
        <Link href={"/users"}>Users page</Link>
      </main>
      <footer>footer</footer>
    </React.Fragment>
  );
}
