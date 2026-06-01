declare module '@studio-freight/lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    wrapper?: Window | HTMLElement;
    content?: HTMLElement;
  }

  class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    destroy(): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
    stop(): void;
    start(): void;
    scrollTo(target: number | string | HTMLElement, options?: object): void;
  }

  export default Lenis;
}
