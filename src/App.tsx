// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <form>
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="password"
          >
            <span>Password</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="password"
            type="password"
            required
            autoComplete="new-password"
            aria-autoComplete="list"
          />
        </div>
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="password_confirmation"
          >
            <span>Confirm Password</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="password_confirmation"
            type="password"
            required
            autoComplete="new-password"
          />
        </div>
      </form>

      <div>
        <form
          method="post"
          id="reg"
          name="reg"
          action="https://m.facebook.com/reg/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgzOTY1NjA5LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
        >
          <input type="hidden" name="jazoest" value="2851" autoComplete="off" />
          <input
            type="hidden"
            name="lsd"
            value="AVrg4DUj29A"
            autoComplete="off"
          />
          <div id="reg_form_box" className="large_form">
            <div className="mbm _br- _a4y" id="password_field">
              <div className="_5dbb" id="u_4_k_iu">
                <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                  <div className="placeholder" aria-hidden="true">
                    New password
                  </div>
                  <input
                    type="password"
                    className="inputtext _58mg _5dba _2ph-"
                    data-type="password"
                    autoComplete="new-password"
                    name="reg_passwd__"
                    id="password_step_input"
                    aria-required="true"
                    placeholder=""
                    aria-label="New password"
                    aria-autoComplete="list"
                    aria-describedby="js_fh"
                    aria-invalid="true"
                  />
                </div>
                <i className="_5dbc img sp_98fCI7IVTTz sx_54513f"></i>
                <i className="_5dbd img sp_98fCI7IVTTz sx_336c7a"></i>
                <div className="_1pc_"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
