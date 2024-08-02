import { useState } from "react";
import Button from "./Button";

import "./index.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onInvite?: (invite: string) => void;
  borderColor?: "primary" | "gray-2";
}

export default function InviteInput({
  onInvite,
  borderColor = "primary",
  ...inputProps
}: Props) {
  const [invite, setInvite] = useState("");

  return (
    <div
      className={`relative w-full h-[40px] border border-solid rounded-[10px] py-[2px] px-[3px] flex items-center gap-2 ${
        borderColor === "primary" ? "border-primary" : "border-gray-2"
      }`}
    >
      <input
        type="text"
        className="w-[calc(100%-66px)] h-full outline-none text-white pl-2 text-left"
        placeholder="https://sfans.ai?ref=Bhnj3PrC"
        value={invite}
        onChange={(e) => setInvite(e.target.value)}
        {...inputProps}
      />

      <Button className="w-[66px]" onClick={() => onInvite?.(invite)}>
        Invite
      </Button>
    </div>
  );
}
