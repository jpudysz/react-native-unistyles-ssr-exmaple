import { UnistylesRegistry } from 'react-native-unistyles'
import { breakpoints } from './breakpoints'
import { theme } from './theme'

type AppBreakpoints = typeof breakpoints
type AppThemes = {
    light: typeof theme
}

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry
    .addBreakpoints({
        xs: 0,
        sm: 300,
        md: 500,
        lg: 800,
        xl: 1200
    })
    .addThemes({
        light: theme
    })
    .addConfig({
        experimentalCSSMediaQueries: true
    })
