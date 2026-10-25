import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { id: "1", name: "Pengembangan Website (Next.js & React)" },
    { id: "2", name: "Pembuatan Aplikasi Mobile" },
    { id: "3", name: "Konsultasi IT & Arsitektur Sistem" },
  ];

  return (
    <div>
      <h1>Layanan Kami</h1>
      <p>Pilih salah satu layanan  kami untuk cek detailnya:</p>
      
      <br />
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}