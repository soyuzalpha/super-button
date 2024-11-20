"use client";

import React from "react";
import { MdCheck } from "react-icons/md";
import SuperButton from "@/components/ui/SuperButton";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <div>
        <h1 className="text-black text-xl font-semibold">Custom Button Components</h1>
      </div>
      <SuperButton
        type="button"
        label="Confirm"
        size="medium"
        variant="green"
        icon={<MdCheck size={20} />}
        iconPosition="left"
        tooltip="Klik untuk konfirmasi"
        tooltipPosition="bottom"
        onClick={() => alert("Confirmed!")}
      />
    </section>
  );
}
