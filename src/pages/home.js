import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

import { Grid } from "@mui/material";
import MiCards from "../components/cards";

function Home(props) {
  const data = useSelector((data) => data);
  console.log(data);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundImage: `url("https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`,
        }}
      ></Box>
      <Box sx={{ marginTop: "15px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ margin: "auto" }}
          >
        <Grid container spacing={2}>
              {data.entities.hotels.list.map((item) => (
                <Grid item xs={12} md={4}>
                  <MiCards imgUrl={item.data.imgUrl} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
