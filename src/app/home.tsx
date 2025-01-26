import { routenames } from "@/lib/constants";
import React from "react";
import { Link } from "react-router-dom";
import { WiredCard, WiredLink } from "react-wired-elements";

export const Home = () => {
  return (
    <div className="">
      <WiredCard
        className="w-full h-screen flex flex-col justify-center items-center"
        elevation={2}
      >
        <WiredCard elevation={4}>
          <h2 className="text-lg">Welcome,</h2>
        </WiredCard>
        <h3 className="text-3xl mt-2">I'm Maroof,</h3>
        <p className="mt-4">I build software products</p>
        <div className="flex gap-2 mt-8">
          <WiredLink elevation={3}>
            <Link to={routenames.nowhere}>/Apps</Link>
          </WiredLink>
          <WiredLink elevation={3}>
            <Link to={routenames.nowhere}>/About</Link>
          </WiredLink>
          <WiredLink elevation={3}>
            <Link to={routenames.nowhere}>/Contact</Link>
          </WiredLink>
        </div>
      </WiredCard>
    </div>
  );
};
