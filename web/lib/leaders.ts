import type { Leader } from '@/components/LeaderModal'

// Single source of truth for leadership bios — used on both the homepage
// and the About page so there's only one copy to edit.
export const LEADERS: Record<string, Leader & { photo: string }> = {
  bishop: {
    photo: '/about/general-overseers.jpg',
    name: 'Bishop Dr. Frederick Abu Sidique Koroma',
    role: 'Founder & General Overseer',
    bio: "Born in 1961 at Congo Town, Freetown, Bishop Koroma graduated from Fourah Bay College, University of Sierra Leone, in 1988 with a B.A. in Political Science and Biblical Religious Studies. He is the Founder and General Overseer of Flaming Evangelical Ministries International, the first interim President of the Pentecostal Fellowship of Sierra Leone, and currently President and Chairperson of the Strategic Evangelistic Network, a body of over 150 independent churches and ministries. He has authored three books — Exposing and Destroying the Dark Satanic Kingdom, The Secret of A Happy Marriage, and Home Sweet Home. He holds honorary doctorates in Humanities (Commonwealth University, UK), Divinity (St Thomas Christian University, Florida, and IATA, India), and Public Administration (West Africa Institute in Public Administration, Ghana). His honours include the Order of the Rokel from former President Dr. Ernest Bai Koroma (2011), recognition from the Council of Texas, Senate, Mayor and Governor Rick Perry (2013), and the Africa Achievers Award for Leadership & Philanthropy (2019), among others. He is married to Rev. Dr. Lady Patricia Koroma, and they are blessed with a son, Joseph Garber-Koroma.",
  },
  patricia: {
    photo: '/about/leader-portrait.jpg',
    name: 'Rev. Dr. Lady Patricia Koroma',
    role: 'General Overseer',
    bio: "Rev. Dr. Lady Patricia Koroma serves alongside Bishop Dr. Frederick Abu Sidique Koroma as General Overseer of Flaming Evangelical Ministries International. She hosts Reverence, the Ministry's annual worship celebration, and is known within the Ministry as a dedicated worshipper whose personal devotion shapes the vision behind the programme. [More biography detail to be added as it becomes available.]",
  },
  pastor: {
    photo: '/about/head-pastor.jpg',
    name: 'Rev. Olamide Macculey',
    role: 'Head Pastor',
    bio: 'Rev. Olamide Macculey is a minister of the Gospel and a school manager based in Sierra Leone. He serves as a minister and preacher with Flaming Evangelical Ministries International, and acts as the School Manager for Flaming High School. He attended the University of Newcastle-upon-Tyne.',
  },
}
