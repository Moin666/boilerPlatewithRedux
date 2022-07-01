import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";


function MiCards({imgUrl}) {
  return (
    <div>

              <Stack spacing={1} >
                <Box sx={{ width: "95%" }}>
                  <img width="100%" src={imgUrl}></img>
                </Box>
                <Paper elevation={1}>
                  <Stack spacing={1} padding={1}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">Luxury Room</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="body1">
                        Location:Islamabad
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="caption">RS:19,99/ Day</Typography>
                      <Button sx={{ marginLeft: "10px" }} variant="contained">
                        BOOK NOW
                      </Button>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
       
    </div>
  );
}

export default MiCards;
