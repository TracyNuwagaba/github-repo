import React from "react";
function Loading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Hold on, fetching data...
      </p>
    );
  };
}
export default Loading;
