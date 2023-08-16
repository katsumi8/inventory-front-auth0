import { useGetUser } from "@/hooks/useGetUser";
import React, { useCallback, useEffect } from "react";
import DropdownList from "./DropdownList";
import Placeholder from "./Placeholder";

type Props = {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

function AvatarIcon({ setShowDropdown, showDropdown }: Props) {
  const { user } = useGetUser();

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdown = document.getElementById("userDropdown") as HTMLElement;
      // ドロップダウンリストかAvatarButtonをクリックしたときは何もしない
      if (target.closest("#userDropdown") || target.closest("#avatarButton")) {
        return;
      }
      // ドロップダウンリスト以外をクリックしたときはdropdownを閉じる
      if (dropdown && !dropdown.contains(target)) {
        setShowDropdown(false);
      }
    },
    [setShowDropdown],
  ); // dependency for useCallback

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative">
      <button
        id="avatarButton"
        type="button"
        className="h-10 w-10 cursor-pointer rounded-full"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Placeholder />
      </button>
      {showDropdown && user && (
        <DropdownList userName={user.name} UserEmail={user.email} />
      )}
    </div>
  );
}

export default AvatarIcon;
