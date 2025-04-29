import MotionImplementaton, { Direction } from "@components/MotionImplementation"; 

function ListPatents() {
  return (
    <MotionImplementaton  direction={Direction.RIGHT}>
          <p>Hello these are my patents!</p>
    </MotionImplementaton> 
  );
}

export default ListPatents;