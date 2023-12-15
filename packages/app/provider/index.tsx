import { NavigationProvider } from './navigation'

export const Provider = ({ children }: { children: React.ReactNode }) => (
    <NavigationProvider>
        {children}
    </NavigationProvider>
)
