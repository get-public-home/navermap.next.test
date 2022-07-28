import React from "react";
import { MapContext } from "../components/NaverMap";

export default function useMap() {
  const map = useContext(MapContext);
  return map;
}
