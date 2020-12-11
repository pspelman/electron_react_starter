import React from "react";

export default function SettingsView() {
  return (
    (
      <div className="centered-view">
        <div className="centered-container">
          <form className="centered-container-form">
            <div className="header">App settings</div>
            <button type="button">Notify Me</button>
            <div className="form-container">
              <div className="my-3">
                <div className="form-check">
                  <input
                    name="isDarkTheme"
                    type="checkbox"
                    className="form-check-input"/>
                  <label className="form-check-label">Dark Theme</label>
                </div>
                <div className="form-check">
                  <input
                    name="showNotifications"
                    type="checkbox"
                    className="form-check-input"/>
                  <label className="form-check-label">Enable Notifications</label>
                </div>
                <div className="form-check">
                  <input
                    name="playSound"
                    type="checkbox"
                    className="form-check-input"/>
                  <label className="form-check-label">Sounds</label>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                }}
                className="btn btn-danger">
                Quit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
};