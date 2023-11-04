import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/Nav.css";
import "../styles/KanbanBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import {
  GROUPING_OPTIONS,
  GROUPING_VALUES,
  PRIORITY_MAPPING,
  PRIORITY_ICONS,
  STATUS_ICONS,
  USERS_ICONS,
  STATUS_MAPPING,
  ORDERING_OPTIONS,
  PLUS,
  DOT,
} from "../utils/constants";
import useLocalStorage from "../hooks/useLocalStorage";

const KanbanBoard = () => {
  const [defaultGroupingOption, updateGroupingOption] = useLocalStorage(
    "groupingOption",
    GROUPING_OPTIONS.STATUS
  );

  const [defaultOrderingOption, updateOrderingOption] = useLocalStorage(
    "orderingOption",
    ORDERING_OPTIONS.PRIORITY
  );

  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const [groupingOption, setGroupingOption] = useState(GROUPING_OPTIONS.STATUS);
  const [orderingOption, setOrderingOption] = useState(
    ORDERING_OPTIONS.PRIORITY
  );

  useEffect(() => {
    if (defaultGroupingOption !== groupingOption) {
      updateGroupingOption(groupingOption);
    }
    if (defaultOrderingOption !== orderingOption) {
      updateOrderingOption(orderingOption);
    }
  }, [groupingOption, orderingOption]);

  useEffect(() => {
    setGroupingOption(defaultGroupingOption);
    setOrderingOption(defaultOrderingOption);
  }, []);

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        const responseTickets = response.data.tickets.map((ticket) => ({
          ...ticket,
          user: response.data.users.find((user) => user.id === ticket.userId)
            .name,
        }));
        setTickets(responseTickets);
        setUsers(response.data.users.map((user) => user.name));
      });
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="nav">
        <button id="display" onClick={togglePopup}>
          <FontAwesomeIcon className="iconBefore" icon={faSlidersH} /> Display
          <FontAwesomeIcon className="iconAfter" icon={faAngleDown} />
        </button>
        <Filter
          show={showPopup}
          onClose={togglePopup}
          groupingOption={groupingOption}
          setGroupingOption={setGroupingOption}
          setOrderingOption={setOrderingOption}
          orderingOption={orderingOption}
        />
      </div>
      <div>
        <div className="kanban-board">
          {(groupingOption === GROUPING_OPTIONS.USER
            ? users
            : GROUPING_VALUES[groupingOption]
          ).map((option) => (
            <Temp
              key={option}
              option={option}
              groupingOption={groupingOption}
              tickets={tickets}
              orderingOption={orderingOption}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;

const Temp = ({ option, groupingOption, tickets, orderingOption }) => {
  const newTickets = tickets
    ?.filter((ticket) => ticket[groupingOption] === option)
    ?.sort((a, b) => {
      const valueA = a[orderingOption];
      const valueB = b[orderingOption];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return valueB - valueA;
      } else {
        return 0;
      }
    });

  return (
    <div key={option} className="flex-column">
      <div className="priority flex items-center">
        <div className="flex items-center">
          {groupingOption === GROUPING_OPTIONS.PRIORITY ? (
            <>
              <span className="priority-icons">{PRIORITY_ICONS[option]}</span>
              <span className="bold">{PRIORITY_MAPPING[option]}</span>
            </>
          ) : groupingOption === GROUPING_OPTIONS.STATUS ? (
            <>
              <span className="status-icons">
                {STATUS_ICONS[STATUS_MAPPING[option]]}
              </span>
              <span className="bold">{option}</span>
            </>
          ) : (
            <>
              <span className="user-icons">{USERS_ICONS[option]}</span>
              <span className="margin-left bold">{option}</span>
            </>
          )}
          <span className="count thin">{newTickets?.length}</span>
        </div>

        <div>
          <img src={require(`../assets/${PLUS}`)} alt="" />

          <img src={require(`../assets/${DOT}`)} alt="" />
        </div>
      </div>

      <Tickets groupingOption={groupingOption} tickets={newTickets} />
    </div>
  );
};

const Tickets = ({ tickets, groupingOption }) => {
  return (
    <div className="flex-column gap-10">
      {tickets?.map((ticket) => (
        <Card
          status={ticket.status}
          user={ticket.user}
          groupingOption={groupingOption}
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          tag={ticket.tag}
          priority={ticket.priority}
        />
      ))}
    </div>
  );
};
