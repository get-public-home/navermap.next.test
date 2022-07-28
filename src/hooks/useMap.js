import React, { useContext } from "react";
import { NaverMapContext } from "../components/NaverMap";

export default function useMap({ componentName }) {
  const naverMap = useContext(NaverMapContext);
  if (!naverMap) {
    throw new Error(
      `${
        componentName ? componentName + " Component" : "useMap"
      } must exist inside Map Component!`
    );
  }

  return naverMap;
}
