import { Button } from "@mui/material";
import { useCountStore } from "../state/useCountStore";

function Buttons() {
  const deleteEverything = useCountStore((state) => state.deleteEverything);

  const handleClick = () => {
    const body = useCountStore.getState().getRequestBody();
    console.log(body);
  };

  return (
    <>
      <Button onClick={deleteEverything}>Delete it all</Button>
      <Button onClick={handleClick}>Get Request Body</Button>
    </>
  );
}

export default Buttons;
