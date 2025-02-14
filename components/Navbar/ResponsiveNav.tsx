"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function ResponsiveNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleMobileNavShow = () => {
    setShowMobileNav(true);
  };
  const handleMobileNavHide = () => {
    setShowMobileNav(false);
  };

  return (
    <div>
      <Nav openNav={handleMobileNavShow} />
      <MobileNav showMobileNav={showMobileNav} closeNav={handleMobileNavHide} />
    </div>
  );
}
