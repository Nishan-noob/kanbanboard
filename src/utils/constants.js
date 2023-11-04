import {
  NoPriorityIcon,
  LowIcons,
  MediumIcons,
  HighIcons,
  UrgentIcons,
  BacklogIcon,
  TodoIcon,
  InProgressIcon,
  DoneIcon,
  CancelIcon,
  User0,
  User1,
  User2,
  User3,
  User4
} from "../components/Icons";

export const GROUPING_OPTIONS = {
  STATUS: "status",
  PRIORITY: "priority",
  USER: "user",
};

export const ORDERING_OPTIONS = {
  PRIORITY: "priority",
  TITLE: "title",
};
export const GROUPING_VALUES = {
  status: ["Backlog", "Todo", "In progress", "Done", "Canceled"],
  priority: [0, 1, 2, 3, 4],
};
export const PRIORITY_MAPPING = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

export const PRIORITY_ICONS = {
  0: <NoPriorityIcon />,
  1: <LowIcons />,
  2: <MediumIcons />,
  3: <HighIcons />,
  4: <UrgentIcons />,
};

export const STATUS_MAPPING = {
  Todo: 0,
  Backlog: 1,
  "In progress": 2,
  Done: 3,
  Canceled: 4,
};


export const STATUS_ICONS = {
  0: <TodoIcon/>,
  1: <BacklogIcon/>,
  2: <InProgressIcon/>,
  3: <DoneIcon/>,
  4: <CancelIcon/>,
};

export const USERS_ICONS ={
  "Suresh":<User0/>,
  "Ramesh":<User1/>,
  "Shankar Kumar":<User2/>,
  "Yogesh":<User3/>,
  'Anoop sharma':<User4/>
}

export const PLUS = "plus.svg";
export const DOT = "dot.png";
