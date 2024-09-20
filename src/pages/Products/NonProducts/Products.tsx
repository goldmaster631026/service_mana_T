import { type FC, memo } from "react";
import { Outlet } from "react-router-dom";

const Products: FC = () => <Outlet />;

export default memo(Products);
