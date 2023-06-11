import Link from "next/link";
import { CgMathPlus } from "react-icons/cg";

function NoOrderFound() {
  return (
    <div className="p-4">
      <div className="flex-row-reverse hidden pb-4 xl:flex">
        <Link href="/orders/new">
          <div className="items-center hidden p-3 font-bold text-white bg-blue-500 rounded-full sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">New Order</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NoOrderFound;
