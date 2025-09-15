function Header() {
  return (
    <div>
      {/* <!-- Announcement Banner --> */}
      <div className="bg-linear-to-r from-purple-600 to-blue-400">
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
            <div className="flex items-center">
              <div className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 transition ">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2" // キャメルケースに修正
                  strokeLinecap="round" // キャメルケースに修正
                  strokeLinejoin="round" // キャメルケースに修正
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <p className="me-5  text-xl font-semibold text-white">
                  今日のネコ
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Announcement Banner --> */}
    </div>
  );
}

export default Header;
