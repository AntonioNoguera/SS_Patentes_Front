import MotionImplementaton from "@components/MotionImplementation";
import StatusTitle from "./components/StatusTitle"; 
import Table from "@pages/playground/SteperTest";

function PatentStatus() {
    return (
        <MotionImplementaton>
            <main className="bg-blackw-full flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-10 py-14 gap-5 overflow-hidden">
                <StatusTitle/> 
                <Table/>
            </main>
        </MotionImplementaton>
    );
}

export default PatentStatus;