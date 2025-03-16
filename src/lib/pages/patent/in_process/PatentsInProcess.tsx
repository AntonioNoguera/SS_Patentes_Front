import MotionImplementaton, { Direction } from "@components/MotionImplementation";

function PatentInProcess() {
  return (
    <MotionImplementaton  direction={Direction.RIGHT}>
      <p>Hello these are my patents in process!</p>
    </MotionImplementaton>
  );
}

export default PatentInProcess;