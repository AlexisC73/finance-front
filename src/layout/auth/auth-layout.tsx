import { BrandIcon } from "@/assets/icons/icons";
import { Outlet } from "react-router-dom";
import AuthImage from "@/assets/auth.png";

export default function AuthLayout() {
  return (
    <main className="w-full h-screen flex flex-col xl:flex-row">
      <div className="w-full bg-grey-900 xl:bg-transparent xl:w-150 xl:min-h-screen xl:block p-5">
        <div className="xl:relative">
          <BrandIcon className="mx-auto xl:absolute top-10 left-10" />
          <img
            src={AuthImage}
            alt="Logo"
            className="w-full h-full object-cover rounded-3 hidden xl:block"
          />
          <div className="hidden xl:flex xl:absolute bottom-0 left-0 text-white p-10 flex-col gap-y-6">
            <h2 className="text-8 font-bold line-height-120%">
              Keep track of your money
              <br /> and save for your future
            </h2>
            <p className="text-3.5 line-height-150%">
              Personal finance app puts you in control of your spending. Track
              <br />
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-1 items-center justify-center px-4">
        <Outlet />
      </div>
    </main>
  );
}
