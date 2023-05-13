// import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const URLS = [
    { path: "/", element: <Home /> },
    { path: "/scripybird", element: <ScripyBird /> },
    { path: "/facebook", element: <Facebook /> },
    { path: "/scrapybird-with-form" },
    { path: "/facebook-with-form" },
  ];
  // const [count, setCount] = useState(0);

  return (
    <>
      <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
        {URLS.map((item) => (
          <li key={item.path}>
            <Link to={item.path} />
            {item.path}
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scripybird" element={<ScripyBird />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/scrapybird-with-form" element={<ScripyBirdWithForm />} />
        <Route path="/facebook-with-form" element={<FacebookWithForm />} />
      </Routes>
    </>
  );
}

export default App;

export const Home = () => (
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
          aria-autocomplete="list"
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
                  aria-autocomplete="list"
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
export const ScripyBird = () => (
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
          aria-autocomplete="list"
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
  </>
);
export const ScripyBirdWithForm = () => (
  <>
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
        aria-autocomplete="list"
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
  </>
);

export const Facebook = () => (
  <>
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
                  aria-autocomplete="list"
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

export const FacebookWithForm = () => (
  <>
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
      aria-autocomplete="list"
      aria-describedby="js_fh"
      aria-invalid="true"
    />
    {/* <div>
      <input type="hidden" name="jazoest" value="2851" autoComplete="off" />
      <input type="hidden" name="lsd" value="AVrg4DUj29A" autoComplete="off" />
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
                aria-autocomplete="list"
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
    </div> */}
  </>
);
