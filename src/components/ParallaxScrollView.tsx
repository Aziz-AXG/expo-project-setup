import type { PropsWithChildren, ReactElement } from 'react';
import { ScrollView, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const bottom = useBottomTabOverflow();

  return (
    <ThemedView className="flex-1">
      <ScrollView
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <View
          style={{ backgroundColor: headerBackgroundColor[colorScheme] }}
          className="h-[250px] overflow-hidden transform -translate-y-1/2 scale-150">
          {headerImage}
        </View>
        <ThemedView className="flex-1 p-8 gap-4 overflow-hidden">{children}</ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
