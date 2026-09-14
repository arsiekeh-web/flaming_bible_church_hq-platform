import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Rev. Dr. Lady Patricia Koroma — General Overseer & Host of Reverence',
  description:
    'Full biography of Rev. Dr. Lady Patricia Koroma, General Overseer of Flaming Evangelical Ministries International and host of Reverence — her life, ministry, the Flames of Fire Women\'s Network, and her heart for vulnerable children in Freetown, Sierra Leone.',
}

const H2: React.CSSProperties = { fontSize: 20, marginTop: 40, marginBottom: 14, color: 'var(--navy)' }
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

export default function PatriciaKoromaPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'About', href: '/about' }, { label: 'Rev. Dr. Lady Patricia Koroma' }]} />

      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', width: 96, height: 96, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--gold-light)' }}>
          <Image src="/about/patricia-solo.png" alt="Rev. Dr. Lady Patricia Koroma" fill style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ color: 'var(--gold-light)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
            General Overseer &middot; Host of Reverence
          </div>
          <h1 style={{ color: '#fff', fontSize: 26 }}>Rev. Dr. Lady Patricia Koroma</h1>
          <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14 }}>Flaming Evangelical Ministries International — Freetown, Sierra Leone</p>
        </div>
      </div>

      <div className="section">
        <h2 style={H2}>Background and Early Life</h2>
        <p style={P}>
          Reverend Dr. Lady Patricia Koroma was born in Freetown, Sierra Leone, at Charles Street and later
          grew up at Sumner Street, off Benjamin Lane. She is the youngest of six children, born into a family
          of four boys and two girls. Her late father worked as a dispenser, while her late mother worked as a
          receptionist for the Government of Sierra Leone and other government institutions. As the youngest
          child, Lady Patricia describes her childhood as a happy one — fun loving, enjoyed singing, and known
          to be somewhat mischievous.
        </p>

        <h2 style={H2}>Education</h2>
        <p style={P}>
          Lady Patricia began her education at Central Nursery School before proceeding to Tower Hill Municipal
          School for her primary education, and later attended the Freetown Secondary School for Girls (FSSG)
          for her secondary education. She developed an interest in Reading, Mathematics, Biology, and Art, and
          demonstrated a natural talent for drawing and carving — abilities recognised and encouraged by her
          school principal, the late Mrs. Blake, who displayed some of her drawings and carvings in her office.
          Lady Patricia did not proceed to college, as her life took a different direction after she met the
          man who would later become her husband.
        </p>

        <h2 style={H2}>Faith and Spiritual Journey</h2>
        <p style={P}>
          Lady Patricia was raised in the Catholic faith, and in her younger years admired the devotion of
          Catholic nuns, at one point desiring to become one herself. Her spiritual journey eventually led her
          to accept Christ at the Way of Truth Church. Wanting to grow deeper in her faith, she enrolled at the
          Flaming Bible Centre, a Bible school established by Bishop Dr. Frederick Abu Sidique Koroma and three
          other pastors — a season that became a significant turning point, ultimately leading her toward
          Christian ministry and marriage.
        </p>

        <h2 style={H2}>Meeting Bishop Frederick Abu Sidique Koroma</h2>
        <p style={P}>
          Lady Patricia met Bishop Dr. Frederick Abu Sidique Koroma when she was twenty years old, while
          attending the Flaming Bible Centre to strengthen her Christian faith. During her third year at the
          Bible school, Bishop Koroma proposed to her. She was initially hesitant, concerned about how people
          would react to her dating the pastor of the Bible school, but after prayer and encouragement from a
          pastor friend, Pastor Michael, she accepted his proposal. Looking back, Lady Patricia believes that
          God was directing their relationship — Bishop Koroma had been praying for a life partner when they
          met, and she believes their union was part of God&apos;s plan.
        </p>

        <h2 style={H2}>Marriage</h2>
        <p style={P}>
          Lady Patricia and Bishop Dr. Frederick Abu Sidique Koroma were married on 6 October 1990. Their early
          years were challenging — they began married life with very limited financial resources, living in a
          modest single room and parlour with outside amenities, at times struggling to meet basic needs.
          Despite this, Lady Patricia remained committed to her husband and their marriage, entering it with an
          open mind and a sincere heart, standing alongside him as he pursued his calling. The couple engaged
          in small businesses to make ends meet — selling fish, kerosene, ginger beer, blocks of ice, and Kool
          Aid popsicles — experiences that became an important part of their testimony of perseverance, faith,
          sacrifice, and God&apos;s provision.
        </p>

        <h2 style={H2}>Ministry and Service</h2>
        <p style={P}>
          Lady Patricia has played an important role in the ministry alongside her husband, serving as First
          Lady of Flaming Evangelical Ministries. Her involvement has included prayer, counselling,
          encouragement, women&apos;s fellowship, evangelism, and supporting the growth of the church, with
          particular attention to ministering to women and young ladies, encouraging them to remain committed
          to their faith and responsibilities within the ministry. Her approach to ministry emphasises prayer,
          perseverance, discipline, encouragement, and faithfulness to God&apos;s calling.
        </p>

        <h2 style={H2}>Flames of Fire Women&apos;s Network</h2>
        <p style={P}>
          One of Lady Patricia&apos;s significant contributions to women&apos;s ministry is the Flames of Fire
          Women&apos;s Network, launched in 2004 to bring women from Flaming Church branches — locally and
          internationally — together for fellowship, prayer, encouragement, and Kingdom service. Before its
          establishment, women in different branches often worked independently and faced their challenges
          separately; the network created an opportunity for them to unite, fellowship, pray together,
          encourage one another, and participate more effectively in the work of the ministry.
        </p>

        <h2 style={H2}>International Ministry</h2>
        <p style={P}>
          Lady Patricia has travelled extensively with her husband in their ministry work, across countries
          including Ghana, Nigeria, The Gambia, Jamaica, the United Kingdom, the United States of America, and
          Australia — participating in preaching, prayer, revival meetings, deliverance ministry, and
          counselling. Among the experiences she remembers is a healing testimony in Ghana involving a woman
          who was almost blind, who she recounts received her sight following prayer during a revival meeting.
        </p>

        <h2 style={H2}>Compassion for Children and Humanitarian Service</h2>
        <p style={P}>
          Lady Patricia has a deep passion for children, particularly those who have lost one or both parents —
          a compassion that inspired her to establish an initiative supporting vulnerable and orphaned
          children. Land was secured at Marjay Town, Goderich, with the vision of developing an orphanage; in
          the meantime, children are cared for by relatives who have kindly taken them into their homes, with
          Lady Patricia and supporters of the initiative providing monthly feeding allowances, essential
          provisions, school materials, and other necessities. Financial support has come from church members,
          friends, and families living abroad, along with the church where possible — and despite funding
          challenges, particularly during the COVID-19 pandemic, Lady Patricia has remained committed to the
          children&apos;s welfare and education, including a desire to help some of them pursue university
          education.
        </p>

        <h2 style={H2}>Honorary Doctorate</h2>
        <p style={P}>
          In recognition of their service to God and achievements in Christian ministry, Lady Patricia and
          Bishop Koroma were awarded honorary Doctorates in Divinity by St. Thomas Bible School in Florida,
          United States of America. Lady Patricia initially felt overwhelmed by the honour and considered
          declining it, but after encouragement from her husband, accepted the recognition with gratitude to
          God.
        </p>

        <h2 style={H2}>Marriage and Family Life</h2>
        <p style={P}>
          Lady Patricia and Bishop Koroma celebrated their 30th Pearl Wedding Anniversary on 6 October 2020.
          After three decades of marriage, Lady Patricia attributes the strength and longevity of their union
          to faith in God, trust, openness, communication, commitment, and mutual love. She acknowledges that
          ministry places significant demands on family life, particularly given Bishop Koroma&apos;s busy
          schedule, yet the couple has continued to make time for one another and remained committed to their
          marriage. Lady Patricia strongly believes in building a marriage on God&apos;s Word, maintaining open
          communication, choosing friendships wisely, and creating an environment where both husband and wife
          feel loved and appreciated.
        </p>

        <h2 style={H2}>Her Philosophy on Life and Ministry</h2>
        <p style={P}>
          A central theme of Lady Patricia&apos;s testimony is perseverance — the importance of remaining
          faithful through difficult seasons and trusting God for provision and breakthrough. Her journey from
          humble beginnings, through challenging early years of marriage, to decades of ministry and service
          reflects her belief that people should not only look at the glory they see but also understand the
          story behind it. Her experiences have shaped her into a woman who encourages others, particularly
          women and young people, to remain committed to God, persevere through difficulties, and continue
          pressing towards their calling.
        </p>

        <h2 style={H2}>The Face of Reverence</h2>
        <p style={P}>
          Reverend Dr. Lady Patricia Koroma serves as the Face and Host of{' '}
          <Link href="/events/reverence" style={{ color: 'var(--crimson)', fontWeight: 600 }}>Reverence</Link>,
          the Ministry&apos;s annual worship celebration. According to Bishop Koroma, she was entrusted with
          this vision because of her deep and personal passion for worship, evident throughout her life
          including her private moments of devotion. Bishop Koroma describes her as a true worshipper whose
          passion and commitment make her uniquely suited to carry the vision of Reverence forward.
        </p>
        <p style={QUOTE}>
          &ldquo;With Reverence, we worship God. We create an atmosphere where we can worship God in spirit
          and in truth — not something born out of mechanical nature, but something born out of a genuine
          desire of worship.&rdquo;
        </p>

        <h2 style={H2}>Legacy and Impact</h2>
        <p style={P}>
          Reverend Dr. Lady Patricia Koroma&apos;s life and ministry represent a journey of faith, sacrifice,
          perseverance, service, and commitment to God&apos;s work. Through her role as a wife, mother,
          minister, women&apos;s leader, counsellor, and advocate for vulnerable children, she has contributed
          significantly to the work of Flaming Evangelical Ministries and the wider Christian community. Her
          legacy is ultimately one of faithfulness, love, perseverance, service, and an unwavering commitment
          to God and His people.
        </p>

        <div style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/about/bishop-koroma" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}>
            Read Bishop Dr. Frederick Koroma&apos;s biography →
          </Link>
          <Link href="/events/reverence" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}>
            See Reverence →
          </Link>
          <Link href="/about" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 14 }}>
            ← Back to About
          </Link>
        </div>
      </div>
    </main>
  )
}
