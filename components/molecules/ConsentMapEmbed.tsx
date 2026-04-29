"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

type ConsentMapEmbedProps = {
  title: string;
  src: string;
};

export function ConsentMapEmbed({ title, src }: ConsentMapEmbedProps) {
  const [enabled, setEnabled] = useState(false);

  if (enabled) {
    return (
      <iframe
        title={title}
        src={src}
        className="h-64 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-64 flex-col items-center justify-center gap-4 bg-[#F7F9F8] p-6 text-center">
      <Typography variant="bodyMuted" className="max-w-md text-sm md:text-base">
        Die Karte wird erst geladen, wenn Sie zustimmen. Dabei koennen Daten an
        Google uebermittelt werden.
      </Typography>
      <Button onClick={() => setEnabled(true)} type="button">
        Google Maps laden
      </Button>
    </div>
  );
}
