import type { Leader } from '@/components/LeaderModal'

// Single source of truth for leadership bios — used on both the homepage
// and the About page so there's only one copy to edit.
export const LEADERS: Record<string, Leader & { photo: string }> = {
  bishop: {
    photo: '/about/bishop-solo.png',
    name: 'Bishop Dr. Frederick Abubakarr Sidique Sulaiman Koroma',
    role: 'Founder & General Overseer',
    bio: [
      {
        heading: 'Early Life and Background',
        text: 'Bishop Frederick Abubakarr Sidique Sulaiman Koroma was born in 1961 in Congo Town, Freetown, Sierra Leone. The name "Frederick" was adopted later in life for social validation. He was born into a Muslim family, with both of his parents being ardent Muslims, before his life took a decisive spiritual direction through his encounter with Christianity. He began his education at Good Shepherd School in Congo Town for kindergarten, then attended Congo Town Municipal School and later Syke Street Municipal School. After sitting the Common Entrance Examination, he was admitted to Sierra Leone Grammar School and later transferred to Magburaka Government School for Boys.',
      },
      {
        heading: 'Higher Education',
        text: "Bishop Koroma attended Fourah Bay College, University of Sierra Leone, studying Political Science, History, and Biblical Religious Studies, graduating in 1988 with a Bachelor's degree in Political Science. He later pursued a Master's degree in Leadership from Commonwealth University London, United Kingdom, and has since received several honorary doctoral degrees from institutions around the world.",
      },
      {
        heading: 'His Encounter with Christ',
        text: 'Bishop Koroma\'s life changed profoundly in December 1979, when he gave his life to Jesus Christ. Having grown up in a Muslim household, his conversion marked a significant transformation, producing an intense and growing hunger for God. He served as a Youth President, later a Sunday School Teacher, and eventually an Associate Pastor. As a young believer, he engaged in door-to-door evangelism across Congo Town, Tengbeh Town, and Murray Town, as well as evangelising in hospitals.',
      },
      {
        heading: 'The Call to Ministry',
        text: 'His early Christian life was characterised by evangelism, prayer, fasting, Bible study, and an increasing commitment to God\'s work. He understood ministry as a calling requiring consecration, purity, discipline, sacrifice, and an enduring fear of God. Prayer, retreats, fasting, and waiting upon God have remained central to his life, alongside a strong emphasis on genuinely studying and internalising Scripture rather than merely reading it to prepare sermons.',
      },
      {
        heading: 'Flaming Evangelical Ministries International',
        text: 'Bishop Koroma is the Founder and General Overseer of Flaming Evangelical Ministries International. What began as a vision shared through prayer, faith, confession, hard work, and perseverance has grown into an international ministry. More than 100 Flaming churches have been planted across Sierra Leone, with branches and sister churches established in Liberia, The Gambia, Côte d\'Ivoire, Ghana, Britain, the United States, Italy, Jamaica, and Australia.',
      },
      {
        heading: 'Development of the Ministry',
        text: 'Under his leadership, Flaming Evangelical Ministries has developed beyond conventional church structures to operate or establish primary and secondary schools, a community clinic, a radio station, and an orphanage, with plans identified for a youth empowerment centre and a television station — built primarily through the sacrificial giving of church members.',
      },
      {
        heading: 'International Ministry and Evangelism',
        text: "Bishop Koroma's preaching ministry has extended across Africa, Europe, North America, Australia, and other regions, through crusades, conferences, evangelistic programmes, and leadership meetings, with a consistent emphasis on reaching people who have not yet encountered the Gospel.",
      },
      {
        heading: 'Strategic Evangelistic Network',
        text: 'Bishop Koroma is President and Chairperson of the Strategic Evangelistic Network (SEN), an umbrella body of more than 150 independent churches and ministries in Sierra Leone and beyond. Through SEN, he and other ministers have conducted crusades across Sierra Leone and West Africa — including The Gambia, Liberia, Guinea, Ghana, and Nigeria, as well as Kenya — with some gatherings attracting audiences of more than 50,000 people. He previously served as the first interim President of the Pentecostal Fellowship of Sierra Leone (PFSL).',
      },
      {
        heading: 'A Passion for Souls',
        text: 'At the heart of his ministry is a passion for souls — not simply gathering large crowds, but seeing Christ formed in people\'s lives and helping believers walk in consecration, with a vision that extends to reaching the unreached until the return of Christ.',
      },
      {
        heading: 'Ministry Philosophy',
        text: 'Bishop Koroma\'s ministry is shaped by consecration, prayer, and the authority of Scripture — he teaches that every prophecy, vision, or revelation must be measured against the Word of God. He emphasises patience in God\'s timing, guided by his personal mantra "Proper planning prevents poor performance," and places considerable importance on mentorship, teaching younger ministers: "You don\'t look for the hand of your mentor; you look for his heart."',
      },
      {
        heading: 'His Philosophy on Success',
        text: 'He believes success means different things to different people, and in ministry it should be measured by more than numbers, buildings, or recognition — defined instead as achieving one\'s goals and leaving a legacy for future generations. His philosophy is captured in his own words: "Success without a successor is failure turned upside down."',
      },
      {
        heading: 'Vision, Hard Work and Perseverance',
        text: 'He teaches that every major achievement begins with a thought and a vision, followed by faith, confession, hard work, honesty, and action — summarised in his formula: Positive Thoughts + Positive Belief × Great Vision + Positive Confession × Hard Work and Honesty.',
      },
      {
        heading: 'Marriage and Family Life',
        text: 'Bishop Koroma met Rev. Dr. Lady Patricia Koroma in 1988 when he went to preach at a church where she was present. She later attended his Bible School, where he provided her with a scholarship, and their relationship eventually led to marriage on 6 October 1990. They are blessed with a son, Joseph Garber-Koroma.',
      },
      {
        heading: 'Mentorship and Generational Impact',
        text: 'Many pastors, evangelists, apostles, and professionals describe Bishop Koroma as a spiritual father and mentor who has helped them find employment, supported them through difficult circumstances, encouraged their education, and mentored them in ministry — reflecting his emphasis on raising people rather than merely building institutions.',
      },
      {
        heading: 'Authorship',
        text: 'Bishop Koroma has authored three books: Exposing and Destroying the Dark Satanic Kingdom, The Secret of a Happy Marriage, and Home Sweet Home, addressing spiritual warfare, Christian living, marriage, and family.',
      },
      {
        heading: 'National and International Recognition',
        text: 'His honours include the Order of the Rokel (2011) from former President Dr. Ernest Bai Koroma; recognition from the Council of Texas, Senate, Mayor, and Governor Rick Perry (2013); an award in Perth, Australia (2013); Outstanding Godly Visionary Leadership (2016); 100 Most Influential Sierra Leoneans by Sierra Ovation (2016); a Patriarchal Award from Archbishops in South Africa (2018); the Africa Achievers Award for Leadership and Philanthropy (2019); the Outstanding Public Leadership Award (2019); a Youth Empowerment Award from Nyame Adom Enterprises; the Social Justice Award from Hero\'s Magazine (2023); a Certificate of Good Reputation at the UK House of Commons (2024); and Special Recognition for Faith and Commitment from the City of Dallas, Texas (2024).',
      },
      {
        heading: 'Honorary Doctorates',
        text: 'He holds a Doctor of Humanities, Honoris Causa from Commonwealth University, UK (2017); a Doctor of Divinity, Honoris Causa from Saint Thomas Christian University, Florida, USA (2018); a Doctorate in Public Administration, Honoris Causa from the West Africa Institute for Public Administration, Ghana; and a Doctor of Divinity, Honoris Causa from IATA, India.',
      },
      {
        heading: 'Legacy',
        text: 'Bishop Koroma describes his legacy as the footprint he hopes to leave behind — that a man called Bishop Abu Koroma lived and preached the Gospel with conviction and without compromise. His legacy lives on in the churches he has planted, the institutions he has helped establish, the ministers he has raised, and the souls reached through evangelism.',
      },
      {
        heading: 'Quotable Quotes',
        text: '"Divine intervention is when divinity steps into the calamity of humanity to bring serenity, stability and tranquility." · "Adversity is the University God takes us through to prove our love and tenacity." · "The success of a man is as a result of the quality of men around his life." · "If you do not update your Christian life you will become outdated."',
      },
    ],
  },
  patricia: {
    photo: '/about/patricia-solo.png',
    name: 'Rev. Dr. Lady Patricia Koroma',
    role: 'General Overseer',
    bio: [
      {
        heading: 'Background and Early Life',
        text: 'Rev. Dr. Lady Patricia Koroma was born in Freetown, Sierra Leone, on Charles Street and later grew up on Sumner Street, off Benjamin Lane. She is the youngest of six children, born into a family of four boys and two girls. Her late father worked as a dispenser, while her late mother worked as a receptionist for the Government of Sierra Leone. She describes her childhood as a happy one — fun loving, and known to be somewhat mischievous.',
      },
      {
        heading: 'Education',
        text: 'Lady Patricia began her education at Central Nursery School before proceeding to Tower Hill Municipal School for primary education, and later the Freetown Secondary School for Girls (FSSG). She developed an interest in Reading, Mathematics, Biology, and Art, with a natural talent for drawing and carving recognised by her school principal, the late Mrs. Blake.',
      },
      {
        heading: 'Faith and Spiritual Journey',
        text: 'Raised in the Catholic faith, Lady Patricia admired the devotion of Catholic nuns and at one point desired to become one. Her spiritual journey led her to accept Christ at the Way of Truth Church, and she later enrolled at the Flaming Bible Centre — a Bible school established by Bishop Dr. Frederick Abu Sidique Koroma and three other pastors — a turning point that led her toward Christian ministry and marriage.',
      },
      {
        heading: 'Meeting Bishop Koroma',
        text: 'Lady Patricia met Bishop Koroma when she was twenty years old, while attending the Flaming Bible Centre. During her third year there, he proposed to her. She was initially hesitant, concerned about how people would react, but after prayer and encouragement from a pastor friend, she accepted. She believes God was directing their relationship.',
      },
      {
        heading: 'Marriage',
        text: 'Lady Patricia and Bishop Koroma were married on 6 October 1990. Their early years were challenging — they began with very limited financial resources, living in a modest single room and parlour with outside amenities, and engaged in small businesses including selling fish, kerosene, ginger beer, blocks of ice, and Kool Aid popsicles to make ends meet. Those experiences became an important part of their testimony of perseverance, faith, sacrifice, and God\'s provision.',
      },
      {
        heading: 'Ministry and Service',
        text: "Lady Patricia has served as First Lady of Flaming Evangelical Ministries, with involvement in prayer, counselling, encouragement, women's fellowship, and evangelism — particularly ministering to women and young ladies, encouraging them to remain committed to their faith and responsibilities within the ministry.",
      },
      {
        heading: "Flames of Fire Women's Network",
        text: "Lady Patricia founded the Flames of Fire Women's Network, launched in 2004, bringing women from Flaming Church branches locally and internationally together for fellowship, prayer, encouragement, and Kingdom service — uniting women who previously worked independently across different branches.",
      },
      {
        heading: 'International Ministry',
        text: 'Lady Patricia has travelled extensively with her husband, ministering across Ghana, Nigeria, The Gambia, Jamaica, the United Kingdom, the United States, and Australia — participating in preaching, prayer, revival meetings, deliverance ministry, and counselling, including a remembered healing testimony in Ghana involving a woman who was almost blind.',
      },
      {
        heading: 'Compassion for Children',
        text: 'Lady Patricia has a deep passion for children who have lost one or both parents. Land was secured at Marjay Town, Goderich, with the vision of developing an orphanage, and she has helped provide monthly feeding allowances, provisions, and school materials to vulnerable children, funded by church members, friends, and families abroad — with a desire to help some pursue university education.',
      },
      {
        heading: 'Honorary Doctorate',
        text: 'In recognition of their service to God, Lady Patricia and Bishop Koroma were awarded honorary Doctorates in Divinity by St. Thomas Bible School in Florida, USA. She initially considered declining the honour but accepted with gratitude after her husband\'s encouragement.',
      },
      {
        heading: 'Marriage and Family Life',
        text: 'Lady Patricia and Bishop Koroma celebrated their 30th Pearl Wedding Anniversary on 6 October 2020. She attributes the strength of their union to faith in God, trust, openness, communication, commitment, and mutual love — believing strongly in building a marriage on God\'s Word and creating an environment where both husband and wife feel loved and appreciated.',
      },
      {
        heading: 'Her Philosophy',
        text: 'A central theme of Lady Patricia\'s testimony is perseverance — remaining faithful through difficult seasons and trusting God for provision and breakthrough. Her journey reflects her belief that people should not only look at the glory they see but understand the story behind it, encouraging others to remain committed to God and press toward their calling.',
      },
      {
        heading: 'Legacy',
        text: 'As a wife, mother, minister, women\'s leader, counsellor, and advocate for vulnerable children, Lady Patricia\'s legacy is one of faithfulness, love, perseverance, service, and unwavering commitment to God and His people.',
      },
    ],
  },
  pastor: {
    photo: '/about/head-pastor.jpg',
    name: 'Rev. Olamide Macauley',
    role: 'Main Pastor, Headquarters Church',
    bio: [
      {
        text: 'Born on 28th October 1961, Rev. Olamide Macauley is a pastor, husband, father, grandfather, and dedicated servant of God whose life reflects a journey of faith, education, family, leadership, and service.',
      },
      {
        heading: 'Early Life and Education',
        text: 'Rev. Macauley began his education at The International Primary School, later attending Methodist Boys High School and Freetown Technical Institute for his secondary and technical education. He proceeded to Fourah Bay College, University of Sierra Leone, where he studied Engineering, and was awarded a scholarship to further his education at the University of Newcastle in the United Kingdom. His training in Engineering gave him a strong foundation in discipline, analytical thinking, and problem-solving — qualities that continue to shape his leadership and administrative responsibilities within the ministry.',
      },
      {
        heading: 'His Encounter with Christ',
        text: 'A major turning point in Rev. Macauley\'s life was his encounter with Jesus Christ. When he first met his wife, Rev. Juliete Campbell, she was not yet saved — she later came to know Christ and invited him to accompany her to church. It was there that he had an encounter with Christ and gave his life to Jesus, roughly 36 years ago, around 1990 — a salvation experience that became the foundation for his lifelong commitment to Christian service and ministry.',
      },
      {
        heading: 'Marriage and Family',
        text: 'Rev. Olamide Macauley has been married to Rev. Juliete Campbell for 36 years, since their wedding on 27th January 1990. Their marriage has been a partnership built on faith, family, and service, blessed with three children and four grandchildren. His marriage to Rev. Juliete holds particular significance, as she played an important role in his journey to salvation.',
      },
      {
        heading: 'Ministry and Leadership',
        text: 'Rev. Macauley currently serves as the Main Pastor of the Headquarters Church, providing spiritual oversight and pastoral leadership to the congregation. His responsibilities extend beyond the Headquarters Church to the wider ministry, working closely with the General Overseer to provide oversight to the ministry\'s various branches — receiving reports, assisting with administration, and supporting day-to-day operations. He also works with the ministry\'s various departments, helping ensure their activities are properly coordinated in accordance with the vision and structure of the ministry, combining both spiritual and administrative leadership.',
      },
      {
        heading: 'A Life of Service',
        text: 'Rev. Macauley\'s journey from an Engineering student at Fourah Bay College to a pastor and ministry leader is one marked by growth, responsibility, and service. His professional and academic background has complemented his ministry responsibilities, particularly in organisation, administration, and problem-solving, as he continues working alongside the General Overseer to ensure the ministry\'s branches, departments, and activities function effectively.',
      },
      {
        heading: 'Legacy',
        text: 'Rev. Olamide Macauley\'s life reflects a man who has embraced many roles across the years — student, engineer in training, husband, father, grandfather, pastor, and ministry leader. His 36 years of marriage, three children, four grandchildren, academic achievements, encounter with Christ, and years of ministry service form important parts of his story, one that testifies to the transformative power of an encounter with Christ and to remaining faithful to one\'s calling through every season of life.',
      },
      {
        heading: 'His Philosophy',
        text: '"You cannot choose your valley, but you can choose what you do in the valley." This reflects Rev. Macauley\'s perspective on life\'s challenges and personal responsibility — acknowledging that difficult seasons are sometimes unavoidable, but how a person responds to them remains a choice. It is a message of faith, resilience, perseverance, and hope.',
      },
    ],
  },
}
