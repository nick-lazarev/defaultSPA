import { logout } from "@entities/auth";
import { Button, Stack } from "@mui/material";
import { LibList } from "@widgets";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const IndexPage = () => {
    const dispatch = useDispatch();

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, []);

    return (
        <Stack spacing={4}>
            <h1>Default SPA</h1>
            <LibList />
            <Button onClick={handleLogout}>Logout</Button>
        </Stack>
    );
}