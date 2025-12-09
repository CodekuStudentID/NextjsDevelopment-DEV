"use client";
import { useState, useEffect } from "react";
import Loading from "../../../components/Loading";

export default function DetailUserPage({ params }) {
  const { id } = params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/users/${id}`);
      const result = await res.json();
      setUser(result.data);
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  if (loading) return <Loading />;

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold">Detail User</h1>
      <p><b>ID:</b> {user.id}</p>
      <p><b>Nama:</b> {user.nama}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Address:</b> {user.address}</p>
    </div>
  );
}
