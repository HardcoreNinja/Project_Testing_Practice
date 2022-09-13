import{captialize} from './capitalize';

it('First letter is NOT capitalized', () => {
    expect(captialize('steve')).toBe('Steve');
} );

it('First letter IS capitalized.', () => {
    expect(captialize('steve')).toBe('Steve');
} );