//* Union types
type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: 'junior' | 'mid' | 'senior';
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: 'John',
  expertise: 'Javascript',
  experience: 1,
};

const seniorDeveloper: NextLevelDeveloper = {
  name: 'Alex',
  expertise: 'Typescript',
  experience: 2,
  leadershipExperience: 1,
  level: 'junior',
};

// NOTE: Using enum is not recommended
enum Level {
  junior,
  mid,
  senior,
}
