import MotionImplementaton, { Direction } from "@components/MotionImplementation";

function UserHelpPage() {
  return (
    <MotionImplementaton  direction={Direction.RIGHT}>
      <p> User Help Center</p>
    </MotionImplementaton>
  );
}

export default UserHelpPage;