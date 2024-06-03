'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const getWeather = () => {
    
  }

  return (
    <main>
      <h1>Weather App</h1>
      <p>Get the weather for any location</p>
      <input type="text" placeholder="Location" value={city} />
      <button onClick={getWeather}>Get Weather</button>
    </main>
  );
}
