import { List, ListItem } from "@mui/material";
import { useMemo } from "react";
import { config } from "../lib";

export const LibList = () => {
    const listItems = useMemo(() => {
        return config.map((el) => <ListItem key={el.label}>{el.label}</ListItem>);
    }, []);

    return (
        <List>
            {listItems}
        </List>
    );
}