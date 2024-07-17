interface AuthProvider {
  isAuthenticated: boolean
  username: null | string
  signIn(username: string): Promise<void>
  signOut(): Promise<void>
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: false,
  username: null,
  async signIn(username: string) {
    await new Promise((r) => setTimeout(r, 500)) // fake delay
    fakeAuthProvider.isAuthenticated = true
    fakeAuthProvider.username = username
  },
  async signOut() {
    await new Promise((r) => setTimeout(r, 500)) // fake delay
    fakeAuthProvider.isAuthenticated = false
    fakeAuthProvider.username = ''
  },
}
