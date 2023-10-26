import { UnistylesTheme } from 'react-native-unistyles'
import { NavigationProvider } from './navigation'
import { theme } from './styles'

export const Provider = ({ children }: { children: React.ReactNode }) => (
    <NavigationProvider>
        <UnistylesTheme theme={theme}>
            {children}
        </UnistylesTheme>
    </NavigationProvider>
)
