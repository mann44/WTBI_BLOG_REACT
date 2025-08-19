import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen12 } from "./screens/Screen12";
import { Screen13 } from "./screens/Screen13";
import { Screen14 } from "./screens/Screen14";
import { TheBerg } from "./screens/TheBerg";
import { TheBergAssetupload } from "./screens/TheBergAssetupload";
import { TheBergAssetuploadScreen } from "./screens/TheBergAssetuploadScreen";
import { TheBergScreen } from "./screens/TheBergScreen";
import { TheBergTeam } from "./screens/TheBergTeam";
import { TheBergTheGreen } from "./screens/TheBergTheGreen";
import { TheBergWorldMap } from "./screens/TheBergWorldMap";
import { TheBergWorldMapScreen } from "./screens/TheBergWorldMapScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen14 />,
  },
  {
    path: "/the-berg-2",
    element: <Screen14 />,
  },
  {
    path: "/the-berg-assetupload-1",
    element: <TheBergAssetupload />,
  },
  {
    path: "/the-berg-assetupload-7",
    element: <TheBergAssetuploadScreen />,
  },
  {
    path: "/the-berg-assetupload-5",
    element: <DivWrapper />,
  },
  {
    path: "/the-berg-assetupload-2",
    element: <Screen3 />,
  },
  {
    path: "/the-berg-assetupload-3",
    element: <Screen4 />,
  },
  {
    path: "/the-berg-assetupload",
    element: <Screen5 />,
  },
  {
    path: "/the-berg-world-map-1",
    element: <TheBergWorldMap />,
  },
  {
    path: "/the-berg-4",
    element: <TheBerg />,
  },
  {
    path: "/the-berg-3",
    element: <TheBergScreen />,
  },
  {
    path: "/the-berg-the-green-spot",
    element: <TheBergTheGreen />,
  },
  {
    path: "/the-berg-team-spotlight",
    element: <TheBergTeam />,
  },
  {
    path: "/the-berg-world-map",
    element: <TheBergWorldMapScreen />,
  },
  {
    path: "/the-berg-1",
    element: <Screen12 />,
  },
  {
    path: "/the-berg-sitedirector",
    element: <Screen13 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
