//Võti, millega salvestatakse lemmikud LocalStorageisse
const STORAGE_KEY = "favorites";

//Tagastab kõik lemmiikud massiivina
export function getFavorites(): string[] {
    // Võtame andmed localStorage'ist
    // Kui midagi pole salvestatud, kasutatakse tühja massiivi "[]"
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

// Kontrollib, kas antud Pokémon on lemmikute hulgas
export function isFavorite(name: string): boolean {
    return getFavorites().includes(name);
}

// Eemaldab Pokémoni lemmikute seast
export function removeFavorite(name: string): void {
    const current = getFavorites();
    // Filtreerime välja antud nime
    const updated = current.filter((f) => f !== name);
    // Salvestame uuendatud listi tagasi localStorage'isse
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

// Lisab või eemaldab Pokémoni lemmikute seast
export function toggleFavorite(name: string): string[] {
    const current = getFavorites();

    // Kui nimi juba eksisteerib eemaldame
    // Kui ei eksisteeri lisame
    const updated = current.includes(name)
        ? current.filter((f) => f !== name)
        : [...current, name];

    // Salvestame uuendatud listi
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
}