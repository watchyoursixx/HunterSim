import { useEffect, useState } from "react";
import "./App.css";

import Button from "@mui/material/Button";
import Dialogcontent from "./components/DialogTable/DialogTable";
import { GEAR_KEYS } from "./constants/gearKeys";
function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = (gear_key) => {
    setSelectedGearKey(gear_key);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [selectedGearKey, setSelectedGearKey] = useState(null);

  return (
    <div>
      {Object.values(GEAR_KEYS).map((gear_key) => (
        <Button onClick={() => handleOpen(gear_key)} variant="contained">
          open dialog {gear_key}
        </Button>
      ))}
      {selectedGearKey && (
        <Dialogcontent
          key={selectedGearKey}
          gearKey={selectedGearKey}
          handleClose={handleClose}
          open={open}
        />
      )}
    </div>
  );
}

export default App;
