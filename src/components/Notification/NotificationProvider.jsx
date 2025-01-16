import React from "react";

export const NotificationContext = React.createContext();

function NotificationProvider({ children }) {
  const [isNotifOpen, setIsNotifOpen] = React.useState(false);

  const notificationContextValues = React.useMemo(() => {
    return { isNotifOpen, setIsNotifOpen };
  }, [isNotifOpen]);

  return (
    <NotificationContext.Provider value={notificationContextValues}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
