export type ReverencePhoto = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type ReverenceChapter = {
  id: string
  number: string
  title: string
  introduction: string
  photos: ReverencePhoto[]
}

const image = (file: string, alt: string, caption: string, width: number, height: number): ReverencePhoto => ({
  src: `/events/reverence/2026/${file}.jpg`,
  alt,
  caption,
  width,
  height,
})

export const reverence2026Chapters: ReverenceChapter[] = [
  {
    id: 'the-gathering',
    number: '01',
    title: 'The gathering',
    introduction: 'A wide view of the room, the stage, and the people who came together for the sixth edition.',
    photos: [
      image('gathering-wide', 'A wide view of the illuminated Reverence stage', 'The gathering, seen across the full stage.', 1400, 1120),
      image('gathering-stage', 'Worship leaders and singers gathered across the Reverence stage', 'Worship leaders share the stage.', 1400, 1120),
      image('choir-together', 'Choir members singing together during Reverence', 'Voices gather in song.', 1400, 1120),
      image('congregation-response', 'A member of the congregation with hands raised', 'A worshipper responds from the congregation.', 1120, 1400),
    ],
  },
  {
    id: 'the-sound',
    number: '02',
    title: 'The sound',
    introduction: 'Voices and instruments meet on stage, captured in the light and colour of the night.',
    photos: [
      image('music-duet', 'A vocalist and saxophonist performing on stage', 'Voice and saxophone share a moment.', 1400, 933),
      image('saxophone', 'A saxophonist playing beneath the stage lights', 'A saxophone takes the melody.', 1120, 1400),
      image('trumpet', 'A trumpeter performing on stage', 'A trumpet joins the sound.', 1120, 1400),
      image('vocalist', 'A vocalist singing with other singers behind her', 'A lead voice, supported by the singers around her.', 1120, 1400),
    ],
  },
  {
    id: 'the-worship',
    number: '03',
    title: 'The worship',
    introduction: 'Closer frames hold the expressions, gestures, and stillness visible in the photographs.',
    photos: [
      image('worship-scene', 'A worship leader on stage before the congregation', 'On stage, with the congregation in view.', 1400, 1120),
      image('singer-reflection', 'A singer holding a microphone in a reflective moment', 'A quiet moment at the microphone.', 933, 1400),
      image('worship-close', 'A vocalist kneeling on stage as she sings', 'A singer kneels as the song continues.', 1120, 1400),
      image('worship-monochrome', 'A singer captured in a monochrome stage photograph', 'Light and voice, seen in black and white.', 1120, 1400),
    ],
  },
  {
    id: 'stage-moments',
    number: '04',
    title: 'Moments on stage',
    introduction: 'Individual frames bring the people and gestures on stage into closer view.',
    photos: [
      image('shared-stage-moment', 'Two people sharing a moment on the Reverence stage', 'A shared moment beneath the Reverence screens.', 1400, 1120),
      image('singer-on-stage', 'A vocalist moving across the stage with a microphone', 'A vocalist moves across the stage.', 1120, 1400),
      image('stage-vocalist', 'A vocalist singing at the front of the stage', 'A voice carried from the front of the stage.', 1120, 1400),
      image('vocalist-close', 'A close view of a vocalist singing into a microphone', 'A closer view of the song.', 1120, 1400),
    ],
  },
  {
    id: 'many-voices',
    number: '05',
    title: 'Many voices, one gathering',
    introduction: 'The closing frames return to the shared stage and the people gathered around the music.',
    photos: [
      image('song-with-choir', 'A vocalist singing toward the gathered congregation', 'A song shared with the congregation.', 1400, 1120),
      image('choir-response', 'A vocalist with one hand raised as singers stand behind her', 'A raised hand, with the singers gathered behind.', 1120, 1400),
      image('stage-ensemble', 'A singer and supporting musicians on the Reverence stage', 'The stage fills with musicians and light.', 1400, 1120),
      image('worship-leader', 'A worship leader singing with arms extended', 'A final view of the song in motion.', 1400, 1120),
    ],
  },
]
