import { 
    useFonts, 
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
 } from '@expo-google-fonts/ubuntu';
import React, {ReactElement, ReactNode} from 'react'

import AppLoading from 'expo-app-loading';

type AppBoostrapProps = {
    children: ReactNode
}

export default function AppBoostrap({children}: AppBoostrapProps): ReactElement {

    const [fontLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_400Regular,
        Ubuntu_500Medium,
        Ubuntu_700Bold,
    })

  return (
    fontLoaded ? <>{children}</> : <AppLoading/>
  )
}