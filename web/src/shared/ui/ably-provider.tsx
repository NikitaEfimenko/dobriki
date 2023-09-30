import dynamic from "next/dynamic";
import { configureAbly } from "@ably-labs/react-hooks";
import { useState, useEffect } from "react";
import { Skeleton } from "./skeleton";

type ClientOnlyProps = { children: JSX.Element };
const ClientOnly = (props: ClientOnlyProps) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    (async () => {
      configureAbly({ authUrl: `/api/realtime` });
    })();
    setState(true);
  }, []);
  const { children } = props;

  return state && children;
};

export const AblyProvider = dynamic(() => Promise.resolve(ClientOnly), {
  ssr: false,
});
