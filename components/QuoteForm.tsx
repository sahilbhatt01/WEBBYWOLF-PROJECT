"use client";

export default function QuoteForm() {
  const Icon = {
    User: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
        />
      </svg>
    ),
    Mail: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M3 8.5v7A2.5 2.5 0 005.5 18h13A2.5 2.5 0 0021 15.5v-7A2.5 2.5 0 0018.5 6h-13A2.5 2.5 0 003 8.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M21 8.5l-9 6-9-6"
        />
      </svg>
    ),
    Phone: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M2 7.5A2.5 2.5 0 014.5 5h2a1 1 0 011 .85c.12.8.38 1.7.82 2.6.4.86 1.04 1.7 1.9 2.55.85.86 1.69 1.5 2.55 1.9.9.44 1.8.7 2.6.82a1 1 0 01.85 1v2A2.5 2.5 0 0116.5 22H7.5A2.5 2.5 0 015 19.5v-1"
        />
      </svg>
    ),
    Clock: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M12 6v6l4 2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M12 4a8 8 0 100 16 8 8 0 000-16z"
        />
      </svg>
    ),
    Ruler: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinejoin="round"
          strokeWidth="1.75"
          strokeLinecap="round"
          d="M3 21l18-18M7 7h.01M11 11h.01M15 15h.01M19 19h.01"
        />
      </svg>
    ),
    Hash: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M7 4v16M17 4v16M3 10h18M3 14h18"
        />
      </svg>
    ),
    Pencil: () => (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M15.232 5.232l3.536 3.536M4 20l7.586-1.172 9.9-9.9a2.828 2.828 0 00-4-4l-9.9 9.9L4 20z"
        />
      </svg>
    ),
    ArrowRight: () => (
      <svg
        className="inline-block w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          d="M5 12h14M13 5l7 7-7 7"
        />
      </svg>
    ),
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
        <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-lg text-black px-6 py-2 rounded font-bold shadow-lg animate-floating">
          LOGO
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
          REQUEST A QUOTE
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon.User />
            </span>
            <input
              type="text"
              placeholder=" "
              className="peer w-full pl-10 pr-3 h-12 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-blue-400 focus:shadow-sm"
              aria-label="Name"
            />
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all">
              Name
            </label>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon.Mail />
            </span>
            <input
              type="email"
              placeholder=" "
              className="peer w-full pl-10 pr-3 h-12 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-blue-400 focus:shadow-sm"
              aria-label="Email"
            />
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all">
              E-mail
            </label>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon.Phone />
            </span>
            <input
              type="tel"
              placeholder=" "
              className="peer w-full pl-10 pr-3 h-12 rounded-md border border-gray-200 bg-white focus:outline-none focus:border-blue-400 focus:shadow-sm"
              aria-label="Phone"
            />
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all">
              Phone Number
            </label>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon.Clock />
            </span>
            <select
              defaultValue=""
              className="w-full pl-10 pr-8 h-12 rounded-md border border-gray-200 bg-white appearance-none focus:outline-none focus:border-blue-400"
              aria-label="Time Frame"
            >
              <option value="" disabled hidden>
                Choose Time Frame
              </option>
              <option>1–2 Weeks</option>
              <option>2–4 Weeks</option>
              <option>1–2 Months</option>
              <option>Flexible Timeline</option>
            </select>
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600">
              Time Frame*
            </label>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon.Ruler />
            </span>
            <select
              defaultValue=""
              className="w-full pl-10 pr-8 h-12 rounded-md border border-gray-200 bg-white appearance-none focus:outline-none focus:border-blue-400"
              aria-label="Size"
            >
              <option value="" disabled hidden>
                Choose Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600">
              Size*
            </label>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icon.Hash />
            </span>
            <select
              defaultValue=""
              className="w-full pl-10 pr-8 h-12 rounded-md border border-gray-200 bg-white appearance-none focus:outline-none focus:border-blue-400"
              aria-label="Quantity"
            >
              <option value="" disabled hidden>
                Choose Quantity
              </option>
              <option>1 Unit</option>
              <option>5 Units</option>
              <option>10 Units</option>
              <option>25 Units</option>
              <option>50+ Units</option>
            </select>
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600">
              Quantity*
            </label>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="md:col-span-2 relative">
            <span className="absolute left-3 top-4 text-gray-500">
              <Icon.Pencil />
            </span>
            <textarea
              placeholder=" "
              className="peer w-full pl-10 pr-3 min-h-[140px] rounded-md border border-gray-200 bg-white focus:outline-none focus:border-blue-400 focus:shadow-sm p-3"
              aria-label="Project Description"
            ></textarea>
            <label className="absolute left-10 -top-2 text-xs bg-white px-1 text-gray-600 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all">
              Please Describe Your Project*
            </label>
          </div>

          <div className="md:col-span-2 text-center text-sm text-gray-600 mt-1">
            By submitting this form you agree to our{" "}
            <a className="underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline" href="#">
              Privacy Policy
            </a>
            .
          </div>

          <div className="md:col-span-2 flex justify-center mt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:opacity-95 transition"
            >
              Lorem Ipsum
              <Icon.ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
