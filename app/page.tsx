import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Selamat Datang di UNTAR Tech</h1>
      <p>
        Solusi teknologi inovatif dan pengembangan perangkat lunak yang dirancang langsung oleh mahasiswa Teknik Informatika UNTAR.
      </p>
      
      <br />
      <Link href="/services">
        <button className="btn-primary">EXPLORE</button>
      </Link>
    </div>
  );
}