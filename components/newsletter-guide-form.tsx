"use client";

import { useState } from "react";

export default function NewsletterGuideForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real newsletter backend (e.g. Mailchimp/Brevo)
    // instead of only flipping local state.
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <div className="bg-white/[.06] border border-[rgba(201,183,142,.35)] rounded-[14px] p-6 flex gap-3.5 items-center">
        <span className="w-[34px] h-[34px] rounded-full bg-green text-white flex items-center justify-center flex-none">
          ✓
        </span>
        <div>
          <div className="font-semibold text-base">C&apos;est noté, merci !</div>
          <div className="mt-[3px] text-sm text-white/70">
            Votre guide arrive dans votre boîte mail (démo).
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-[13px] font-semibold text-white/85 mb-[9px]">
        Votre adresse email
      </label>
      <div className="flex flex-wrap gap-2.5">
        <input
          required
          type="email"
          placeholder="vous@entreprise.be"
          className="flex-1 min-w-[200px] font-sans text-[15px] px-4 py-[15px] border border-white/20 rounded-[11px] bg-white/[.08] text-white outline-none placeholder:text-white/40 focus:border-sand"
        />
        <button
          type="submit"
          className="bg-rust text-white text-[15px] font-semibold px-[26px] py-[15px] rounded-[11px] border-0 cursor-pointer font-sans whitespace-nowrap hover:bg-rust-dk"
        >
          Recevoir le guide
        </button>
      </div>
      <p className="mt-3 text-[12.5px] text-white/50 leading-[1.5]">
        En vous inscrivant, vous acceptez de recevoir nos emails. Vos données restent confidentielles.
      </p>
    </form>
  );
}
