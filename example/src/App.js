import React from "react";

import { useLibInSSR } from "use-lib-in-ssr";

const App = () => {
  const [loading, p5] = useLibInSSR("p5/lib/p5");
  console.log(p5);
  return <div>{loading ? "loading" : "not"}</div>;
};
export default App;
