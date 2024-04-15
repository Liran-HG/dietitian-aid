import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const heb = require("hebrew-transliteration")
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export function transliteration(text: string) {
    return heb.transliterate(text)
}
export function dateToAge(date: Date): string {
    const diff = Date.now() - date.getTime()
    const age = new Date(diff)
    return `${Math.floor(age.getUTCFullYear() - 1970)}.${("0" + age.getMonth()).slice(-2)}`
}

export function validateIsraeliID(id: string): boolean {
    // Using algorithm from https://en.wikipedia.org/wiki/Israeli_ID, https://gist.github.com/freak4pc/6802be89d019bca57756a675d761c5a8
    if (id == null) return false
    let strId: string = id.toString()
    if (strId.length > 9 || strId.length < 5 || isNaN(parseInt(id))) return false

    // Pad string with zeros up to 9 digits
    strId = strId.length < 9 ? ("00000000" + id).slice(-9).toString() : id.toString()

    return (
        Array.from(strId, Number).reduce((counter, digit, i) => {
            const step = digit * ((i % 2) + 1)
            return counter + (step > 9 ? step - 9 : step)
        }) %
            10 ===
        0
    )
}

/**
 * Function that pauses the execution for a specified amount of time.
 * Used for testing
 *
 * @param {number} ms - The number of milliseconds to sleep
 * @return {Promise<void>} A Promise that resolves after the specified time
 */
export function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms))
}
