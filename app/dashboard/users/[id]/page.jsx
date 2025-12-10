"use client";

import React, { useEffect, useState } from "react";

export default function UserDetailPage({ params }) {
  const { id } = params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/users/${id}`);
      const result = await res.json();
      setUser(result.data);
    }
    getData();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Detail User</h1>
      <p>Nama: {user.nama}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
