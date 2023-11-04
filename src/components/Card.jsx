import React from "react";
import "../styles/Card.css";
import {
  GROUPING_OPTIONS,
  USERS_ICONS,
  PRIORITY_ICONS,
  STATUS_MAPPING,
  STATUS_ICONS,
} from "../utils/constants";

const Card = ({ id, title, user, priority, tag, groupingOption, status }) => {
  return (
    <div className="card">
      <div className="flex">
        <p className="Taskid">{id}</p>
        <div className="user">
          {(groupingOption === GROUPING_OPTIONS.PRIORITY ||
            groupingOption === GROUPING_OPTIONS.STATUS) &&
            USERS_ICONS[user]}
        </div>
      </div>
      <div className="flex">
        <div class="status-icons">
          {(groupingOption === GROUPING_OPTIONS.PRIORITY ||
            groupingOption === GROUPING_OPTIONS.USER) &&
            STATUS_ICONS[STATUS_MAPPING[status]]}
        </div>
        <span className="title bold">{title}</span>
      </div>
      <div className="flex items-center gap-2 mtop-5" style={{}}>
        <div className="priority-icon">
          {(groupingOption === GROUPING_OPTIONS.STATUS ||
            groupingOption === GROUPING_OPTIONS.USER) &&
            PRIORITY_ICONS[priority]}
        </div>
        <div className="Tag">
          <div className="circle"></div>
          {tag}
        </div>
      </div>
    </div>
  );
};

export default Card;
