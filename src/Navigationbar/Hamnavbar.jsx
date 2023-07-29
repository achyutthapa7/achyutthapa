import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button, Typography } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import styled from "@emotion/styled";
const StyledTypography = styled(Typography)({
  transition: "500ms linear",
  ":hover": {
    opacity: 0.7,
  },
});
export default function Hamnavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <div className="ham_menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: "#1976d2",

            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="#Home" smooth className="link">
            <StyledTypography variant="h5">Home</StyledTypography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="#About" smooth className="link">
            <StyledTypography variant="h5">About</StyledTypography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="#Work" smooth className="link">
            <StyledTypography variant="h5">Work</StyledTypography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="#Contact" smooth className="link">
            <StyledTypography variant="h5">Contact</StyledTypography>
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
