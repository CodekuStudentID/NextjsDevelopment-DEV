"use client";

import React from "react";
import Link from "next/link";

export default function Navbar () {
    const URL_FORM = "/dashboard/form";
    return (
        <button className="btn btn-success">
            <Link href={URL_FORM}>Tambah Data</Link>
        </button>
    )
}