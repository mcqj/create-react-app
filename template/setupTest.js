import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

// Extend vitest matchers with jest-dom matchers
expect.extend({matchers});
