import { useState, useEffect } from 'react';

export function useTruncateText(text: string, maxLength: number) {
  const [truncated, setTruncated] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncated(text.slice(0, maxLength) + '...');
    } else {
      setTruncated(text);
    }
  }, [text, maxLength]);

  return truncated;
}
