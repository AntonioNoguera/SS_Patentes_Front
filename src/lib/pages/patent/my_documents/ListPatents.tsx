import MotionImplementaton, { Direction } from "@components/MotionImplementation";
import UserInfoComponent from "../../../components/UserInfoComponent";

function ListPatents() {
  return (
    <MotionImplementaton  direction={Direction.RIGHT}>
          <p>Hello these are my patents!</p>
    </MotionImplementaton> 
  );
}

export default ListPatents;