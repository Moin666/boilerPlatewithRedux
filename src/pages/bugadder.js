import { Button, Box } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectAdded, selectUnresolvedProjects } from "../confiq/Store/project";

import {apiCallBegan} from '../confiq/Store/bugs'









const action = {
  type:"apiCallBegan",
  payload:{
      url:"https://jsonplaceholder.typicode.com/posts",
      onSuccess:"successApiCall",
      onError:"failureApiCall"
  }
}     



function BugAdder(props) {
  let data = useSelector(data => data);
  let dispatch = useDispatch(projectAdded({}));

  const showData = () => {
    console.log(data);

    let newData = selectUnresolvedProjects(data)

    console.log("unseloved Bugs",newData )
  };

  return (
    <div>
      <Box>
        <Button variant="contained" onClick={showData}>
          Show Data
        </Button>
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              projectAdded({
                id: "1",
                description: "due to software",
                resolved: false,
              })
            );
          }}
        >
          Bug Added
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              (   {  type:"apiCallBegan",
                    payload:{
                          url:"https://jsonplaceholder.typicode.com/posts",
                          onSuccess:"successApiCall",
                          onError:"failureApiCall"
                      }})
            );
          }}
        >
        Api Call
        </Button>
      </Box>
    </div>
  );
}

export default BugAdder;
