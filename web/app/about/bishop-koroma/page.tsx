import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Bishop Dr. Frederick Abu Sidique Koroma — Founder & General Overseer',
  description:
    "Full biography of Bishop Dr. Frederick Abubakarr Sidique Sulaiman Koroma, Founder and General Overseer of Flaming Evangelical Ministries International in Freetown, Sierra Leone — his call to ministry, church planting across West Africa and beyond, and decades of Christian leadership.",
}

const H2: React.CSSProperties = { fontSize: 20, marginTop: 40, marginBottom: 14, color: 'var(--navy)' }
const H3: React.CSSProperties = { fontSize: 16, marginTop: 26, marginBottom: 10, color: 'var(--crimson)' }
const P: React.CSSProperties = { lineHeight: 1.85, maxWidth: 720, color: 'var(--gray)', marginBottom: 14, fontSize: 14.5 }
const QUOTE: React.CSSProperties = {
  fontFamily: 'var(--font-fraunces)',
  fontStyle: 'italic',
  color: 'var(--crimson)',
  fontSize: 16,
  lineHeight: 1.7,
  maxWidth: 640,
  margin: '10px 0',
}

export default function BishopKoromaPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Bishop Dr. Frederick Koroma' }]} />

      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', width: 96, height: 96, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--gold-light)' }}>
          <Image src="/about/bishop-solo.png" alt="Bishop Dr. Frederick Abu Sidique Koroma" fill style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ color: 'var(--gold-light)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
            Founder &amp; General Overseer
          </div>
          <h1 style={{ color: '#fff', fontSize: 26 }}>Bishop Dr. Frederick Abubakarr Sidique Sulaiman Koroma</h1>
          <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14 }}>Flaming Evangelical Ministries International — Freetown, Sierra Leone</p>
        </div>
      </div>

      <div className="section">
        <p style={P}>
          Bishop Dr. Frederick Abubakarr Sidique Sulaiman Koroma is the Founder and General Overseer of Flaming
          Evangelical Ministries International, headquartered in Freetown, Sierra Leone. For more than four
          decades he has devoted his life to preaching the Gospel of Jesus Christ, evangelism, pastoral
          leadership, church development, mentorship, humanitarian service, and the advancement of the Kingdom
          of God. His journey from a young man who encountered Christ in 1979 to an internationally recognised
          Christian leader is a testimony of faith, discipline, perseverance, sacrifice, vision, and service.

        </p>

        <h2 style={H2}>Early Life and Background</h2>
        <p style={P}>
          Bishop Koroma was born in 1961 in Congo Town, Freetown, Sierra Leone. He was born into a Muslim
          family, with both parents ardent Muslims, and his early upbringing came from that Muslim cultural
          background before his life took a decisive spiritual direction. The name &ldquo;Frederick&rdquo; was
          adopted later in life for social validation.
        </p>
        <p style={P}>
          He began his education at Good Shepherd School in Congo Town for kindergarten, then attended Congo
          Town Municipal School and later Syke Street Municipal School. After sitting the Common Entrance
          Examination he was admitted to Sierra Leone Grammar School, and later transferred to Magburaka
          Government School for Boys, where he continued his secondary education.
        </p>

        <h2 style={H2}>Higher Education</h2>
        <p style={P}>
          Bishop Koroma attended Fourah Bay College, University of Sierra Leone, studying Political Science,
          History, and Biblical Religious Studies, and graduated in 1988 with a Bachelor&apos;s degree in
          Political Science. He later pursued a Master&apos;s degree in Leadership from Commonwealth University
          London, United Kingdom, and his academic and ministerial contributions have also been recognised
          through several honorary doctoral degrees from institutions around the world.
        </p>

        <h2 style={H2}>His Encounter with Christ</h2>
        <p style={P}>
          Bishop Koroma&apos;s life changed profoundly in December 1979, when he gave his life to Jesus Christ.
          Having grown up in a Muslim household, his conversion marked a significant transformation — an
          encounter he describes as immediate and powerful, producing an intense and growing hunger for God.
          He went on to serve as a Youth President, then a Sunday School Teacher, and eventually Associate
          Pastor. As a young believer he engaged in door-to-door evangelism across communities including Congo
          Town, Tengbeh Town, and Murray Town, as well as evangelising in hospitals.
        </p>

        <h2 style={H2}>The Call to Ministry</h2>
        <p style={P}>
          His early Christian life was marked by evangelism, prayer, fasting, Bible study, and a growing
          commitment to God&apos;s work. For him, ministry was never simply about holding a title — it required
          consecration, purity, discipline, sacrifice, and an enduring fear of God. Prayer, retreats, fasting,
          and waiting upon God remain central to his life and ministry, alongside a strong emphasis on studying
          Scripture deeply rather than merely reading it to prepare a sermon.
        </p>

        <h2 style={H2}>Flaming Evangelical Ministries International</h2>
        <p style={P}>
          What began as a thought in Bishop Koroma&apos;s heart has developed into an international ministry
          with churches and ministry expressions across Sierra Leone and several countries around the world.
          More than 100 Flaming churches have been planted across Sierra Leone, with branches and sister
          churches established in Liberia, The Gambia, Côte d&rsquo;Ivoire, Ghana, Britain, the United States of
          America, Italy, Jamaica, and Australia, with expansion into further countries ongoing.
        </p>
        <p style={P}>
          Under his leadership, the Ministry has developed beyond conventional church structures, operating or
          having established primary and secondary schools, a community clinic, a radio station, and an
          orphanage, with plans identified for a youth empowerment centre and a television station. Bishop
          Koroma attributes this development chiefly to the sacrificial giving of members of the congregation,
          and consistently emphasises self-reliance, stewardship, and collective sacrifice.
        </p>

        <h2 style={H2}>International Ministry and Evangelism</h2>
        <p style={P}>
          Bishop Koroma&apos;s preaching ministry has extended across Africa, Europe, North America, Australia,
          and other regions, participating in crusades, conferences, evangelistic programmes, leadership
          meetings, and ministry activities across nations — with a consistent emphasis on reaching people who
          have not yet encountered the Gospel.
        </p>

        <h3 style={H3}>Strategic Evangelistic Network</h3>
        <p style={P}>
          Bishop Koroma is President and Chairperson of the Strategic Evangelistic Network (SEN), an umbrella
          body of more than 150 independent churches and ministries in Sierra Leone and beyond, bringing
          together ministers from different denominations for open-air crusades, evangelistic campaigns,
          ministry conferences, and empowerment seminars. Through SEN, he and other ministers have conducted
          crusades across Sierra Leone and West Africa — including The Gambia, Liberia, Guinea, Ghana, and
          Nigeria — as well as in Kenya, with gatherings ranging from fewer than 1,000 to more than 50,000
          people at a single meeting. He previously served as the first interim President of the Pentecostal
          Fellowship of Sierra Leone (PFSL).
        </p>

        <h3 style={H3}>A Passion for Souls</h3>
        <p style={P}>
          At the heart of Bishop Koroma&apos;s ministry is a passion for souls. For him, evangelism is not
          simply about gathering large crowds — it is about seeing Christ formed in people&apos;s lives and
          helping believers walk in consecration and become productive in the Kingdom, with a vision that
          extends to reaching the unreached until the return of Christ.
        </p>

        <h2 style={H2}>Ministry Philosophy</h2>
        <p style={P}>
          Bishop Koroma identifies several principles that have shaped his ministry and leadership:
          <strong> Consecration</strong> — a life dedicated to God, marked by purity and reverence for the
          Lord; <strong> Prayer</strong> — regular prayer, retreats, and fasting as essential to spiritual
          strength; <strong> the Word of God</strong> — the conviction that ministers must study Scripture
          deeply, and that every prophecy, vision, or revelation must be measured against it, regardless of how
          charismatic or celebrated a preacher may be; <strong> Waiting on God</strong> — patience and trust in
          God&apos;s timing over instant success; <strong> Planning</strong> — captured in his mantra,
          &ldquo;Proper planning prevents poor performance&rdquo;; and <strong> Mentorship</strong> — the belief
          that younger ministers should learn character, discipline, wisdom, and spiritual values from those
          who mentor them, not merely the visible benefits of ministry.
        </p>
        <p style={QUOTE}>&ldquo;You don&apos;t look for the hand of your mentor; you look for his heart.&rdquo;</p>

        <h2 style={H2}>His Philosophy on Success</h2>
        <p style={P}>
          Bishop Koroma believes success means different things to different people, and in ministry it should
          be measured by more than numbers, buildings, or recognition — defining it instead as the ability to
          achieve one&apos;s goals and leave a legacy for future generations. Genuine success, he teaches, does
          not happen overnight; just as a person climbing a ladder must begin at the first rung, meaningful
          achievement develops gradually and requires a price to be paid.
        </p>
        <p style={QUOTE}>&ldquo;Success without a successor is failure turned upside down.&rdquo;</p>

        <h2 style={H2}>Vision, Hard Work and Perseverance</h2>
        <p style={P}>
          Bishop Koroma teaches that every major achievement begins with a thought and a vision — conceived in
          the mind, shared with others, spoken into reality through prayer, and developed through positive
          thinking, faith, confession, hard work, honesty, and action. His formula for success: Positive
          Thoughts + Positive Belief × Great Vision + Positive Confession × Hard Work and Honesty.
        </p>

        <h2 style={H2}>Marriage and Family Life</h2>
        <p style={P}>
          Bishop Koroma met Rev. Dr. Lady Patricia Koroma in 1988 when he went to preach at a church where she
          was present. He recalls that she was quiet and reserved, and believed he had found someone with whom
          he could share his vision, passion, and sentiments. Lady Patricia later attended his Bible School,
          where he provided her with a scholarship, and their relationship developed into his proposal of
          marriage. On 6 October 1990, Bishop Frederick Koroma and Lady Patricia were joined together in Holy
          Matrimony. They are blessed with a son, Joseph Garber-Koroma.
        </p>

        <h2 style={H2}>Mentorship and Generational Impact</h2>
        <p style={P}>
          One of the most significant aspects of Bishop Koroma&apos;s ministry is the number of people who
          describe him as a spiritual father and mentor. Pastors, evangelists, apostles, professionals, and
          members of the wider Christian community have testified to his influence on their personal,
          spiritual, educational, and professional development — from finding employment and accommodation to
          being mentored in ministry and prayed for throughout their lives, with many progressing from humble
          positions within his ministry into pastoral and apostolic leadership.
        </p>

        <h2 style={H2}>Authorship</h2>
        <p style={P}>
          Bishop Koroma is also a prolific writer, having authored three books: <em>Exposing and Destroying the
          Dark Satanic Kingdom</em>, <em>The Secret of a Happy Marriage</em>, and <em>Home Sweet Home</em>.
          Through his writing, as with his preaching, he addresses spiritual warfare, Christian living,
          marriage, family, and the practical application of biblical principles.
        </p>

        <h2 style={H2}>National and International Recognition</h2>
        <p style={P}>
          Bishop Koroma&apos;s religious leadership, philanthropy, community service, and international
          ministry have received considerable recognition, including:
        </p>
        <ul style={{ ...P, paddingLeft: 20, listStyle: 'disc' }}>
          <li>Order of the Rokel, 2011 — awarded by former President Dr. Ernest Bai Koroma</li>
          <li>Texas Recognition, 11 July 2013 — Council of Texas, the Senate, the Mayor, and former Governor Rick Perry</li>
          <li>Australia Recognition, 2013 — from government representatives and Members of Parliament in Perth</li>
          <li>Outstanding Godly Visionary Leadership, 2016 — Board and Membership of Flaming Evangelical Ministries</li>
          <li>100 Most Influential Sierra Leoneans, 2016 — Sierra Ovation</li>
          <li>Patriarchal Award, 2018 — from Archbishops in South Africa</li>
          <li>Africa Achievers Award for Leadership and Philanthropy, 2019</li>
          <li>Outstanding Public Leadership Award, 2019 — African Consultant Group</li>
          <li>Youth Empowerment Award — Nyame Adom Enterprises</li>
          <li>Social Justice Award, 2023 — Hero&apos;s Magazine</li>
          <li>Certificate of Good Reputation, 2024 — African Achievers Award, UK House of Commons</li>
          <li>Special Recognition for Faith and Commitment, 2024 — City of Dallas, Texas, and Council Member Dwaine R. Caraway</li>
        </ul>

        <h3 style={H3}>Honorary Doctorates and Academic Recognition</h3>
        <ul style={{ ...P, paddingLeft: 20, listStyle: 'disc' }}>
          <li>Doctor of Humanities, Honoris Causa — Commonwealth University, United Kingdom, 2017</li>
          <li>Doctor of Divinity, Honoris Causa — Saint Thomas Christian University, Florida, USA, 2018</li>
          <li>Doctorate in Public Administration, Honoris Causa — West Africa Institute for Public Administration, Ghana</li>
          <li>Doctor of Divinity, Honoris Causa — IATA, India</li>
          <li>Master&apos;s degree in Leadership — Commonwealth University London, United Kingdom</li>
        </ul>

        <h2 style={H2}>Legacy</h2>
        <p style={P}>
          Bishop Koroma describes his legacy as the footprint he hopes to leave behind — that a man called
          Bishop Abu Koroma lived and preached the Gospel with conviction and without compromise. His
          understanding of legacy is deeply connected to the ministers who came before him, whose lives of
          prayer, fasting, consecration, and dedication influenced his own walk with God, and he now seeks to
          pass those same values to the generation that follows him. His legacy is found not only in the
          churches he has planted or the institutions he has helped establish, but in the people he has
          mentored, the ministers he has raised, the souls reached through evangelism, and the families and
          communities touched by his ministry.
        </p>

        <h2 style={H2}>Quotable Quotes</h2>
        <p style={QUOTE}>
          &ldquo;Divine intervention is when divinity steps into the calamity of humanity to bring serenity,
          stability and tranquility.&rdquo;
        </p>
        <p style={QUOTE}>&ldquo;Adversity is the University God takes us through to prove our love and tenacity.&rdquo;</p>
        <p style={QUOTE}>&ldquo;The success of a man is as a result of the quality of men around his life.&rdquo;</p>
        <p style={QUOTE}>&ldquo;The ambition of a man is not known unless he is allowed to function in that capacity.&rdquo;</p>
        <p style={QUOTE}>&ldquo;If you do not update your Christian life you will become outdated.&rdquo;</p>

        <div style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/about/patricia-koroma" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}>
            Read Rev. Dr. Lady Patricia Koroma&apos;s biography →
          </Link>
          <Link href="/about" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}>
            ← Back to About
          </Link>
        </div>
      </div>
    </main>
  )
}
