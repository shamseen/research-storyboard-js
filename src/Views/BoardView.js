import React from "react";
import ReactFlow from "react-flow-renderer";
import nodeElements from "../DataServices/MockNodeData";
import "../styles/boardView.scss";

// setting board size
// src https://reactflow.dev/examples/
const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

export default function Boardview() {
  return (
    <div id="board-view">
      <h1>Research-storyboard</h1>
      <ReactFlow elements={nodeElements} onLoad={onLoad} />
    </div>
  );
}
