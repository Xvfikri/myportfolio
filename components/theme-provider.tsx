"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { type ThemeProviderProps } from "next-themes" // This might be an issue if not exported directly or differently named in v9?
// Actually next-themes exports ThemeProviderProps.

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
