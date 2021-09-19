/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Timeline from "../components/timeline"

function dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  });

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

export default dashboard;