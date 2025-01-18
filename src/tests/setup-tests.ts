import { makeNextNavigation } from './factories/make-next-navigation'

import { config } from 'dotenv'

config({ path: '.env.test' })

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.mock('next/navigation', () => makeNextNavigation())
