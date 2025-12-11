"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Loading from "../../../components/client/Loading";

export default function UserPage({ params }) {
    
    // Gunakan usePathname untuk mendapatkan ID di sisi client
    const pathname = usePathname();
    // Jika params.id sudah Anda ambil di luar hook, gunakan itu
    // const userId = params.id; 
    
    // Pilihan yang lebih aman (Client Side): ambil ID dari path
    const userId = pathname.split('/').pop(); 
    
    const [userData, setUserData] = useState(null);
    const [Load, setLoad] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Pastikan userId adalah angka, bukan "users" atau string kosong
        if (!userId || isNaN(parseInt(userId))) { 
            setLoad(false);
            return;
        }

        const fetchUserData = async () => {
            setLoad(true);
            setError(null);
            
            try {
                // Fetch menggunakan ID yang dijamin benar (dari URL Path)
                const apiUrl = `/api/users/${userId}`; 
                const res = await fetch(apiUrl);
                const result = await res.json();

                // API Anda terbukti mengembalikan status: 200 dan data: {...}
                if (result.status !== 200 || !result.data) {
                     // Jika data null tapi status 200, artinya user tidak ditemukan
                     throw new Error(result.message || "User data structure invalid.");
                }

                setUserData(result.data);

            } catch (err) {
                setError(err.message || "Network Error");
                console.error("Fetch Error:", err);
            } finally {
                setLoad(false);
            }
        };

        fetchUserData();

    // Gunakan userId yang didapat dari pathname sebagai dependensi
    }, [userId]); 

    // Bagian rendering (disederhanakan)
    return (
        <div>
            {Load ? (
                <Loading /> 
            ) : error ? (
                <div style={{ color: 'red' }}>Error: {error}</div>
            ) : userData ? (
                <div>
                    <h1>Detail User: {userData.nama}</h1>
                    <p>ID: {userData.id}</p>
                    <p>Email: {userData.email}</p>
                    {/* Data harusnya muncul di sini */}
                </div>
            ) : (
                "User data not available." // Ini muncul jika API mengembalikan data: null
            )}
        </div>
    );
}