import dynamic from "next/dynamic";

export * from "./ui";


const TopColleaguesRealtime = dynamic(() => import('./ui/realtime').then(module => module.TopColleaguesRealtime), {
  ssr: false,
})

export {
  TopColleaguesRealtime
};