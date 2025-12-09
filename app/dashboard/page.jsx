"use client";

import React from "react";
import { useState, useEffect } from "react";
import ButtonAddingData from "../components/ButtonAddingData";
import ButtonDetailData from "../components/ButtonDetailData";
import Loading from "../components/Loading";
import { Index } from "../services/userServices";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await Index();
      setData(result.data); // result adalah object dan data adalah property object yang berisi array data
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <ButtonAddingData />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
  {loading ? (
    <tr>
      <td colSpan="5" className="py-10">
        <Loading />
      </td>
    </tr>
  ) : (
    data.map((user, index) => (
      <tr key={index} className="bg-base-200">
        <th>{index + 1}</th>
        <th>{user.nama}</th>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td><ButtonDetailData id={user.id} /></td>
      </tr>
    ))
  )}
</tbody>
      </table>
    </div>
  );
}
