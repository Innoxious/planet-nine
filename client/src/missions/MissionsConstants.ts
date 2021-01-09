export type Mission = {
  number: number;
  tasks: number;
  description: string;
  quirks: Array<Quirk>;
  attempts: number;
};

export type Quirk = 'comms' | 'sequenced' | 'numbered' | 'finale' | 'special';

export const Missions: Array<Mission> = [
  {
    number: 1,
    tasks: 1,
    description:
      "Congratulations! You have been selected from a variety of applicants to take part in the most exciting, greatest and most dangerous adventure of mankind: the search for the unknown 9th planet. As soon as you arrive at the training ground for the final tests, you'll be sitting in your first training phase: Teambuilding.",
    quirks: [],
    attempts: 1,
  },
  {
    number: 2,
    tasks: 2,
    description:
      'It quickly turns out that you are perfectly coordinated with each other. Above all, your mental connection, the so-called drift compatibility, speaks for a successful cooperation. Now face the training phases 2 and 3: control technique and weightlessness.',
    quirks: [],
    attempts: 0,
  },
  {
    number: 3,
    tasks: 2,
    description:
      'The training phases follow in quick succession. The combined Energy Supply and Emergency Prioritization course requires a high degree of logical thinking in order to understand and apply the links. Your mathematical background comes in handy here.',
    quirks: ['numbered'],
    attempts: 0,
  },
  {
    number: 4,
    tasks: 3,
    description:
      'You are nearing completion of the preparations. The last training phases are the recalibration of the control modules, the reorientation of the communicators and the advanced auxiliary systems of the spacesuits. Nothing stands in the way of a quick start.',
    quirks: [],
    attempts: 0,
  },
  {
    number: 5,
    tasks: 3,
    description:
      'Celebrated too soon! One of you is sick and stuck in bed.After everyone has looked at his hand cards, your Commander asks everyone about his or her condition. But you may only answer with Good or Bad. Your Commander then decides who is ill. The sick crew member may not win a single trick.',
    quirks: ['special'],
    attempts: 0,
  },
];
