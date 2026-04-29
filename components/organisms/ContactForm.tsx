"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";
import { Typography } from "../atoms/Typography";

type FormState = "idle" | "loading" | "success";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [hasConsent, setHasConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      privacyConsent: hasConsent,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json()) as { error?: string };
        throw new Error(result.error ?? "Ihre Anfrage konnte nicht gesendet werden.");
      }

      form.reset();
      setHasConsent(false);
      setState("success");
    } catch (error) {
      setState("idle");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ihre Anfrage konnte nicht gesendet werden.",
      );
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          placeholder="Leave this field empty"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A]">
          Name
        </label>
        <Input id="name" name="name" placeholder="Ihr Name" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A]">
          E-Mail
        </label>
        <Input id="email" type="email" name="email" placeholder="Ihre E-Mail" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A]">
          Nachricht
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Wie koennen wir Ihnen helfen?"
          required
        />
      </div>
      <label className="flex items-start gap-3 rounded-xl border border-[#CFF5D2] bg-[#F7F9F8] p-3 text-sm text-[#1A1A1A]">
        <input
          type="checkbox"
          name="privacyConsent"
          required
          checked={hasConsent}
          onChange={(event) => setHasConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-[#1F5F4A] text-[#1F5F4A] focus:ring-[#1F5F4A]"
        />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="font-semibold text-[#1F5F4A] underline">
            Datenschutzerklaerung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
          zu.
        </span>
      </label>
      <Button className="w-full" type="submit" disabled={state === "loading" || !hasConsent}>
        {state === "loading" ? "Wird gesendet..." : "Anfrage senden"}
      </Button>
      {state === "success" ? (
        <Typography variant="bodyMuted">
          Vielen Dank. Ihre Anfrage wurde uebermittelt. Wir melden uns zeitnah bei Ihnen.
        </Typography>
      ) : null}
      {errorMessage ? <Typography variant="bodyMuted">{errorMessage}</Typography> : null}
    </form>
  );
}
