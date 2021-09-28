import { useState, useCallback } from "react";
import ReactFlow from "react-flow-renderer";
import initialEls from "../DataServices/MockNodeData";
import "../styles/boardView.scss";

// setting board size
// src https://reactflow.dev/examples/
const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

export default function Boardview() {
  const [elements, setElements] = useState(initialEls);

  // "add" btn functionality
  // src: https://reactflow.dev/examples/save-and-restore/
  const setNodeId = () => `randomnode_${+new Date()}`;

  const addNode = useCallback(() => {
    const newNode = {
      id: setNodeId(),
      data: { label: "Added node" },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setElements((els) => els.concat(newNode));
  }, [setElements]);

  return (
    <div id="board-view">
      <h1>Research-storyboard</h1>
      <button onClick={addNode}>Add Node</button>
      <ReactFlow elements={elements} onLoad={onLoad} />
    </div>
  );
}
