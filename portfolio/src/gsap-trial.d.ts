declare module "gsap-trial/SplitText" {
  type SplitTextTarget = string | Element | ArrayLike<string | Element>;
  export class SplitText {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    words: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chars: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lines: any[];
    constructor(target: SplitTextTarget, vars?: Record<string, unknown>);
    revert(): void;
  }
}
