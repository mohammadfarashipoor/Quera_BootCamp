import { MdOutlineBookmark, MdOutlineBookmarkBorder } from "react-icons/md";

function BookmarkBtn({ id }) {
  const { data } = { data: { bookmarks: [{ _id: "" }] } };
  const remove = (e) => {
    e.preventDefault();
    // dispatch(removeBookmark(id));
  };

  const add = (e) => {
    e.preventDefault();
    // dispatch(addBookmark(id));
  };
  return data.bookmarks.some((bookmark) => bookmark._id === id) ? (
    <button
      onClick={remove}
      className="flex items-center tweet-btns__btn tweet-btns__bookmark--active"
    >
      <MdOutlineBookmark />
    </button>
  ) : (
    <button
      onClick={add}
      className="flex items-center tweet-btns__btn tweet-btns__bookmark"
    >
      <MdOutlineBookmarkBorder />
    </button>
  );
}

export default BookmarkBtn;
