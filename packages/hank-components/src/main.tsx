import ClanCreateSection from "./ClanCreateSection";
import Button from "./Button";
import InviteInput from "./InviteInput";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <ClanCreateSection />

      <Button>Click me</Button>

      <InviteInput />
    </div>
  </React.StrictMode>
);

// export { ClanCreateSection, InviteInput, Button };
