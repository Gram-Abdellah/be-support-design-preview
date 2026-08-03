"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import type { Lang } from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "fr",
  setLang: () => {},
});

const STORAGE_KEY = "bs-lang";
const LANG_EVENT = "bs-lang-change";

function isLang(value: string | null): value is Lang {
  return value === "fr" || value === "en" || value === "nl";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getSnapshot(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLang(saved) ? saved : "fr";
  } catch {
    return "fr";
  }
}

function getServerSnapshot(): Lang {
  return "fr";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  // localStorage is an external store: read it via useSyncExternalStore rather
  // than effect+setState, so the client re-render after hydration is handled
  // by React itself instead of causing a manual cascading render.
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      window.dispatchEvent(new CustomEvent(LANG_EVENT));
    } catch {
      // localStorage unavailable — ignore
    }
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
