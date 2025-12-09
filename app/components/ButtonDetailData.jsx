"use client";
import React from "react";
import Link from "next/link";
import users from '../lib/connectUsersDatabase';


export default function ButtonDetailData({ id }) {
    return (
        <button className="btn btn-primary">
            <Link href={`/dashboard/users/${id}`}>Detail data</Link>
        </button>
    )
}