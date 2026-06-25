import React from "react";
import { useState } from "react";

export const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };
  return (
    <div class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border py-[120px] relative border-t border-t-[rgba(255,255,255,0.06)]">
      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased box-border w-full max-w-[1200px] mx-auto px-[24px]">
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 mb-[64px] p-0 box-border opacity-100 translate-y-0 transition-none text-center">
          <p className="leading-[1.6] antialiased text-center m-0 p-0 box-border inline-flex items-center gap-[8px] text-[12px] font-[600] text-[#FF6B6B] uppercase tracking-[0.1em] mb-[14px] font-['JetBrains_Mono',monospace]">
            <div className="content-[''] w-[18px] h-[2px] bg-[#ff6b6b] rounded-[2px]"></div>
            <div>Features</div>
          </p>
          <h2 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased text-center m-0 p-0 box-border text-[clamp(30px,4vw,46px)] font-[800] tracking-[-0.04em] leading-[1.1] mb-[14px]">
            <div>Everything you need.</div>
            <div>Nothing you don't.</div>
          </h2>
          <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased text-center p-0 box-border text-[16px] text-[#8A8B9E] max-w-[480px] leading-[1.7] my-0 mx-auto">
            A complete analytics toolkit that replaces five tools in your stack.
          </p>
        </div>
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased box-border flex justify-center items-center gap-[4px] mt-0 mb-[56px] mx-auto bg-[#26262D] border border-[rgba(141,45,45,0.06)] rounded-[100px] p-[4px] w-fit transition-none opacity-100 translate-y-0">
          <button
            data-tab="dashboard"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "dashboard" ? "bg-[#FF6B6B] text-white shadow-[0_0_20px_rgba(255,107,107,0.35)]" : "bg-transparent text-[#55566A] hover:text-[#EEEEF0]"}`}
          >
            Dashboard
          </button>
          <button
            data-tab="funnels"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "funnels" ? "bg-[#FF6B6B] text-white shadow-[0_0_20px_rgba(255,107,107,0.35)]" : "bg-transparent text-[#55566A] hover:text-[#EEEEF0]"}`}
          >
            Funnels
          </button>
          <button
            data-tab="sdk"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "sdk" ? "bg-[#FF6B6B] text-white shadow-[0_0_20px_rgba(255,107,107,0.35)]" : "bg-transparent text-[#55566A] hover:text-[#EEEEF0]"}`}
          >
            SDK
          </button>
          <button
            data-tab="session"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "session" ? "bg-[#FF6B6B] text-white shadow-[0_0_20px_rgba(255,107,107,0.35)]" : "bg-transparent text-[#55566A] hover:text-[#EEEEF0]"}`}
          >
            Session Replay
          </button>
          <button
            data-tab="privacy"
            onClick={handleTabClick}
            className={`antialiased m-0 box-border px-[24px] py-[10px] rounded-[100px] font-[inherit] text-[13.5px] font-[600] border-none cursor-pointer transition-all duration-300 ease-[ease] whitespace-nowrap tracking-[-0.01em] ${activeTab === "privacy" ? "bg-[#FF6B6B] text-white shadow-[0_0_20px_rgba(255,107,107,0.35)]" : "bg-transparent text-[#55566A] hover:text-[#EEEEF0]"}`}
          >
            Privacy
          </button>
        </div>
        <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border relative">
          {activeTab == "dashboard" && (
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards] opacity-100 transform-none">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border max-w-[440px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 mb-[24px] p-0 box-border w-[48px] h-[48px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.10)] rounded-[12px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12 A9 9 0 1 1 12 3"></path>
                    <path d="M21 3v9h-9"></path>
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border text-[28px] font-[800] tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  Real-Time Dashboard
                </h3>
                <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased m-0 p-0 box-border text-[15px] text-[#8A8B9E] leading-[1.75] mb-[28px]">
                  Watch your metrics update live with sub-second latency. Custom
                  widgets, drag-and-drop layout, and instant sharing with your
                  team.
                </p>
                <ul className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none flex flex-col gap-[12px]">
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Sub-second data refresh</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Drag-and-drop widgets</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Scheduled email reports</div>
                  </li>
                </ul>
              </div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] py-[11px] px-[16px] border-b border-b-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F43F5E] opacity-60"></span>
                  <span class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F59E0B] opacity-60"></span>
                  <span class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#22C55E] opacity-60"></span>
                </div>
                <div class="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[24px]">
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-3 gap-[10px] mb-[16px]">
                    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="font-['JetBrains_Mono',monospace] text-[9.5px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[6px]">
                        Active Users
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[22px] font-[800] tracking-[-0.04em] mb-[4px]">
                        3,842
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E]">
                        +12.3%
                      </div>
                    </div>
                    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="font-['JetBrains_Mono',monospace] text-[9.5px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[6px]">
                        Conversion
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[22px] font-[800] tracking-[-0.04em] mb-[4px]">
                        12.4%
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#22C55E]">
                        +2.1%
                      </div>
                    </div>
                    <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="font-['JetBrains_Mono',monospace] text-[9.5px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[6px]">
                        Churn
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border text-[22px] font-[800] tracking-[-0.04em] mb-[4px]">
                        1.8%
                      </div>
                      <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 p-0 box-border text-[10px] font-[600] text-[#F43F5E]">
                        -0.4%
                      </div>
                    </div>
                  </div>
                  <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[16px] h-[140px] relative">
                    <div className="font-['JetBrains_Mono',monospace] text-[10px] text-[#55566A] uppercase tracking-[0.08em] leading-[1.6] antialiased m-0 p-0 box-border mb-[8px]">
                      Revenue — Last 7 days
                    </div>
                    <svg viewBox="0 0 400 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient
                          id="areaGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stop-color="rgba(255,107,107,0.2)"
                          ></stop>
                          <stop
                            offset="100%"
                            stop-color="rgba(255,107,107,0)"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5 V80 H0Z"
                        fill="url(#areaGrad)"
                      ></path>
                      <path
                        d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5"
                        fill="none"
                        stroke="#FF6B6B"
                        stroke-width="2"
                      ></path>
                      <circle
                        cx="320"
                        cy="15"
                        r="4"
                        fill="#FF6B6B"
                        stroke="#1E1E24"
                        stroke-width="2"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "funnels" && (
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards] opacity-100 transform-none">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border max-w-[440px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 mb-[24px] p-0 box-border w-[48px] h-[48px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.10)] rounded-[12px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20V10"></path>
                    <path d="M18 20V4"></path>
                    <path d="M6 20v-4"></path>
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border text-[28px] font-[800] tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  Funnel Analytics
                </h3>
                <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased m-0 p-0 box-border text-[15px] text-[#8A8B9E] leading-[1.75] mb-[28px]">
                  Identify exactly where users drop off and why. Build funnels
                  in seconds and correlate drop-off with user segments.
                </p>
                <ul className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none flex flex-col gap-[12px]">
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Visual drop-off analysis</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Segment correlation</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Historical comparison</div>
                  </li>
                </ul>
              </div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] py-[11px] px-[16px] border-b border-b-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F43F5E] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F59E0B] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#22C55E] opacity-60"></span>
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[24px]">
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex items-center justify-between bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="flex-1 mr-[24px]">
                        <div className="flex justify-between items-center mb-[8px]">
                          <span className="text-[13.5px] font-[600] text-[#EEEEF0]">
                            Landing Page
                          </span>
                          <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#8A8B9E]">
                            12,480
                          </span>
                        </div>
                        <div className="w-full h-[6px] bg-[#1E1E24] rounded-[100px] overflow-hidden">
                          <div
                            className="h-full bg-[#FF6B6B] rounded-[100px]"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-[12px] font-[700] text-[#FF6B6B] min-w-[45px] text-right">
                        —
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="flex-1 mr-[24px]">
                        <div className="flex justify-between items-center mb-[8px]">
                          <span className="text-[13.5px] font-[600] text-[#EEEEF0]">
                            Sign Up Started
                          </span>
                          <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#8A8B9E]">
                            8,736
                          </span>
                        </div>
                        <div className="w-full h-[6px] bg-[#1E1E24] rounded-[100px] overflow-hidden">
                          <div
                            className="h-full bg-[#FF6B6B] rounded-[100px]"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-[12px] font-[700] text-[#FF6B6B] min-w-[45px] text-right">
                        -30%
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="flex-1 mr-[24px]">
                        <div className="flex justify-between items-center mb-[8px]">
                          <span className="text-[13.5px] font-[600] text-[#EEEEF0]">
                            Email Verified
                          </span>
                          <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#8A8B9E]">
                            6,115
                          </span>
                        </div>
                        <div className="w-full h-[6px] bg-[#1E1E24] rounded-[100px] overflow-hidden">
                          <div
                            className="h-full bg-[#F59E0B] rounded-[100px]"
                            style={{ width: "49%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-[12px] font-[700] text-[#FF6B6B] min-w-[45px] text-right">
                        -30%
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="flex-1 mr-[24px]">
                        <div className="flex justify-between items-center mb-[8px]">
                          <span className="text-[13.5px] font-[600] text-[#EEEEF0]">
                            Onboarding Done
                          </span>
                          <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#8A8B9E]">
                            3,670
                          </span>
                        </div>
                        <div className="w-full h-[6px] bg-[#1E1E24] rounded-[100px] overflow-hidden">
                          <div
                            className="h-full bg-[#F59E0B] rounded-[100px]"
                            style={{ width: "29%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-[12px] font-[700] text-[#FF6B6B] min-w-[45px] text-right">
                        -40%
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px]">
                      <div className="flex-1 mr-[24px]">
                        <div className="flex justify-between items-center mb-[8px]">
                          <span className="text-[13.5px] font-[600] text-[#EEEEF0]">
                            First Action
                          </span>
                          <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#8A8B9E]">
                            2,569
                          </span>
                        </div>
                        <div className="w-full h-[6px] bg-[#1E1E24] rounded-[100px] overflow-hidden">
                          <div
                            className="h-full bg-[#22C55E] rounded-[100px]"
                            style={{ width: "20.5%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-[12px] font-[700] text-[#FF6B6B] min-w-[45px] text-right">
                        -30%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "sdk" && (
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards] opacity-100 transform-none">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border max-w-[440px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 mb-[24px] p-0 box-border w-[48px] h-[48px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.10)] rounded-[12px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border text-[28px] font-[800] tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  One-Line SDK
                </h3>
                <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased m-0 p-0 box-border text-[15px] text-[#8A8B9E] leading-[1.75] mb-[28px]">
                  Drop in a single script tag or npm package. Auto-capture
                  pageviews, clicks, and custom events out of the box.
                </p>
                <ul className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none flex flex-col gap-[12px]">
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Under 4KB gzipped</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Zero config autocapture</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>TypeScript-first API</div>
                  </li>
                </ul>
              </div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] py-[11px] px-[16px] border-b border-b-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F43F5E] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F59E0B] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#22C55E] opacity-60"></span>
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[24px]">
                  <pre className="font-['JetBrains_Mono',monospace] text-[13px] leading-[1.7] text-[#EEEEF0] bg-[#1E1E24] border border-[rgba(255,255,255,0.04)] rounded-[10px] p-[20px] mb-[16px] overflow-x-auto text-left">
                    <code>
                      <span className="text-[#55566A]">
                        // Install: npm i @quantix/sdk
                      </span>
                      {"\n"}
                      {"\n"}
                      <span className="text-[#FF6B6B]">import</span> {"{"}{" "}
                      Quantix {"}"} <span className="text-[#FF6B6B]">from</span>{" "}
                      <span className="text-[#22C55E]">'@quantix/sdk'</span>
                      {"\n"}
                      {"\n"}
                      <span className="text-[#FF6B6B]">const</span> qx ={" "}
                      <span className="text-[#FF6B6B]">new</span>{" "}
                      <span className="text-[#F59E0B]">Quantix</span>({"{\n"}
                      {"  "}apiKey:{" "}
                      <span className="text-[#22C55E]">'qx_live_k8x2...'</span>,
                      {"\n"}
                      {"  "}autocapture:{" "}
                      <span className="text-[#FF6B6B]">true</span>,{"\n"}
                      {"  "}sessionReplay:{" "}
                      <span className="text-[#FF6B6B]">true</span>,{"\n"}
                      {"}"}){"\n"}
                      {"\n"}
                      <span className="text-[#55566A]">
                        // Track custom events
                      </span>
                      {"\n"}
                      qx.<span className="text-[#F59E0B]">track</span>(
                      <span className="text-[#22C55E]">'checkout'</span>,{" "}
                      {"{\n"}
                      {"  "}value: <span className="text-[#FF8A8A]">49.99</span>
                      ,{"\n"}
                      {"  "}plan: <span className="text-[#22C55E]">'pro'</span>
                      {"\n"}
                      {"})"}
                    </code>
                  </pre>
                  <div className="bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[14px] text-left">
                    <div className="font-['JetBrains_Mono',monospace] text-[10px] text-[#55566A] uppercase tracking-[0.08em] mb-[6px]">
                      Output
                    </div>
                    <div className="flex items-center gap-[8px] text-[13px] font-[600] text-[#22C55E]">
                      <span className="relative flex h-[8px] w-[8px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#22C55E]"></span>
                      </span>
                      Event tracked in 8ms — 200 OK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "session" && (
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards] opacity-100 transform-none">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border max-w-[440px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 mb-[24px] p-0 box-border w-[48px] h-[48px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.10)] rounded-[12px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border text-[28px] font-[800] tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  Session Replay
                </h3>
                <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased m-0 p-0 box-border text-[15px] text-[#8A8B9E] leading-[1.75] mb-[28px]">
                  See exactly what your users see. Replay sessions with
                  pixel-perfect accuracy and zero performance impact on your
                  app.
                </p>
                <ul className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none flex flex-col gap-[12px]">
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Pixel-perfect playback</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Console log capture</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>Rage click detection</div>
                  </li>
                </ul>
              </div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] py-[11px] px-[16px] border-b border-b-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F43F5E] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F59E0B] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#22C55E] opacity-60"></span>
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[24px]">
                  <div className="bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[10px] overflow-hidden mb-[16px] text-left">
                    {/* Header Row */}
                    <div className="flex items-center justify-between px-[14px] py-[10px] border-b border-b-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.02)]">
                      <div className="flex items-center gap-[7px]">
                        <span className="relative flex h-[7px] w-[7px]">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F43F5E] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#F43F5E]"></span>
                        </span>
                        <span className="text-[12px] font-[600] text-[#8a8b9e] tracking-[-0.01em]">
                          Recording
                        </span>
                      </div>
                      <span className="font-['JetBrains_Mono',monospace] text-[11px] font-[500] text-[#55566a] opacity-70">
                        02:34 / 05:12
                      </span>
                    </div>
                    {/* Viewport */}
                    <div className="relative p-[14px] border-b border-b-[rgba(255,255,255,0.10)]">
                      <div className="bg-[#28282F] rounded-[6px] p-[14px] border border-white/5">
                        <div className="h-[5px] w-[45%] bg-white/[0.06] rounded-[3px] mb-[10px]"></div>
                        <div className="h-[9px] w-[80%] bg-white/[0.08] rounded-[3px] mb-[5px]"></div>
                        <div className="h-[9px] w-1/2 bg-white/[0.08] rounded-[3px] mb-[10px]"></div>
                        <div className="h-[9px] w-[70%] bg-white/[0.08] rounded-[3px] mb-[5px]"></div>
                        <div className="inline-block h-[8px] w-[48px] bg-[#FF6B6B]/60 rounded-[4px] mb-[14px]"></div>
                        <div className="grid grid-cols-3 gap-[6px]">
                          <div className="h-[26px] bg-white/[0.04] rounded-[4px] border border-white/5"></div>
                          <div className="h-[26px] bg-white/[0.04] rounded-[4px] border border-white/5"></div>
                          <div className="h-[26px] bg-white/[0.04] rounded-[4px] border border-white/5"></div>
                        </div>
                      </div>
                      <div className="absolute w-[12px] h-[12px] border-l-[2px] border-t-[2px] border-[#FF6B6B] -rotate-45 [filter:drop-shadow(0_0_6px_rgba(255,107,107,0.4))] top-[58px] left-[88px] pointer-events-none"></div>
                    </div>
                    {/* Timeline Row */}
                    <div className="flex items-center gap-[10px] px-[14px] py-[10px]">
                      <span className="w-[22px] h-[22px] bg-[#FF6B6B] rounded-full flex-shrink-0 flex items-center justify-center cursor-pointer shadow-[0_0_10px_rgba(255,107,107,0.35)]">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          className="translate-x-[0.5px]"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </span>
                      <div className="flex-1 h-[4px] bg-[#ffffff14] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#FF6B6B] rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px] flex-wrap">
                    <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[100px] text-[11px] font-[600] text-[#55566a]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#FF6B6B]"></span>
                      click
                    </span>
                    <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[100px] text-[11px] font-[600] text-[#55566a]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#F59E0B]"></span>
                      scroll
                    </span>
                    <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[100px] text-[11px] font-[600] text-[#55566a]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#F43F5E]"></span>
                      rage_click
                    </span>
                    <span className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[100px] text-[11px] font-[600] text-[#55566a]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#22C55E]"></span>
                      input
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab == "privacy" && (
            <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border grid grid-cols-[1fr_1.2fr] gap-[64px] items-center animate-[panelIn_0.45s_ease_forwards] opacity-100 transform-none">
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border max-w-[440px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased m-0 mb-[24px] p-0 box-border w-[48px] h-[48px] bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.10)] rounded-[12px] grid place-items-center text-[#FF6B6B]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] antialiased m-0 p-0 box-border text-[28px] font-[800] tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  Privacy First
                </h3>
                <p className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] antialiased m-0 p-0 box-border text-[15px] text-[#8A8B9E] leading-[1.75] mb-[28px]">
                  GDPR and CCPA compliant out of the box. Cookieless tracking,
                  automatic PII masking, and EU hosting available.
                </p>
                <ul className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border list-none flex flex-col gap-[12px]">
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>No cookie banners needed</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>EU data residency</div>
                  </li>
                  <li className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] leading-[1.6] antialiased list-none m-0 p-0 box-border flex items-center gap-[10px] text-[13.5px] text-[#8A8B9E]">
                    <svg
                      className="w-[15px] h-[15px] fill-none stroke-[2.5] stroke-current text-[#FF6B6B] flex-shrink-0 m-0 p-0 box-border"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div>SOC 2 Type II certified</div>
                  </li>
                </ul>
              </div>
              <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border bg-[#26262D] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative w-full max-w-[640px]">
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border flex items-center gap-[6px] py-[11px] px-[16px] border-b border-b-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F43F5E] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#F59E0B] opacity-60"></span>
                  <span className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 p-0 box-border inline-block w-[8px] h-[8px] rounded-full bg-[#22C55E] opacity-60"></span>
                </div>
                <div className="font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-[#EEEEF0] leading-[1.6] antialiased m-0 box-border p-[24px]">
                  <div className="grid grid-cols-2 gap-[16px]">
                    {/* GDPR Compliant */}
                    <div className="bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[20px] text-left hover:border-[#FF6B6B]/20 transition-all duration-300 hover:translate-y-[-2px]">
                      <div className="w-[36px] h-[36px] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.12)] rounded-[8px] flex items-center justify-center text-[#22C55E] mb-[16px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h4 className="text-[15px] font-[700] text-[#EEEEF0] mb-[6px] tracking-[-0.01em]">
                        GDPR Compliant
                      </h4>
                      <p className="text-[12.5px] text-[#8A8B9E] leading-[1.5] m-0">
                        Full compliance with European data regulations
                      </p>
                    </div>

                    {/* No Cookies */}
                    <div className="bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[20px] text-left hover:border-[#FF6B6B]/20 transition-all duration-300 hover:translate-y-[-2px]">
                      <div className="w-[36px] h-[36px] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.12)] rounded-[8px] flex items-center justify-center text-[#22C55E] mb-[16px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <h4 className="text-[15px] font-[700] text-[#EEEEF0] mb-[6px] tracking-[-0.01em]">
                        No Cookies
                      </h4>
                      <p className="text-[12.5px] text-[#8A8B9E] leading-[1.5] m-0">
                        Cookieless tracking — no annoying banners
                      </p>
                    </div>

                    {/* SOC 2 Type II */}
                    <div className="bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[20px] text-left hover:border-[#FF6B6B]/20 transition-all duration-300 hover:translate-y-[-2px]">
                      <div className="w-[36px] h-[36px] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.12)] rounded-[8px] flex items-center justify-center text-[#22C55E] mb-[16px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>
                      <h4 className="text-[15px] font-[700] text-[#EEEEF0] mb-[6px] tracking-[-0.01em]">
                        SOC 2 Type II
                      </h4>
                      <p className="text-[12.5px] text-[#8A8B9E] leading-[1.5] m-0">
                        Enterprise-grade security certification
                      </p>
                    </div>

                    {/* EU Hosting */}
                    <div className="bg-[#2E2E36] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[20px] text-left hover:border-[#FF6B6B]/20 transition-all duration-300 hover:translate-y-[-2px]">
                      <div className="w-[36px] h-[36px] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.12)] rounded-[8px] flex items-center justify-center text-[#22C55E] mb-[16px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <h4 className="text-[15px] font-[700] text-[#EEEEF0] mb-[6px] tracking-[-0.01em]">
                        EU Hosting
                      </h4>
                      <p className="text-[12.5px] text-[#8A8B9E] leading-[1.5] m-0">
                        Data residency in Frankfurt, Germany
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* {activeTab == "dashboard" && <DashboardPanel />} */}
      {/* {activeTab == "funnels" && <FunnelsPanel />} */}
      {/* {activeTab == "sdk" && <SDKPanel />} */}
      {/* {activeTab == "session" && <SessionPanel />} */}
      {/* {activeTab == "privacy" && <PrivacyPanel />} */}
    </div>
  );
};
