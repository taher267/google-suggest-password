// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <form>
        <div>
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="name"
          >
            <span>Name</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="name"
            type="text"
            required
            autoFocus
            autoComplete="name"
          />
        </div>
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700"
            htmlFor="email"
          >
            <span>Email</span>
          </label>
          <input
            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            id="email"
            type="email"
            required
          />
        </div>
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
        <div className="flex items-center justify-end mt-4">
          <a
            className="underline text-sm text-gray-600 hover:text-gray-900"
            href="https://app.scrapybird.com/login"
          >
            Already registered?{" "}
          </a>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ml-4"
          >
            Register
          </button>
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
            <div id="fullname_field" className="_1ixn">
              <div className="clearfix _58mh">
                <div className="mbm _1iy_ _a4y _3-90 lfloat _ohe">
                  <div className="_5dbb" id="u_4_a_+1">
                    <div className="uiStickyPlaceholderInput">
                      <div className="placeholder" aria-hidden="true">
                        First name
                      </div>
                      <input
                        type="text"
                        className="inputtext _58mg _5dba _2ph-"
                        data-type="text"
                        name="firstname"
                        value=""
                        aria-required="true"
                        placeholder=""
                        aria-label="First name"
                        id="u_4_b_t1"
                      />
                    </div>
                    <i className="_5dbc img sp_98fCI7IVTTz sx_54513f"></i>
                    <i className="_5dbd img sp_98fCI7IVTTz sx_336c7a"></i>
                    <div className="_1pc_"></div>
                  </div>
                </div>
                <div className="mbm _1iy_ _a4y rfloat _ohf">
                  <div className="_5dbb" id="u_4_c_kA">
                    <div className="uiStickyPlaceholderInput">
                      <div className="placeholder" aria-hidden="true">
                        Surname
                      </div>
                      <input
                        type="text"
                        className="inputtext _58mg _5dba _2ph-"
                        data-type="text"
                        name="lastname"
                        value=""
                        aria-required="true"
                        placeholder=""
                        aria-label="Surname"
                        id="u_4_d_Ne"
                      />
                    </div>
                    <i className="_5dbc img sp_98fCI7IVTTz sx_54513f"></i>
                    <i className="_5dbd img sp_98fCI7IVTTz sx_336c7a"></i>
                    <div className="_1pc_"></div>
                  </div>
                </div>
              </div>
              <div className="_1pc_" id="fullname_error_msg"></div>
            </div>
            <div className="mbm _a4y" id="u_4_e_PK">
              <div className="_5dbb" id="u_4_f_S4">
                <div className="uiStickyPlaceholderInput">
                  <div className="placeholder" aria-hidden="true">
                    Mobile number or email address
                  </div>
                  <input
                    type="text"
                    className="inputtext _58mg _5dba _2ph-"
                    data-type="text"
                    name="reg_email__"
                    value=""
                    aria-required="true"
                    placeholder=""
                    aria-label="Mobile number or email address"
                    id="u_4_g_8C"
                  />
                </div>
                <i className="_5dbc img sp_98fCI7IVTTz sx_54513f"></i>
                <i className="_5dbd img sp_98fCI7IVTTz sx_336c7a"></i>
                <div className="_1pc_"></div>
              </div>
            </div>
            <div className="hidden_elem" id="u_4_h_3g">
              <div className="mbm _a4y">
                <div className="_5dbb" id="u_4_i_57">
                  <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                    <div className="placeholder" aria-hidden="true">
                      Re-enter email address
                    </div>
                    <input
                      type="text"
                      className="inputtext _58mg _5dba _2ph-"
                      data-type="text"
                      name="reg_email_confirmation__"
                      value=""
                      aria-required="true"
                      placeholder=""
                      aria-label="Re-enter email address"
                      id="u_4_j_Mb"
                    />
                  </div>
                  <i className="_5dbc img sp_98fCI7IVTTz sx_54513f"></i>
                  <i className="_5dbd img sp_98fCI7IVTTz sx_336c7a"></i>
                  <div className="_1pc_"></div>
                </div>
              </div>
            </div>
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
            <div className="_58mq _5dbb" id="birthday_wrapper">
              <div className="mtm mbs _2_68">
                Date of birth
                <a
                  className="_58ms mlm"
                  id="birthday-help"
                  href="#"
                  title="Click for more information"
                  role="button"
                >
                  <i className="img sp_98fCI7IVTTz sx_c4643a"></i>
                </a>
              </div>
              <div className="_5k_5">
                <span
                  className="_5k_4"
                  data-type="selectors"
                  data-name="birthday_wrapper"
                  id="u_4_l_an"
                >
                  <span>
                    <select
                      aria-label="Day"
                      name="birthday_day"
                      id="day"
                      title="Day"
                      className="_9407 _5dba _9hk6 _8esg"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select
                      aria-label="Month"
                      name="birthday_month"
                      id="month"
                      title="Month"
                      className="_9407 _5dba _9hk6 _8esg"
                    >
                      <option value="1">Jan</option>
                      <option value="2">Feb</option>
                      <option value="3">Mar</option>
                      <option value="4">Apr</option>
                      <option value="5">May</option>
                      <option value="6">Jun</option>
                      <option value="7">Jul</option>
                      <option value="8">Aug</option>
                      <option value="9">Sep</option>
                      <option value="10">Oct</option>
                      <option value="11">Nov</option>
                      <option value="12">Dec</option>
                    </select>
                    <select
                      aria-label="Year"
                      name="birthday_year"
                      id="year"
                      title="Year"
                      className="_9407 _5dba _9hk6 _8esg"
                    >
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                    </select>
                  </span>
                </span>
                <i className="_5dbc _5k_6 img sp_98fCI7IVTTz sx_54513f"></i>
                <i className="_5dbd _5k_7 img sp_98fCI7IVTTz sx_336c7a"></i>
                <div className="_1pc_"></div>
              </div>
            </div>
            <div className="_58mq _5dbb hidden_elem" id="birthday_age">
              <div className="mtm mbs _2_68">Age</div>
              <div className="_5k_5">
                <span
                  className="_5k_4 _58mh"
                  data-type="text"
                  data-name="birthday_wrapper"
                >
                  <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                    <div className="placeholder" aria-hidden="true">
                      Your age
                    </div>
                    <input
                      type="text"
                      className="inputtext _58mg _5dba _2ph-"
                      data-type="text"
                      name="birthday_age"
                      placeholder=""
                      aria-label="Your age"
                      id="u_4_m_W1"
                    />
                  </div>
                  <a
                    className="_8g_s"
                    id="age_to_birthday_link"
                    href="#"
                    role="button"
                  >
                    Use date of birth
                  </a>
                </span>
                <i className="_5dbc _5k_6 img sp_98fCI7IVTTz sx_54513f"></i>
                <i className="_5dbd _5k_7 img sp_98fCI7IVTTz sx_336c7a"></i>
                <div className="_1pc_"></div>
              </div>
              <input
                type="hidden"
                autoComplete="off"
                name="did_use_age"
                value=""
              />
            </div>
            <div className="mtm _5wa2 _5dbb" id="u_4_n_46">
              <div className="mtm mbs _2_68">
                Gender
                <a
                  className="_58ms mlm"
                  aria-label=""
                  id="gender-help"
                  title="Click for more information"
                  href="#"
                  role="button"
                >
                  <i className="img sp_98fCI7IVTTz sx_c4643a"></i>
                </a>
              </div>
              <span
                className="_5k_3"
                data-type="radio"
                data-name="gender_wrapper"
                id="u_4_o_r1"
              >
                <span className="_5k_2 _5dba">
                  <label className="_58mt" htmlFor="u_4_4_+X">
                    Female
                  </label>
                  <input
                    type="radio"
                    className="_8esa"
                    name="sex"
                    value="1"
                    id="u_4_4_+X"
                  />
                </span>
                <span className="_5k_2 _5dba">
                  <label className="_58mt" htmlFor="u_4_5_dm">
                    Male
                  </label>
                  <input
                    type="radio"
                    className="_8esa"
                    name="sex"
                    value="2"
                    id="u_4_5_dm"
                  />
                </span>
                <span className="_5k_2 _5dba">
                  <label className="_58mt" htmlFor="u_4_6_yP">
                    Custom
                  </label>
                  <input
                    type="radio"
                    className="_8esa"
                    name="sex"
                    value="-1"
                    id="u_4_6_yP"
                  />
                </span>
              </span>
              <i className="_5dbc _8esb img sp_98fCI7IVTTz sx_54513f"></i>
              <i className="_5dbd _8esc img sp_98fCI7IVTTz sx_336c7a"></i>
              <div className="_1pc_"></div>
            </div>
            <div className="mtm _8ffv hidden_elem" id="custom_gender_container">
              <div
                className="_17ie _5dbb"
                data-type="selectors"
                data-name="preferred_pronoun"
                id="u_4_p_Yo"
              >
                <select
                  aria-label="Select your pronoun"
                  name="preferred_pronoun"
                  className="_7-16 _9hk6 _5dba"
                >
                  <option value="">Select your pronoun</option>
                  <option value="1">She: "Wish her a happy birthday!"</option>
                  <option value="2">He: "Wish him a happy birthday!"</option>
                  <option value="6">They: "Wish them a happy birthday!"</option>
                </select>
                <i className="mrm _5dbc _8esb img sp_98fCI7IVTTz sx_54513f"></i>
              </div>
              <div className="_83kf">Your pronoun is visible to everyone.</div>
              <div className="_7-1q">
                <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                  <div className="placeholder" aria-hidden="true">
                    Gender (optional)
                  </div>
                  <input
                    type="text"
                    className="inputtext _58mg _5dba _2ph-"
                    data-type="text"
                    name="custom_gender"
                    placeholder=""
                    aria-label="Gender (optional)"
                    id="u_4_q_/c"
                  />
                </div>
              </div>
              <div className="_1pc_"></div>
            </div>
            <div className="_58mu" data-nocookies="1">
              <p className="_58mv">
                People who use our service may have uploaded your contact
                information to Facebook.{" "}
                <a
                  href="/help/637205020878504"
                  id="non-users-notice-link"
                  target="_blank"
                  rel="nofollow"
                >
                  Learn more
                </a>
                .
              </p>
            </div>
            <div className="_58mu" data-nocookies="1" id="u_4_r_eS">
              <p className="_58mv">
                By clicking Sign Up, you agree to our{" "}
                <a
                  href="/legal/terms/update"
                  id="terms-link"
                  target="_blank"
                  rel="nofollow"
                >
                  Terms
                </a>
                ,{" "}
                <a
                  href="/about/privacy/update"
                  id="privacy-link"
                  target="_blank"
                  rel="nofollow"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/policies/cookies/"
                  id="cookie-use-link"
                  target="_blank"
                  rel="nofollow"
                >
                  Cookies Policy
                </a>
                . You may receive SMS notifications from us and can opt out at
                any time.
              </p>
            </div>
            <div className="_1lch">
              <button
                type="submit"
                className="_6j mvm _6wk _6wl _58mi _3ma _6o _6v"
                name="websubmit"
                id="u_4_s_BQ"
              >
                Sign Up
              </button>
              <span className="hidden_elem _58ml" id="u_4_t_6C">
                <img
                  className="img"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif"
                  alt=""
                  width="16"
                  height="11"
                />
              </span>
            </div>
          </div>
          <input
            type="hidden"
            autoComplete="off"
            id="referrer"
            name="referrer"
            value=""
          />
          <input
            type="hidden"
            autoComplete="off"
            id="asked_to_login"
            name="asked_to_login"
            value="0"
          />
          <input
            type="hidden"
            autoComplete="off"
            id="use_custom_gender"
            name="use_custom_gender"
            value=""
          />
          <input
            type="hidden"
            autoComplete="off"
            id="terms"
            name="terms"
            value="on"
          />
          <input type="hidden" autoComplete="off" id="ns" name="ns" value="0" />
          <input
            type="hidden"
            autoComplete="off"
            id="ri"
            name="ri"
            value="2256e418-569d-47d3-afe6-d4291c7eab8f"
          />
          <input
            type="hidden"
            autoComplete="off"
            id="action_dialog_shown"
            name="action_dialog_shown"
            value=""
          />
          <input
            type="hidden"
            autoComplete="off"
            id="ignore"
            name="ignore"
            value="reg_email_confirmation__"
          />
          <input
            type="hidden"
            autoComplete="off"
            id="locale"
            name="locale"
            value="en_GB"
          />
          <input
            type="hidden"
            autoComplete="off"
            id="reg_instance"
            name="reg_instance"
            value="WwdfZNXbFtzIH9-7oxS7DOrT"
          />
          <div id="reg_captcha" className="_58mw hidden_elem">
            <div>
              <h2 id="security_check_header">Security check</h2>
              <div id="outer_captcha_box">
                <div id="captcha_box">
                  <div
                    className="field_error hidden_elem"
                    id="captcha_response_error"
                  >
                    This field is required.
                  </div>
                  <div
                    id="captcha"
                    className="captcha"
                    data-captcha-className="ReCaptchav2Captcha"
                  >
                    <input
                      type="hidden"
                      autoComplete="off"
                      id="captcha_persist_data"
                      name="captcha_persist_data"
                      value="AZmHwQHVauHv0zRyEIV-B-YS1VSRt3igPzI8sUnvF2gfNbCc0WOth4gdcJCXyFrXpz8egcZpREKBiDichNvkrutMUMzVAmjoVZsKkOaXcyNdypuxmZdBF9sT1ctkzBuwxv2DNq7ZT_QlvAbDAo4z5vsQy4h4h_xZLTPbVmGkMZ5egrLsdsMjEiaae82wkK63FBI02rr3SmaEURckfwhdTq1zmsL9Nplkviqegcmjuh_u-faABoWArYoxF-Vqx3tSag6ls2KKVuhewfY0LoG8Wg1-aCA9CI8TOwTYF0p85VIgJ4cfR41myLPBPerY0cAz-mLXlJyaXRa6gsf-80GGJrsatm3Ep9YRQ7N-ee4go_74RoLfs-f1cAI7t_lDziuVXRU"
                    />
                    <div>
                      <input
                        name="captcha_response"
                        id="captcha_response"
                        type="hidden"
                      />
                      <iframe
                        id="captcha-recaptcha"
                        className="_3-8x _3-95"
                        width="100%"
                        height="90px"
                        scrolling="no"
                        src="/common/referer_frame.php?no_lower=false"
                      ></iframe>
                    </div>
                    <div className="captcha_input">
                      <a href="#" role="button">
                        Why am I seeing this?
                      </a>
                      <div id="captcha_whats_this" className="hidden_elem">
                        <div className="fsl fwb">Security check</div>This is a
                        standard security test that we use to prevent spammers
                        from sending automated requests.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="captcha_buttons" className="_58p2 clearfix hidden_elem">
                <div className="_58mx _58mm">
                  <div className="_58mz"> &nbsp; </div>
                  <a className="_58my" href="#" role="button" id="u_4_u_v3">
                    Back
                  </a>
                </div>
                <div className="_58mm">
                  <div className="clearfix">
                    <button
                      type="submit"
                      className="_6j mvm _6wk _6wl _58me _58mi _3ma _6o _6v"
                      id="u_4_v_x9"
                    >
                      Sign Up
                    </button>
                    <span className="hidden_elem _58ml" id="u_4_w_nx">
                      <img
                        className="img"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif"
                        alt=""
                        width="16"
                        height="11"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
