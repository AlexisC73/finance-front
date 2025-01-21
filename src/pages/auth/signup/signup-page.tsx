import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <form className="bg-white flex flex-col px-5 py-6 rounded-3 w-full gap-y-8 max-w-140">
      <h1 className="font-bold text-8 line-height-120%">Sign Up</h1>
      <div id="sign-in" className="flex flex-col gap-y-4">
        <div id="form-group" className="w-full flex flex-col gap-y-1">
          <label
            className="text-grey-500 text-3 line-height-150% font-bold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="h-11.25 border border-beige-500 border-px rounded-2 px-5"
          />
        </div>
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
            Create Password
          </label>
          <input
            type="password"
            id="password"
            className="h-11.25 border border-beige-500 border-px rounded-2 px-5"
          />
          <p className="text-grey-500 text-3 line-height-150% text-right mt-1">
            Passwords must be at least 8 characters
          </p>
        </div>
      </div>
      <button
        role="submit"
        className="h-13.25 w-full bg-grey-900 text-3.5 line-height-150% font-bold text-white rounded-2"
      >
        Create Account
      </button>
      <p className="text-grey-500 text-3.5 line-height-150% self-center">
        Already have an account?{" "}
        <Link className="text-grey-900 font-bold underline" to={"/auth/signin"}>
          Login
        </Link>
      </p>
    </form>
  );
}
