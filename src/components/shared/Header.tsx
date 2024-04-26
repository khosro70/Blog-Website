"use client";
import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#374151" }}>
      <Container maxWidth="lg">
        <Toolbar style={{ padding: "0" }}>
          <Link href="/" style={{ flexGrow: 1 }}>
            <Typography component="h1" variant="h5" fontWeight="bold">
              وبلاگ آموزش برنامه نویسی
            </Typography>
          </Link>
          <StyleIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
