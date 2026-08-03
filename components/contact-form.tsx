"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real backend (form endpoint + email/CRM notification)
    // instead of only flipping local state.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-5 bg-cream border border-line rounded-xl p-[18px] flex gap-3 items-center">
        <span className="w-7 h-7 rounded-full bg-green text-white flex items-center justify-center flex-none">
          ✓
        </span>
        <span className="text-[14.5px]">
          Merci ! Votre message est bien noté (démo). Nous vous répondons vite.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-[13px] font-semibold mb-[7px]">Nom</label>
        <input
          required
          placeholder="Votre nom"
          className="w-full font-sans text-[15px] px-[15px] py-[13px] border border-line-2 rounded-[10px] bg-white outline-none focus:border-rust"
        />
      </div>
      <div>
        <label className="block text-[13px] font-semibold mb-[7px]">Email</label>
        <input
          required
          type="email"
          placeholder="vous@entreprise.be"
          className="w-full font-sans text-[15px] px-[15px] py-[13px] border border-line-2 rounded-[10px] bg-white outline-none focus:border-rust"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-[13px] font-semibold mb-[7px]">Entreprise</label>
        <input
          placeholder="Nom de votre entreprise"
          className="w-full font-sans text-[15px] px-[15px] py-[13px] border border-line-2 rounded-[10px] bg-white outline-none focus:border-rust"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-[13px] font-semibold mb-[7px]">Message</label>
        <textarea
          required
          rows={4}
          placeholder="Ce que vous aimeriez déléguer…"
          className="w-full font-sans text-[15px] px-[15px] py-[13px] border border-line-2 rounded-[10px] bg-white outline-none focus:border-rust resize-y"
        />
      </div>
      <button
        type="submit"
        className="sm:col-span-2 bg-navy text-white text-[15px] font-semibold py-[15px] rounded-[10px] border-0 cursor-pointer font-sans hover:bg-navy-2"
      >
        Envoyer le message
      </button>
    </form>
  );
}
