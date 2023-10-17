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

export function test() {
  return "success";
}
