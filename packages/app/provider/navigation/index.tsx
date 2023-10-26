import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => (
    <NavigationContainer
        linking={useMemo(
            () => ({
                prefixes: [Linking.createURL('/')],
                config: {
                    initialRouteName: 'home',
                    screens: {
                        home: '',
                        'user-detail': 'user/:id',
                    }
                }
            }),
            []
        )}
    >
        {children}
    </NavigationContainer>
)
