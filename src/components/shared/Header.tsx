"use client";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{backgroundColor:"#374151"}}>
      <Container maxWidth="lg">
        <Toolbar style={{ padding: "0" }}>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            وبلاگ آموزش برنامه نویسی
          </Typography>
          <StyleIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
