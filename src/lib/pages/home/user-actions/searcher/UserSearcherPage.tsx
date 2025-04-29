import MotionImplementaton, { Direction } from "@components/MotionImplementation";

function UserSearcherPage() {
  return (
    <MotionImplementaton  direction={Direction.RIGHT}>
      <p>User Search Page</p>
    </MotionImplementaton>
  );
}

export default UserSearcherPage;