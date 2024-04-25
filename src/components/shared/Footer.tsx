import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#374151",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <Typography component="p" variant="h6">
        پروژه ی وبلاگ با GraphQL
      </Typography>
    </Box>
  );
};

export default Footer;
