import React from "react";

const Listtask = ({ task, index, removeTask }) => {
  return (
    <>
      <div className="list-task">
        {task.title}
        <button
          onClick={() => {
            removeTask(index);
          }}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Listtask;
