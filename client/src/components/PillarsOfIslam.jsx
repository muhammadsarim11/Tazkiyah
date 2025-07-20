import { useState } from "react";
import { FaKaaba, FaArrowLeft, FaPrayingHands, FaCoins, FaMoon, FaHeart } from "react-icons/fa";

const pillarsOfIslam = [
  {
    id: 1,
    name: "Shahada",
    arabic: "الشهادة",
    title: "Declaration of Faith",
    icon: "☪️",
    shortDesc: "The testimony that there is no god but Allah and Muhammad is His messenger.",
    fullDescription: `The Shahada is the first and most fundamental pillar of Islam. It is the declaration of faith that serves as the foundation for all Islamic beliefs and practices.

The Complete Shahada:
"أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله"
"Ashhadu an la ilaha illa Allah, wa ashhadu anna Muhammadan rasul Allah"
"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah."

Two Parts of Shahada:
1. La ilaha illa Allah (There is no god but Allah)
   - Negates all false deities
   - Affirms the oneness and uniqueness of Allah
   - Establishes Tawhid (monotheism)

2. Muhammadan rasul Allah (Muhammad is the messenger of Allah)
   - Acknowledges Muhammad (peace be upon him) as the final prophet
   - Accepts his teachings and guidance
   - Commits to following his example (Sunnah)

Significance:
- Entry point into Islam
- Must be recited with sincere belief
- Forms the basis of all other pillars
- Repeated in daily prayers and remembrance

Requirements for Valid Shahada:
- Knowledge of its meaning
- Certainty without doubt
- Acceptance and submission
- Compliance and action
- Truthfulness and sincerity
- Love and devotion
- Rejection of false worship

The Shahada transforms a person's entire worldview and establishes their relationship with Allah and His final messenger.`
  },
  {
    id: 2,
    name: "Salah",
    arabic: "الصلاة",
    title: "Prayer",
    icon: "🕌",
    shortDesc: "The five daily prayers that connect Muslims directly with Allah.",
    fullDescription: `Salah is the second pillar of Islam and the most important act of worship after the Shahada. It is the direct link between the worshipper and Allah.

The Five Daily Prayers:
1. Fajr (Dawn Prayer) - 2 Rak'ahs
2. Dhuhr (Midday Prayer) - 4 Rak'ahs
3. Asr (Afternoon Prayer) - 4 Rak'ahs
4. Maghrib (Sunset Prayer) - 3 Rak'ahs
5. Isha (Night Prayer) - 4 Rak'ahs

Conditions for Valid Prayer:
- Ritual purity (Wudu or Ghusl)
- Facing the Qibla (direction of Kaaba)
- Proper time for each prayer
- Covering the Awrah (private parts)
- Clean place and clothing

Components of Prayer:
- Takbir (Opening with "Allahu Akbar")
- Recitation of Quran (including Al-Fatiha)
- Ruku (Bowing)
- Sujud (Prostration)
- Tashahhud (Sitting and testimony)
- Taslim (Ending with peace)

Spiritual Benefits:
- Direct communication with Allah
- Purification of the soul
- Remembrance and mindfulness
- Discipline and time management
- Community bonding (congregational prayers)

Physical Benefits:
- Regular exercise and movement
- Improved circulation
- Stress relief and meditation
- Better posture and flexibility

The Prophet (peace be upon him) said: "Prayer is the pillar of religion and whoever abandons it, demolishes the very pillar of religion."`
  },
  {
    id: 3,
    name: "Zakat",
    arabic: "الزكاة",
    title: "Obligatory Charity",
    icon: "💰",
    shortDesc: "The obligatory giving of a portion of wealth to help the poor and needy.",
    fullDescription: `Zakat is the third pillar of Islam, representing the obligatory charity that purifies wealth and helps establish social justice.

Definition and Purpose:
- Literally means "purification" and "growth"
- Purifies the giver's wealth and soul
- Helps the poor and strengthens community bonds
- Reduces inequality and promotes social welfare

Nisab (Minimum Threshold):
- Gold: 87.48 grams (approximately 3 ounces)
- Silver: 612.36 grams (approximately 21 ounces)
- Cash equivalent to the value of gold or silver
- Must be possessed for one full lunar year

Zakat Rate:
- 2.5% (1/40th) of qualifying wealth
- Calculated annually on savings, investments, and business assets
- Separate rates for livestock, agricultural produce, and minerals

Who Must Pay Zakat:
- Adult Muslims who are mentally sound
- Free (not slaves in historical context)
- Possess wealth above the Nisab threshold
- Wealth held for one complete lunar year

Eight Categories of Zakat Recipients (Quran 9:60):
1. Al-Fuqara (The poor)
2. Al-Masakin (The needy)
3. Al-Amilina Alayha (Zakat administrators)
4. Al-Mu'allafatu Qulubuhum (Those whose hearts are to be reconciled)
5. Ar-Riqab (Freeing slaves/captives)
6. Al-Gharimin (Those in debt)
7. Fi Sabilillah (In the cause of Allah)
8. Ibn as-Sabil (Stranded travelers)

Spiritual Benefits:
- Purifies the soul from greed
- Develops empathy for the less fortunate
- Increases gratitude for Allah's blessings
- Brings barakah (blessing) to remaining wealth

Economic Impact:
- Redistributes wealth in society
- Stimulates economic circulation
- Reduces poverty and inequality
- Promotes social stability and cohesion`
  },
  {
    id: 4,
    name: "Sawm",
    arabic: "الصوم",
    title: "Fasting",
    icon: "🌙",
    shortDesc: "Fasting during the month of Ramadan from dawn to sunset.",
    fullDescription: `Sawm (fasting) is the fourth pillar of Islam, primarily observed during the holy month of Ramadan, the ninth month of the Islamic lunar calendar.

Ramadan Fasting:
- Obligatory for all adult, healthy Muslims
- Abstaining from food, drink, and marital relations
- From dawn (Fajr) until sunset (Maghrib)
- 29 or 30 days depending on moon sighting

What Breaks the Fast:
- Eating or drinking intentionally
- Smoking or taking medicine orally
- Marital relations
- Intentional vomiting
- Menstruation or postpartum bleeding

Who is Exempt:
- Children (before puberty)
- Mentally ill individuals
- Pregnant and breastfeeding women
- Travelers on long journeys
- Elderly or chronically ill people
- Those in military combat

Make-up and Compensation:
- Missed days must be made up later
- Those unable to fast may feed the poor (Fidya)
- Intentional breaking requires Kaffarah (major expiation)

Spiritual Dimensions:
- Develops Taqwa (God-consciousness)
- Increases empathy for the hungry and poor
- Enhances self-discipline and willpower
- Promotes spiritual reflection and prayer
- Encourages charity and good deeds

Physical Benefits:
- Detoxification of the body
- Improved metabolism
- Better digestive health
- Enhanced mental clarity
- Potential weight management

Special Practices During Ramadan:
- Suhur (pre-dawn meal)
- Iftar (breaking fast at sunset)
- Tarawih (special night prayers)
- Increased Quran recitation
- I'tikaf (spiritual retreat in mosque)
- Laylat al-Qadr (Night of Power)

Other Types of Fasting:
- Voluntary fasting (Mondays, Thursdays, white days)
- Day of Arafah for non-pilgrims
- Day of Ashura (10th of Muharram)
- Six days of Shawwal after Ramadan

The Prophet (peace be upon him) said: "Whoever fasts Ramadan with faith and seeking reward, his previous sins will be forgiven."`
  },
  {
    id: 5,
    name: "Hajj",
    arabic: "الحج",
    title: "Pilgrimage",
    icon: "🕋",
    shortDesc: "The pilgrimage to Mecca that every Muslim must perform once in their lifetime if able.",
    fullDescription: `Hajj is the fifth and final pillar of Islam, the sacred pilgrimage to the holy city of Mecca that every Muslim must perform at least once in their lifetime if they are physically and financially able.

Obligation and Conditions:
- Obligatory once in a lifetime for able Muslims
- Must be physically healthy and capable
- Must have financial means without causing hardship
- Safe travel route must be available
- Must be of sound mind and adult

Timing:
- Performed during specific days in Dhul-Hijjah (12th Islamic month)
- Main days: 8th-12th of Dhul-Hijjah
- Culminates on the Day of Arafah (9th Dhul-Hijjah)

Essential Rituals of Hajj:
1. Ihram - Entering the sacred state
2. Tawaf al-Qudum - Arrival circumambulation of Kaaba
3. Sa'i - Walking between Safa and Marwah hills
4. Wuquf - Standing at Arafah (most important ritual)
5. Muzdalifah - Overnight stay and prayer
6. Ramy al-Jamarat - Stoning the pillars
7. Qurban - Animal sacrifice
8. Halq/Taqsir - Shaving or cutting hair
9. Tawaf al-Ifadah - Circumambulation after Arafah
10. Tawaf al-Wada - Farewell circumambulation

Types of Hajj:
1. Hajj al-Tamattu - Umrah then Hajj separately
2. Hajj al-Qiran - Umrah and Hajj together
3. Hajj al-Ifrad - Hajj only

Spiritual Significance:
- Represents unity of Muslim Ummah
- Symbolizes equality before Allah
- Purification from sins
- Renewal of faith and commitment
- Following the footsteps of Prophet Ibrahim and Muhammad

Historical Connection:
- Traces back to Prophet Ibrahim (Abraham)
- Commemorates Ibrahim's willingness to sacrifice his son
- Celebrates Hajar's search for water (Sa'i)
- Continues the tradition of Prophet Muhammad's farewell pilgrimage

Physical and Emotional Journey:
- Tests of patience, endurance, and devotion
- Overcrowding and physical challenges
- Emotional and spiritual transformation
- Sense of global Muslim brotherhood
- Life-changing experience for most pilgrims

Benefits and Rewards:
- Complete forgiveness of sins if performed correctly
- Spiritual purification and renewal
- Enhanced God-consciousness
- Greater appreciation for Islamic values
- Strengthened connection with global Muslim community

The Prophet (peace be upon him) said: "Whoever performs Hajj for the sake of Allah and does not commit any obscenity or transgression, he returns as pure as the day his mother gave birth to him."`
  }
];

