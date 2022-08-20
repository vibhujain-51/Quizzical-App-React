import React, {
  Children,
  createContext,
  FC,
  useContext,
  useState,
} from "react";
import {
  getSessionToken,
  resetSessionToken,
} from "../api-client/services/setup-quiz";

export interface ApplicationContextType {
  token: string;
  getToken: () => Promise<void | boolean>;
  renewToken: () => Promise<void | boolean>;
}

const applicationDefaultValue = {
  token: "",
  getToken: async () => {},
  renewToken: async () => {},
};

const ApplicationContext = createContext<ApplicationContextType>(
  applicationDefaultValue
);

export interface ApplicationContextPropsType {
  children: React.ReactNode;
}

export const ApplicationContextProvider: FC<ApplicationContextPropsType> = (
  _props
) => {
  const { children } = _props;

  const [token, setToken] = useState<string>("");

  const getToken = async () => {
    const response = await getSessionToken();
    if (response.data) {
      setToken(response.data.token);
      return true;
    } else {
      alert("Failed To Fetch Token!!`");
      return false;
    }
  };

  const renewToken = async () => {
    const response = await resetSessionToken(token);
    if (response.data) {
      setToken(response.data.token);
      if (token !== "") return true;
    } else {
      alert("Failed To Refresh Token!!`");
      return false;
    }
  };

  const value = { token, getToken, renewToken };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  return useContext(ApplicationContext);
};
