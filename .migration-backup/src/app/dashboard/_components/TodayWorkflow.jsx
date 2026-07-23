"use client";

import React from "react";

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clipRule="evenodd"
    />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

/**
 * TodayWorkflow — Centerpiece operational widget.
 *
 * @param {Array}  steps        — Array of { label, value, status: "done" | "active" | "pending" }
 * @param {string} currentStage — Display name of the current active workflow stage
 * @param {number} completion   — Overall workflow completion % (0–100)
 * @param {string} nextAction   — Actionable message shown at the bottom
 * @param {string} subtitle     — Optional subtitle for the card header
 */
export default function TodayWorkflow({ steps, currentStage, completion, nextAction, subtitle }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Today&apos;s Workflow</h2>
          <p className="text-sm text-gray-500 mt-1">
            {subtitle || "Operational progress through the NASFAM grain traceability lifecycle"}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-sm text-gray-500 font-medium">Current Stage:</span>
          <span className="text-sm font-bold text-[#1a5c2e] bg-[#e8f1ea] px-3 py-1 rounded-full">
            {currentStage}
          </span>
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-10">
          {steps.map((step, i) => {
            const isDone = step.status === "done";
            const isActive = step.status === "active";
            return (
              <div key={i} className="flex items-center gap-4 group">
                {/* Status Indicator */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDone
                      ? "bg-[#1a5c2e] text-white"
                      : isActive
                      ? "bg-gray-200 text-gray-800"
                      : "bg-gray-50 text-gray-400"
                  }`}
                >
                  {isDone ? <CheckIcon /> : isActive ? <ClockIcon /> : null}
                </div>

                {/* Step label + value */}
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <span
                    className={`text-sm ${
                      isDone
                        ? "text-gray-900 font-medium"
                        : isActive
                        ? "text-gray-900 font-bold"
                        : "text-gray-400"
                    } truncate`}
                  >
                    {step.label}
                  </span>
                  <span
                    className={`text-base font-bold tabular-nums ml-4 flex-shrink-0 ${
                      isDone
                        ? "text-gray-900"
                        : isActive
                        ? "text-[#1a5c2e]"
                        : "text-gray-400"
                    }`}
                  >
                    {step.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Section */}
        <div className="pt-6 space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900">
              Workflow Completion
            </span>
            <span className="text-lg font-bold text-[#1a5c2e]">{completion}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full bg-[#1a5c2e] rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${completion}%`,
              }}
            />
          </div>

          {/* Next Action */}
          <div className="flex items-start gap-4 bg-gray-50 rounded-md px-6 py-5 mt-8 border border-gray-100">
            <span className="text-gray-500 mt-0.5">
              <AlertIcon />
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Next Action Required: </span>
              {nextAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
