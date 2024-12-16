import React from "react";

export default function useToggle() {
  const [value, setValue] = React.useState(false);

  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue];
}
