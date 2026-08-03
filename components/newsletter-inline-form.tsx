"use client";

import { useState } from "react";

export default function NewsletterInlineForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real newsletter backend (e.g. Mailchimp/Brevo)
    // instead of only flipping local state.
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <div className="flex-1 min-w-[260px] max-w-[420px] flex items-center gap-2.5 bg-white/[.06] border border-[rgba(201,183,142,.35)] rounded-[10px] px-4 py-[14px]">
        <span className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center flex-none text-[13px]">
          ✓
        </span>
        <span className="text-sm text-white">Merci, c&apos;est noté !</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2.5 flex-wrap flex-1 min-w-[260px] max-w-[420px]">
      <input
        type="email"
        placeholder="vous@entreprise.be"
        required
        className="flex-1 min-w-[180px] font-sans text-[15px] px-4 py-[14px] border border-white/20 rounded-[10px] bg-white/[.06] text-white outline-none placeholder:text-white/40 focus:border-sand"
      />
      <button
        type="submit"
        className="bg-rust text-white text-[15px] font-semibold px-[22px] py-[14px] rounded-[10px] border-0 cursor-pointer font-sans hover:bg-rust-dk"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
