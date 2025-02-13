/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img src="/images/TicketLogo.svg" alt="logo" className="nav-logo" />
      <div className="nav-links">
        <Link href={""}>Events</Link>
        <Link href={""}>My Tickets</Link>
        <Link href={""}>About Project</Link>
      </div>
      <Link href={""} className="nav-btn">
        <p>My Tickets</p>
        <IoIosArrowRoundForward />
      </Link>
    </nav>
  );
};

export default Nav;
