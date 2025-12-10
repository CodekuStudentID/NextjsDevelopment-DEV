"use client";
import React from "react";
import Link from "next/link";


export default function ButtonDetailData({ id }) {
  return (
    <Link href={`/api/users/${id}`}>
      <button className="btn btn-primary">Detail data</button>
    </Link>
  );
}
