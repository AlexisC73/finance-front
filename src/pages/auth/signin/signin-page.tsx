import { Link } from "react-router-dom";
import { BrandIcon } from "@/assets/icons/icons";
import AuthImage from "@/assets/auth.png";

export default function SigninPage() {
  return (
    <main className="w-full h-screen flex flex-col lg:flex-row">
      <div className="bg-grey-900 px-10 py-6 lg:hidden">
        <BrandIcon className="mx-auto" />
      </div>
      <div id="side-image" className="w-150 h-screen hidden lg:block p-5">
        <div className="relative">
          <BrandIcon className="absolute top-10 left-10" />
          <img
            src={AuthImage}
            alt="Logo"
            className="w-full h-full object-cover rounded-3"
          />
          <div className="absolute bottom-0 left-0 text-white p-10 flex flex-col gap-y-6">
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
        <form className="bg-white flex flex-col px-5 py-6 rounded-3 w-full gap-y-8 max-w-140">
          <h1 className="font-bold text-8 line-height-120%">Login</h1>
          <div id="sign-in" className="flex flex-col gap-y-4">
            <div id="form-group" className="w-full flex flex-col gap-y-1">
              <label
                className="text-grey-500 text-3 line-height-150% font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="h-11.25 border border-beige-500 border-px rounded-2 px-5"
              />
            </div>
            <div id="form-group" className="w-full flex flex-col gap-y-1">
              <label
                className="text-grey-500 text-3 line-height-150% font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="h-11.25 border border-beige-500 border-px rounded-2 px-5"
              />
            </div>
          </div>
          <button
            role="submit"
            className="h-13.25 w-full bg-grey-900 text-3.5 line-height-150% font-bold text-white rounded-2"
          >
            Login
          </button>
          <p className="text-grey-500 text-3.5 line-height-150% self-center">
            Need to create an account?{" "}
            <Link
              className="text-grey-900 font-bold underline"
              to={"/auth/signup"}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
