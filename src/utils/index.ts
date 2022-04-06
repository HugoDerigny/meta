export const computeStyles = (...args: Array<any>) => args.join(' ')

type Fetcher = <T>(string) => Promise<T>
export const fetcher: Fetcher = (url) => fetch(url).then((res) => res.json())
