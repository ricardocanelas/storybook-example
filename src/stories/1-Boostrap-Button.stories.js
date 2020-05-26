import React from "react";
import Button from "react-bootstrap/Button";

export default {
  title: "Boostrap-Button",
  component: Button,
};

export const Variant = () => {
  return (
    <div>
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
};
