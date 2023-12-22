declare module '*.tsx' {
  import type {DefineComponent} from 'tsx';
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
