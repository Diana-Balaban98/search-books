export const toggleIsLoading = (isLoading: boolean) => ({type: "APP/TOGGLE-IS-LOADING", isLoading} as const)

export type ActionsType = ReturnType<typeof toggleIsLoading>