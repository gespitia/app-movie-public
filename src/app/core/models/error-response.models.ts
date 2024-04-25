export interface ErrorRespnseInterface {
  headers:    WelcomeHeaders;
  status:     number;
  statusText: string;
  url:        string;
  ok:         boolean;
  name:       string;
  message:    string;
  error:      Error;
}

export interface Error {
  status_code:    number;
  status_message: string;
  success:        boolean;
}

export interface WelcomeHeaders {
  normalizedNames: NormalizedNamesClass;
  lazyUpdate:      null;
  headers:         NormalizedNamesClass;
}

export interface NormalizedNamesClass {
}
