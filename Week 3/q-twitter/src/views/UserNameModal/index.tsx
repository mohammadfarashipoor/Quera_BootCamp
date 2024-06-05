import { signOut } from "@/containers/Signin/actions";

function SidebarModal({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`sidebar-left__modal ${isOpen && "opened"} flex flex-col`}>
      <button onClick={signOut}>خروج</button>
    </div>
  );
}

export default SidebarModal;
