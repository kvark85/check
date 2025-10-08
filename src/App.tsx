import React, { useCallback, useEffect } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import useRootContext from "./RootStore/hooks/useRootContext";
import { InputRow } from "./components/InputRow";
import { MainInput } from "./components/MainInput";
import { WebGoogleOauthButton } from "./components/WebGoogleOauthButton";
import { TokensType } from "./RootStore/commonTypes";

const App = observer(() => {
  const { secureStorage, axiosWrapper, account } = useRootContext();

  const handleLogin = useCallback(
    (tokens: TokensType) => {
      try {
        secureStorage.saveTokens(tokens);
        void account.fetchAccount();
      } catch {
        /* empty */
      }
    },
    [account, secureStorage],
  );

  const handleLogout = useCallback(async () => {
    try {
      await axiosWrapper.post("/auth/logout");
      await account.reset();
    } catch (error) {
      console.error(`Backend logout error: ${error}`);
    }
    secureStorage.clearTokens();
  }, [axiosWrapper, secureStorage, account]);

  useEffect(() => {
    try {
      void account.fetchAccount();
    } catch {
      /* empty */
    }
  }, []);

  return (
    <>
      <div className="header">
        {account.account ? <span>{account.account.name}</span> : null}
        {account.account ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <WebGoogleOauthButton onLogin={handleLogin} />
        )}
      </div>
      <div className="main-content">
        <div className="content">
          <h1>Check me</h1>
          <InputRow>
            <MainInput id="name" label="Name" />
            <MainInput id="surname" label="Surname" />
          </InputRow>
          <InputRow>
            <MainInput id="code" label="Code" />
          </InputRow>
          <button>🔍️ Find</button>
        </div>
        {account.account ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            Debug user info: {JSON.stringify(account.account, null, 2)}
          </div>
        ) : null}
      </div>
    </>
  );
});

export default App;
