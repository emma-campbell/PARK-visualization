import React from "react";

const AppContext = React.createContext({
  isPatient: true,
  videoNumber: 1,
  setIsPatient: () => {},
  setVideoNumber: () => {},
});

export default AppContext;
