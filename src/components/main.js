import React from "react";
import Graph from "./Graph";

export default function Main() {
  return (
    <main className="container mx-auto h-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 auto-rows-max bg-green-100 border-green-500 border-2 rounded-md p-5 mt-5">
        <div className="text-lg p-5 ">
          <h2 className="text-green-500 font-bold uppercase text-2xl underline">
            This is Bradley
          </h2>
          <p className="text-left text-gray-900">
            Bradley was bought in M&S in Birmingham in June 2021 for 31 pence on
            a yello sticker, as he was "past his best before date"?!
          </p>
          <p className="text-left text-gray-900">
            Bradley deserves a second chance in a new home. So I rescued
            Bradley, and am measuring him as he perks up.
          </p>
        </div>
        <div>
          <img
            src="https://static-plant-site.s3.us-east-2.amazonaws.com/plant.jpg"
            alt="Bradley the Basil plant"
            className="rounded-md shadow-lg mt-5 lg:mt-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 auto-rows-max bg-green-100 border-green-500 border-2 rounded-md p-5 mt-10">
        <div className="text-left text-gray-900">
          Bradley is being montored with a Raspberry Pi Zero connected to a
          Waveshere Sense Hat (b) and a Raspberry Pi Camera module, all
          connected to the web through an Alfa Network USB WiFi ariel (Because I
          bought a Raspberry Pi Zero not a Raspberry Pi Zero W with WiFi. Like a
          noob.). Photos and measurements are being sent to AWS DynamoDB and S3
          storage. This website was built with React and Tailwind CSS.
        </div>
        <div className="mt-5 md:mt-0">
          <Graph />
        </div>
      </div>
    </main>
  );
}
