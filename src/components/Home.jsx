import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    return (
        <AppBar color="default">
            <Toolbar>
                <h3 style={{ flexGrow: "1" }}>Domain</h3>
                {!user && (
                    <React.Fragment>
                        <Link to="/login">
                            <Button
                                style={{ marginRight: "10px" }}
                                variant="outlined"
                                color="secondary"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="outlined" color="secondary">
                                Signup
                            </Button>
                        </Link>
                    </React.Fragment>
                )}
                {user && (
                    <React.Fragment>
                        <h4 style={{ marginRight: "15px" }}>{user.name}</h4>
                        <Link to="/logout">
                            <Button variant="outlined" color="secondary">
                                Logout
                            </Button>
                        </Link>
                    </React.Fragment>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Home;
