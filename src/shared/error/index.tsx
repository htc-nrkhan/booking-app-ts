import config from "assests/config.js";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: any;
  hasError: boolean;
  errorInfo: any;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
      hasError: false,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>
          <div className="development-issue">
            {!config.configData.NODE_ENV ||
            config.configData.NODE_ENV === "development" ? (
              <details style={{ whiteSpace: "pre-wrap" }}>
                {error && error.toString()}
                {errorInfo.componentStack}
              </details>
            ) : (
              ""
            )}
          </div>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
