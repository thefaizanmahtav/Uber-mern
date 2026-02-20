import API from "@/config/apiClient";

export interface SuggestionResponse {
    success: boolean;
    data: string[];
    message?: string;
}

export const getSuggestions = async (query: string): Promise<SuggestionResponse> => {
    if (!query || query.trim() === "") {
        return { success: false, data: [] };
    }

    try {
        const res = await API.get("maps/get-suggestion", {
            params: { input: query },
        });
        return res.data;
    } catch (error: any) {
        console.error("Error fetching suggestions:", error?.response?.data || error.message);

        return {
            success: false,
            data: [],
            message: "Failed to fetch suggestions",
        };
    }
};
