"use client";

import { useEffect, useState } from "react";
import { Loader2, LogOut, Shield } from "lucide-react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";
import { apartmentPlanCategories } from "@/lib/apartment-plans";
import { useAvailability, useUpdateAvailability } from "@/hooks/use-availability";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { data, isLoading, isError } = useAvailability();
  const updateMutation = useUpdateAvailability();

  useEffect(() => {
    fetch("/api/admin/session")
      .then((r) => r.json())
      .then((body) => setAuthenticated(Boolean(body.authenticated)))
      .catch(() => setAuthenticated(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(body.error ?? "Identifiants incorrects");
        return;
      }
      setAuthenticated(true);
      setPassword("");
      toast.success("Connexion réussie");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    toast.success("Déconnexion");
  };

  const handleToggle = (category: string, type: number, available: boolean) => {
    updateMutation.mutate(
      { category, type, available },
      {
        onSuccess: () => toast.success("Disponibilité mise à jour"),
        onError: (err) => toast.error(err.message),
      },
    );
  };

  if (authenticated === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gold" />
      </div>
    );
  }

  if (!authenticated) {
    return (
      <section className="pt-40 pb-32">
        <div className="container-luxury max-w-md">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-luxury)]">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-gold" />
              <h1 className="font-display text-2xl">Administration</h1>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Gérez la disponibilité des types d&apos;appartements (F2, F3, F4).
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="admin-password"
                  className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Mot de passe
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                {loggingIn ? "Connexion…" : "Se connecter"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-40 pb-32">
      <div className="container-luxury max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Administration
            </p>
            <h1 className="mt-2 font-display text-4xl">Disponibilité des appartements</h1>
            <p className="mt-2 text-muted-foreground">
              Désactivez un type lorsqu&apos;il n&apos;est plus disponible.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </button>
        </div>

        {isLoading && (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
          </div>
        )}

        {isError && (
          <p className="text-center text-destructive py-8">
            Impossible de charger les données. Vérifiez la connexion MongoDB.
          </p>
        )}

        {data && (
          <div className="space-y-8">
            {apartmentPlanCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-3xl border border-border bg-card overflow-hidden"
              >
                <div className="border-b border-border px-6 py-4 bg-muted/30">
                  <h2 className="font-display text-3xl text-gradient-gold">{cat.label}</h2>
                </div>
                <ul className="divide-y divide-border">
                  {cat.variants.map((variant) => {
                    const record = data.find(
                      (r) => r.category === cat.id && r.type === variant.type,
                    );
                    const available = record?.available ?? true;

                    return (
                      <li
                        key={`${cat.id}-${variant.type}`}
                        className="flex items-center justify-between gap-4 px-6 py-4"
                      >
                        <div>
                          <p className="font-display text-xl">Type {variant.type}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {variant.sourceFile}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-xs uppercase tracking-[0.15em] font-semibold",
                              available ? "text-emerald-500" : "text-muted-foreground",
                            )}
                          >
                            {available ? "Disponible" : "Indisponible"}
                          </span>
                          <Switch
                            checked={available}
                            disabled={updateMutation.isPending}
                            onCheckedChange={(checked) =>
                              handleToggle(cat.id, variant.type, checked)
                            }
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
