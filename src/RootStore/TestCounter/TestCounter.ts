interface TestCounter {
  counter: number;
  increment(): void;
  incrementWithDelay(): Promise<void>;
}

export default TestCounter;
