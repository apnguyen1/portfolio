import {AppBar, Toolbar, Typography} from "@mui/material";

function Navigation() {
    return(
        <header>
            <AppBar>
                <Toolbar>
                    <Typography variant={"h6"} color={"inherit"} component={"a"} href={"#"} >
                        About me
                    </Typography>
                    <Typography variant={"h6"} color={"inherit"} component={"a"} href={"#"} >
                        Projects
                    </Typography>
                    <Typography variant={"h6"} color={"inherit"} component={"a"} href={"#"} >
                        About me
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export {Navigation}