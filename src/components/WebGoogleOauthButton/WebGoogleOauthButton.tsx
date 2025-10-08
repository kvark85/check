import { useLayoutEffect } from "react";
import { TokensType } from "../../RootStore/commonTypes";
import { useRootContext } from "../../RootStore/hooks";

const WEB_GOOGLE_AUTH_BUTTON_ID = "web-google-auth-button";

export type WebGoogleOauthButtonProps = {
  onLogin: (tokens: TokensType) => void;
};

export default function WebGoogleOauthButton(props: WebGoogleOauthButtonProps) {
  const { axiosWrapper } = useRootContext();
  useLayoutEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      callback: async (body: any) => {
        const { data } = await axiosWrapper.post<TokensType>(
          "/auth/login",
          body,
        );
        props.onLogin(data);
      },
    });
    window.google.accounts.id.renderButton(
      document.getElementById(WEB_GOOGLE_AUTH_BUTTON_ID),
      { theme: "outline", size: "large" },
    );
  }, [axiosWrapper, props]);

  return <span id={WEB_GOOGLE_AUTH_BUTTON_ID} />;
}
