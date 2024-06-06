"use client";
import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { IoIosSearch } from "react-icons/io";
interface SearchProps {
  searchValue: string;
  searchChange: (value: string) => void;
}
function Search(props: SearchProps) {
  const { searchValue, searchChange } = props;
  const router = useRouter();
  const handleSeach = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/profile/${searchValue}`);
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div className="flex items-center justify-center">
        <input
          className="bg-blue-100 p-2 rounded-md m-2 border-1"
          name="search"
          placeholder="نام کاربر را وارد کنید"
          value={searchValue}
          onChange={(e) => {
            searchChange(e.target.value);
          }}
        />
        <button disabled={!searchValue} onClick={(e) => handleSeach(e)}>
          <IoIosSearch className=" text-4xl bg-blue-400 rounded-md p-2 text-white" />
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    searchValue: state.user.searchValue,
  };
};
export default connect(mapStateToProps, actions)(Search);
