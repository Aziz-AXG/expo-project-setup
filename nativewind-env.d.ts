/// <reference types="nativewind/types" />

declare module 'nativewind' {
  import type { ComponentType } from 'react';
  import type { ViewProps, TextProps, ImageProps } from 'react-native';

  export function styled<T extends ComponentType<any>>(
    Component: T
  ): T & {
    className: string;
  };

  export function useColorScheme(): 'light' | 'dark';
}