"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

interface Props {
  id: number;
  beaten: boolean;
}

export function ToggleBeaten({ id, beaten }: Props) {
  const router = useRouter();

  const toggleBeatenMutation = api.boss.toggleBeaten.useMutation({
    onSuccess() {
      router.refresh();
    },
  });

  return (
    <input
      type="checkbox"
      defaultChecked={beaten}
      onChange={() => toggleBeatenMutation.mutate({ id })}
      className="checkbox-accent checkbox checkbox-sm"
    />
  );
}
