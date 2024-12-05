export const batchedFetch = async <T>(urls: string[], fetchFn: (url: string) => Promise<T>, limit: number = 5): Promise<T[]> =>  {

  const remainingUrls = [...urls];
  const results: any[] = [];

  while (remainingUrls.length > 0) {
    const batch = remainingUrls.splice(0, limit);
    const batchResults = await Promise.all(
      batch.map((url) =>
        fetchFn(url).catch((error: any) => ({ error })) // Ловим ошибки, чтобы не прерывать остальные
      )
    );
    results.push(...batchResults);
  }
  return results;
};

