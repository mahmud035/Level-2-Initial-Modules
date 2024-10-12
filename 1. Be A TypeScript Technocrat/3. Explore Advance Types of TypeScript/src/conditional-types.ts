// A type is dependent on another type

// Ex: 1
type a2 = string extends string ? string : null; // Directly use 'string'

// Nested conditional type
type d = string extends null
  ? null
  : undefined extends number
  ? number
  : number extends null
  ? null
  : never;

// Ex: 2
type Sheikh = {
  wife1: string;
  wife2: string;
};

type A = keyof Sheikh; // NOTE: output:  'wife1' | 'wife2'

type CheckProperty<W> = W extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<'wife1'>; // true
type CheckWife2 = CheckProperty<'wife2'>; // true
type CheckWife3 = CheckProperty<'wife3'>; // false

// check korbe ei Sheikh type er wife1 ache ki na ? true : false
// check korbe ei Sheikh type er wife2 ache ki na ? true : false
// check korbe ei Sheikh type er wife3 ache ki na ? true : false

// Ex: 3 (Matha kharap Kora Example)
type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe';

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Rachel'>;

/**
 * IMP: union type er moddhe thake kono value er type jodi never hoy, tahole oi value ta union type theke remove hoye jay.
 *  */
