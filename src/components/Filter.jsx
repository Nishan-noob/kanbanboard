import React from "react";
import "../styles/Filter.css";

const Filter = ({
  show,
  onClose,
  groupingOption,
  setGroupingOption,
  setOrderingOption,
  orderingOption,
}) => {
  const handleGroupingChange = (event) => {
    const newGroupingOption = event.target.value;
    setGroupingOption(newGroupingOption);

    onClose();
  };

  const handleOrderingChange = (event) => {
    const newOrderingOption = event.target.value;
    setOrderingOption(newOrderingOption);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="popup">
      <div className="row">
        <p>Grouping:</p>
        <select
          id="groupSelect"
          value={groupingOption}
          onChange={handleGroupingChange}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="row">
        <p>Ordering:</p>
        <select
          id="orderSelect"
          value={orderingOption}
          onChange={handleOrderingChange}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
