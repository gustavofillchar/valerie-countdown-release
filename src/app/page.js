"use client";

import React, { useState, useEffect } from "react";
import "typeface-montserrat";

const CountdownTimer = () => {
  const targetDate = new Date("2023-09-29T15:00:00-03:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
    if (timeRemaining <= 0) {
      // O tempo expirou
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-black"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <img src="/logo.svg" alt="Logo" className="mb-10 max-w-xs" />
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-2/3 lg:w-1/2 xl:w-1/3 m-5">
        <h1 className="text-lg font-mono mb-4 text-center">
          Contando os segundos para a inauguração!
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 text-center">
          <div className="text-3xl">
            <span className="font-semibold font-mono">
              {timeRemaining.days}
            </span>
            <span className="text-xs block">
              {timeRemaining.days === 1 ? "Dia" : "Dias"}
            </span>
          </div>
          <div className="text-3xl">
            <span className="font-semibold font-mono">
              {timeRemaining.hours}
            </span>
            <span className="text-xs block">
              {timeRemaining.hours === 1 ? "Hora" : "Horas"}
            </span>
          </div>
          <div className="text-3xl">
            <span className="font-semibold font-mono">
              {timeRemaining.minutes}
            </span>
            <span className="text-xs block">
              {timeRemaining.minutes === 1 ? "Minuto" : "Minutos"}
            </span>
          </div>
          <div className="text-3xl">
            <span className="font-semibold">{timeRemaining.seconds}</span>
            <span className="text-xs block">
              {timeRemaining.seconds === 1 ? "Segundo" : "Segundos"}
            </span>
          </div>
        </div>
        <h1 className="text-xs font-mono mt-6 text-center text-gray-400">
          #SaveTheDate 29/09/2023
        </h1>
      </div>
    </div>
  );
};

export default CountdownTimer;
