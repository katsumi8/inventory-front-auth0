import React, { useEffect } from "react";
import Placeholder from "./Placeholder";
import { getUser } from "@/utils/getUser";
import DropdownList from "./DropdownList";

type Props = {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

function AvatarIcon({ setShowDropdown, showDropdown }: Props) {
  const { user } = getUser();

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const dropdown = document.getElementById("userDropdown") as HTMLElement;
    // // ドロップダウンリストかAvatarButtonをクリックしたときは何もしない
    if (target.closest("#userDropdown") || target.closest("#avatarButton")) {
      return;
    }
    // ドロップダウンリスト以外をクリックしたときはdropdownを閉じる
    if (dropdown && !dropdown.contains(target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        id="avatarButton"
        type="button"
        className="w-10 h-10 rounded-full cursor-pointer"
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
