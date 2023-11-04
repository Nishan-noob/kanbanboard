export const NoPriorityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 550 512">
    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
  </svg>
);

export const LowIcons = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-signal-low"
  >
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
  </svg>
);

export const MediumIcons = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-signal-medium"
  >
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
  </svg>
);

export const HighIcons = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-signal-high"
  >
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
    <path d="M17 20V8" />
  </svg>
);

export const UrgentIcons = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 30 20"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-alert-circle"
  >
    <circle cx="14" cy="12" r="10" />
    <line x1="14" x2="14" y1="8" y2="12" /> {/* Adjust x1 and x2 values */}
    <line x1="14" x2="14.01" y1="16" y2="16" /> {/* Adjust x1 and x2 values */}
  </svg>
);

export const BacklogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-circle-dashed"
  >
    <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
    <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
    <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
    <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
    <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
    <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
    <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
    <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
  </svg>
);
export const TodoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-circle"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);
export const InProgressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-clock-5"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 14.5 16" />
  </svg>
);
export const DoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-check-circle"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);
export const CancelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-x-circle"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

export const User0 =()=>(
  <img
    src={require('../assets/user0.jpg')} // Adjust the path to your PNG image
    alt="user0"
    width="24"
    height="24"
    style={{ borderRadius: "50%" }}
  />
)
export const User1 =()=>(
  <img
    src={require('../assets/user1.jpg')} // Adjust the path to your PNG image
    alt="user1"
    width="24"
    height="24"
    style={{ borderRadius: "50%" }}
  />
)

export const User2 =()=>(
  <img
    src={require('../assets/user2.jpg')} // Adjust the path to your PNG image
    alt="user2"
    width="24"
    height="24"
    style={{ borderRadius: "50%" }}
  />
)
export const User3 =()=>(
  <img
    src={require('../assets/user3.jpg')} // Adjust the path to your PNG image
    alt="user3"
    width="24"
    height="24"
    style={{ borderRadius: "50%" }}
  />
)
export const User4 =()=>(
  <img
    src={require('../assets/user4.jpg')} // Adjust the path to your PNG image
    alt="user4"
    width="24"
    height="24"
    style={{ borderRadius: "50%" }}
  />
)
