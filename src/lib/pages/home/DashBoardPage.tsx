import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { NavLink } from "react-router-dom";
import MotionImplementaton from "@components/MotionImplementation";
import Layout from "../shared/Layout";

function DashBoardPage() {
  return (
      <MotionImplementaton>
          <Layout />
      </MotionImplementaton>
  );
}

export default DashBoardPage;