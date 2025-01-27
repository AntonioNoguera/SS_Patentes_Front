import React from "react";

import Navbar from "@shared/Navbar";
import Footer from "@shared/Footer";

import MotionImplementaton from "@components/MotionImplementation";
import { useParams } from "react-router-dom";

function CreateNewPatent() {

    const { type } = useParams();

    return (
        <MotionImplementaton>
            <div className="h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <h1>{type}</h1>
                </main>
                <Footer />
            </div>
        </MotionImplementaton>
    );
}

export default CreateNewPatent;
