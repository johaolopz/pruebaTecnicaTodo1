import { useCallback, useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((x) => x + 1), []);

  return { count, increment };
};

describe("Testing App component", () => {
  it("Test 1", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
