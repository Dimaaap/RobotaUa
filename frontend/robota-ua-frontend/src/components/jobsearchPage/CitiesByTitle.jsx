"use client";

import React, { useEffect, useState } from 'react'
import Link from "next/link"

const CitiesByTitle = () => {

    const getAllCities = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/v1/cities/");
        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }

    const[cities, setCities] = useState([])

    useEffect(() => {
        const citiesList = [getAllCities()];
        setCities(() => citiesList)
        console.log(cities)
    }, [])
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
    </div>
  )
}

export default CitiesByTitle
