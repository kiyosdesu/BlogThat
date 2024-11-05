const backEndUrl = "https://blogthat-backend.vercel.app";
interface FetcherResponse<T> {
  msg: string;
  status: "success";
  data: T;
  error: null;
}

export default async function fetcher<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
  options?: RequestInit
): Promise<FetcherResponse<T> | null> {
  const response = await fetch(`${backEndUrl}/api${url}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options?.headers ?? {}),
    },
    method: method,
    credentials: "include",
    ...options,
  });
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Resource not found!");
    }

    const errorMessage = await response.json();
    throw new Error(errorMessage.msg ?? "An unknown error occurred");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}
