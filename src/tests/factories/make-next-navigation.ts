/**
 * Factory function to create mock implementations of Next.js navigation hooks.
 *
 * @returns An object containing mock implementations of Next.js navigation hooks:
 * - `useRouter`: Returns an object with mock functions for `back`, `forward`, `prefetch`, `push`, `refresh`, and `replace`.
 * - `useParams`: Returns an object with mock parameters `slug` and `id`.
 * - `usePathname`: Returns the root pathname `/`.
 * - `useSearchParams`: Returns an object with a mock `get` function that returns an empty string.
 */
export function makeNextNavigation() {
  return {
    useRouter() {
      return {
        back: vi.fn(),
        forward: vi.fn(),
        prefetch: vi.fn(),
        push: vi.fn(),
        refresh: vi.fn(),
        replace: vi.fn(),
      }
    },
    useParams() {
      return {
        slug: 'slug',
        id: 'id',
      }
    },
    usePathname() {
      return '/'
    },
    useSearchParams() {
      return {
        get: vi.fn().mockReturnValue(''),
      }
    },
  }
}

export type MakeNextNavigation = ReturnType<typeof makeNextNavigation>
