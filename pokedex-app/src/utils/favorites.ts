const STORAGE_KEY = "favorites";

export function getFavorites(): string[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function isFavorite(name: string): boolean {
    return getFavorites().includes(name);
}

export function removeFavorite(name: string): void {
    const current = getFavorites();
    const updated = current.filter((f) => f !== name);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function toggleFavorite(name: string): string[] {
    const current = getFavorites();

    const updated = current.includes(name)
        ? current.filter((f) => f !== name)
        : [...current, name];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
}