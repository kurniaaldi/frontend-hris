import React from "react";

/* eslint-disable no-console */
export const locateCurrentPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        resolve(position);
      },
      (error) => {
        console.log(error.message);
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000,
      }
    );
  });

export function getCurrentTime() {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return "Good Morning";
  }
  if (curHr < 18) {
    return "Good Afternoon";
  }
  return "Good Evening";
}

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `It's ${day}, ${today.getDate()} ${today.toLocaleDateString(
    locale,
    {
      month: "long",
    }
  )}\n\n`;

  const hour = today.getHours();
  const minutes = today.getMinutes();
  const ampm = hour >= 12 ? "pm" : "am";

  const year = today.getFullYear();
  // const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "2-digit",
    hour12: true,
    minute: "numeric",
  });

  const fullDate = `${day}, ${today.getDate()} ${today.toLocaleDateString(
    locale,
    {
      month: "short",
    }
  )} ${year}`;

  return {
    date,
    time,
    hour,
    minutes,
    ampm,
    fullDate,
    wish,
  };
};
