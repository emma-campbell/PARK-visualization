import React from "react";

const AppContext = React.createContext({
  isPatient: true,
  isNew: true,
  videoNumber: 1,
  setIsPatient: () => {},
  setIsNew: () => {},
  setVideoNumber: () => {},
});

export default AppContext;
