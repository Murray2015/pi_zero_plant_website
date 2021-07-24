import React from "react";

export default function Header() {
  return (
    <header className="bg-green-500 w-full flex-grow">
      <h1 className=" text-4xl font-bold text-white pt-10 capitalize">
        Bradley the basil plant
      </h1>
      <h2 className="text-2xl font-normal text-gray-100 py-6">
        Because a &lt;£1 plant from the supermarket deserves £100 worth of
        instrumentation, it's own dedicated website, a serverless backend, and [probably] a
        fan following.
      </h2>
    </header>
  );
}
