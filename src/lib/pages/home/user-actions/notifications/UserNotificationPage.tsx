import MotionImplementaton, { Direction } from "@components/MotionImplementation";

function UserNotificationPage() {
  return (
    <MotionImplementaton  direction={Direction.RIGHT}>
      <p>User Notification Center!</p>
    </MotionImplementaton>
  );
}

export default UserNotificationPage;