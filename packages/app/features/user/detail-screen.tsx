import { View, Text } from 'react-native'
import { TextLink } from 'solito/link'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export const UserDetailScreen = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            <Text>
                Unicorn family is here!
            </Text>
            <Text>
                🦄🦄🦄🦄🦄🦄🦄🦄
            </Text>
            <TextLink href="/">
                👈 Go Back
            </TextLink>
        </View>
    )
}

const stylesheet = createStyleSheet(theme => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.barbie
    }
}))
