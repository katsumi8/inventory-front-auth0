import Link from "next/link";
import { CgMathPlus } from "react-icons/cg";

function NoOrderFound() {
  return (
    <div className="p-4">
      <div className="hidden flex-row-reverse pb-4 xl:flex">
        <Link href="/orders/new">
          <div className="hidden items-center rounded-full bg-blue-500 p-3 font-bold text-white sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">New Order</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NoOrderFound;
