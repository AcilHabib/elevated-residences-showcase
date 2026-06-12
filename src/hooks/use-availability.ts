"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { UnitAvailabilityRecord } from "@/lib/availability.types";
import { buildAvailabilityMap } from "@/lib/availability.types";

async function fetchAvailability(): Promise<UnitAvailabilityRecord[]> {
  const res = await fetch("/api/availability", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load availability");
  return res.json();
}

export function useAvailability() {
  const query = useQuery({
    queryKey: ["availability"],
    queryFn: fetchAvailability,
    staleTime: 30_000,
  });

  return {
    ...query,
    map: query.data ? buildAvailabilityMap(query.data) : undefined,
  };
}

export function useUpdateAvailability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: { category: string; type: number; available: boolean }) => {
      const res = await fetch("/api/availability", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Update failed");
      }
      return res.json() as Promise<UnitAvailabilityRecord>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["availability"] });
    },
  });
}
