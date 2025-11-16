import { useQuery } from "@tanstack/react-query";
import { getSuggestions } from "@/API/suggestionApi";
import { useDebounce } from "./useDebounce"

interface SuggestionResponse {
  success?: boolean;
  data: string[];
  message?: string;
}

const SUGGESTIONS_AUTH = "suggestions_auth";

const useAuthSuggestions = (query: string, opts = {}) => {
  const debouncedQuery = useDebounce(query, 500); // debounce here
  const enabled = Boolean(debouncedQuery && debouncedQuery.trim().length > 0);

  const { data: suggestion, isFetching, isError, refetch, ...rest } = useQuery<SuggestionResponse>({
    queryKey: [SUGGESTIONS_AUTH, debouncedQuery],
    queryFn: () => getSuggestions(debouncedQuery),
    enabled,
    staleTime: 1000 * 60, // 1 minute
    ...opts,
  });

  return { suggestion, isFetching, isError, refetch, ...rest };
};

export default useAuthSuggestions;
