import {
  Button,
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import React, { useEffect, useMemo, useState } from "react";
import {
  MELEE_WEAPONS,
  AMMOS,
  BACKS,
  CHESTS,
  GEAR_MAP,
  FEET,
  HANDS,
  HEADS,
  QUIVERS,
  LEGS,
  SHOULDERS,
  TRINKETS,
  WAISTS,
  RANGED_WEAPONS,
  WRISTS,
  RINGS,
  NECKS,
  SETS,
  gear as equippedGear,
} from "../../hunter-sim/js/data/gear";
import Wowhead from "../Wowhead/Wowhead";
import { useStyles } from "./useStyles";

const Dialogcontent = ({ handleClose, open, gearKey }) => {
  const [selectedGear, setSelectedGear] = useState([]);
  const gearData = useMemo(() => {
    return {
      MELEE_WEAPONS,
      AMMOS,
      BACKS,
      CHESTS,
      GEAR_MAP,
      FEET,
      HANDS,
      HEADS,
      QUIVERS,
      LEGS,
      SHOULDERS,
      TRINKETS,
      WAISTS,
      RANGED_WEAPONS,
      WRISTS,
      RINGS,
      NECKS,
      SETS,
    };
  }, []);
  useEffect(() => {
    const gearArray = [];
    if (!gearKey) return;
    const selectedGearObj = gearData[gearKey];
    if (!selectedGearObj) return;
    for (const [key, value] of Object.entries(selectedGearObj)) {
      gearArray.push({ data: { ...value, key } });
      console.log(gearArray);
    }
    setSelectedGear(gearArray);
  }, [gearData, gearKey]);

  const styles = useStyles();

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogContent style={{ background: "#313135" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DPS</TableCell>
              <TableCell>Delta</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedGear.length > 0 &&
              selectedGear.map((gear, i) => (
                <TableRow
                  style={
                    i % 2 === 0
                      ? { background: "#2e2e33" }
                      : { background: "#252529" }
                  }
                  key={gear.key}
                >
                  <TableCell>
                    <Wowhead item_id={gear.data.key} icon={gear.data.icon} />
                  </TableCell>
                  <TableCell
                    styles={{ fontSize: 14, fontFamily: "Open Sans" }}
                    className={styles[gear.data.quality]}
                  >
                    {gear.data.name}
                  </TableCell>
                  <TableCell>
                    {gear.data.mindmg} - {gear.data.maxdmg}
                  </TableCell>
                  <TableCell>Some Delta ~</TableCell>
                  <TableCell>{gear.data.Location}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Button onClick={handleClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Dialogcontent;