export default function PillarsOfIslam() {
  const [selectedPillar, setSelectedPillar] = useState(null);

  const handlePillarClick = (pillar) => {
    setSelectedPillar(pillar);
  };

  const handleBackClick = () => {
    setSelectedPillar(null);
  };

  if (selectedPillar) {
    return (
      <div className="p-4 sm:p-6">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-green-600 hover:text-green-800 mb-6 transition-colors"
        >
          <FaArrowLeft size={16} />
          <span>Back to Pillars</span>
        </button>

        {/* Pillar Detail */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{selectedPillar.icon}</div>
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              {selectedPillar.name}
            </h2>
            <p className="text-xl text-green-600 mb-2" dir="rtl">
              {selectedPillar.arabic}
            </p>
            <p className="text-lg text-green-700 font-medium">
              {selectedPillar.title}
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-green max-w-none">
            <div className="text-green-800 leading-relaxed whitespace-pre-line">
              {selectedPillar.fullDescription}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">🕋 Pillars of Islam</h2>
        <p className="text-green-600 italic text-sm">"Islam is built on five pillars..." - Hadith of Prophet Muhammad (peace be upon him)</p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-3">The Foundation of Islamic Faith</h3>
          <p className="text-green-700 text-sm leading-relaxed">
            The Five Pillars of Islam are the foundation of Muslim life and practice. They represent the core beliefs and acts of worship that define a Muslim's relationship with Allah and the community.
          </p>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {pillarsOfIslam.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => handlePillarClick(pillar)}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            {/* Pillar Icon */}
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {pillar.name}
              </h3>
              <p className="text-lg text-green-600 mb-2" dir="rtl">
                {pillar.arabic}
              </p>
              <p className="text-sm text-green-700 font-medium mb-3">
                {pillar.title}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-green-600 text-sm text-center leading-relaxed">
              {pillar.shortDesc}
            </p>

            {/* Click indicator */}
            <div className="mt-4 text-center">
              <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full">
                Click to learn more
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Inspiration */}
      <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
        <p className="text-green-700 italic text-sm mb-2">
          "And establish prayer and give zakah and bow with those who bow." - Quran 2:43
        </p>
        <p className="text-green-600 text-xs">
          May Allah grant us the strength to uphold all pillars of Islam with sincerity and devotion.
        </p>
      </div>
    </div>
  );
}