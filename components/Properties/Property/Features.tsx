import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { SxProps, useTheme } from "@mui/material/styles";
import BedroomIcon from "@mui/icons-material/BedroomParentOutlined";
import BathroomIcon from "@mui/icons-material/BathroomOutlined";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { IProperty } from "@/types/property";

const Features: FC<IProperty & { sx?: SxProps }> = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={props.sx}
      display="flex"
      gap={2}
      flexDirection="row"
      alignItems="flex-end"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          gap: 1,
        }}
      >
        <Typography
          fontWeight={500}
          variant="body1"
          component="div"
          sx={{ color: { xs: theme.palette.grey[800], md: "white" } }}
        >
          Bedrooms
        </Typography>
        <Box gap={1} display="flex" alignItems="center" flexDirection="row">
          <BedroomIcon
            fontSize="medium"
            sx={{
              color: { xs: theme.palette.grey[700], md: "white" },
            }}
          />
          <Typography fontSize="1.2rem" fontWeight={700}>
            {props.numberOfBedrooms}
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ display: { xs: "none", md: "block" }, backgroundColor: "white" }}
        orientation="vertical"
        flexItem
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          gap: 1,
        }}
      >
        <Typography
          fontWeight={500}
          variant="body1"
          component="div"
          sx={{ color: { xs: theme.palette.grey[800], md: "white" } }}
        >
          Bathrooms
        </Typography>
        <Box gap={1} display="flex" alignItems="center" flexDirection="row">
          <BathroomIcon
            fontSize="medium"
            sx={{
              color: { xs: theme.palette.grey[700], md: "white" },
            }}
          />
          <Typography fontSize="1.2rem" fontWeight={700}>
            {props.numberOfBathrooms}
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ display: { xs: "none", md: "block" }, backgroundColor: "white" }}
        orientation="vertical"
        flexItem
      />
      <Box>
        <Typography
          fontWeight={500}
          variant="body1"
          component="span"
          sx={{ color: { xs: theme.palette.grey[800], md: "white" } }}
        >
          Area
        </Typography>
        <Box
          pt={1}
          gap={1}
          display="flex"
          alignItems="center"
          flexDirection="row"
        >
          <Typography fontSize="1.2rem" fontWeight={700}>
            {props.totalLandArea} ft<sup>2</sup>
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ display: { xs: "none", md: "block" }, backgroundColor: "white" }}
        orientation="vertical"
        flexItem
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          gap: 1,
        }}
      >
        <Typography
          sx={{ color: { xs: theme.palette.grey[800], md: "white" } }}
          fontWeight={500}
          variant="body1"
          component="div"
        >
          Parking Spaces
        </Typography>
        <Box gap={1} display="flex" alignItems="center" flexDirection="row">
          <DriveEtaIcon
            fontSize="medium"
            sx={{
              color: { xs: theme.palette.grey[700], md: "white" },
            }}
          />
          <Typography fontSize="1.2rem" fontWeight={700}>
            {props.parkingSpace}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
