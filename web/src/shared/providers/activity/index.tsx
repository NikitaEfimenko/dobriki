import { ActivityKeys } from "@/icons";
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const activityColors: Record<ActivityKeys, string> = {
  Бег: "hsla(339, 76%, 59%, 1)",
  Лыжи: "hsla(207, 91%, 64%, 1)",
  Велосипед: "hsla(228, 94%, 67%, 1)",
  Ходьба: "hsla(27, 98%, 54%, 1)",
};

type ContextType = {
  activity?: ActivityKeys;
  setPreview?: (activity?: ActivityKeys) => void;
  color?: string;
};

const ActivityPreviewProviderContext = createContext<ContextType>({});

export const useActivityPreview = () => {
  return useContext(ActivityPreviewProviderContext);
};

export const ActivityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activity, setActivity] = useState<
    Omit<ContextType, "setPreview"> | undefined
  >();

  const setPreview = useCallback((activity?: ActivityKeys) => {
    setActivity((prev) => {
      if (!activity) {
        return undefined;
      }
      if (prev?.activity === activity) {
        return undefined;
      }
      return {
        activity,
        color: activityColors[activity],
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      color: activity?.color,
      activity: activity?.activity,
      setPreview,
    }),
    [activity, setPreview]
  );

  return (
    <ActivityPreviewProviderContext.Provider value={value}>
      {children}
    </ActivityPreviewProviderContext.Provider>
  );
};
