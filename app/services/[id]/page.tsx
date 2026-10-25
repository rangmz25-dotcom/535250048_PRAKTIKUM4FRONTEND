import React from "react";
import Link from "next/link";

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Detail Layanan IT (Kode: {params.id})</h1>
      <p>
        Gaada isinya , tapi ini halaman detail kalo dipencet
      </p>
      <br />
      <Link href="/services">
        <button className="btn-secondary">Kembali</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;