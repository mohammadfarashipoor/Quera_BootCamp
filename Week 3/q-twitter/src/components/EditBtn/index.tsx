import Link from "next/link";
import React from "react";
function EditBtn() {
  return (
    <Link href="/edit" className="edit-btn">
      Edit profile
    </Link>
  );
}

export default EditBtn;
