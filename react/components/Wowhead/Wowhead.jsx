import React from "react";
import { useStyles } from "./useStyles";

const Wowhead = ({ item_id, icon }) => {
  const styles = useStyles();
  return (
    <div>
      <a data-wowhead href={`https://tbc.wowhead.com/item=${item_id}`}>
        <img
          className={styles.img}
          src={`https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`}
          alt={`${item_id}`}
        />
      </a>
    </div>
  );
};

export default Wowhead;
