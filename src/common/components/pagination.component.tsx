import React from "react";

import PaginationMUI, { PaginationProps } from "@mui/material/Pagination";

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <PaginationMUI {...props}/>;
};
