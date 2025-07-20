import { useState } from "react";
import { FaCrown, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const khulfaRashideen = [
  {
    id: 1,
    name: "Abu Bakr As-Siddiq",
    arabic: "أبو بكر الصديق",
    title: "As-Siddiq (The Truthful)",
    period: "632-634 CE (11-13 AH)",
    achievements: "Compiled the Quran, Ridda Wars",
    shortDesc: "The first Caliph and closest companion of Prophet Muhammad (peace be upon him).",
    fullBiography: `Abu Bakr As-Siddiq (may Allah be pleased with him) was the first Caliph of Islam and the closest companion of Prophet Muhammad (peace be upon him).

Early Life and Conversion:
- Born as Abdullah ibn Abi Quhafa in 573 CE in Mecca
- Was a wealthy merchant known for his honesty and integrity
- Among the first to accept Islam when the Prophet invited him
- Never worshipped idols even before Islam

Companionship with the Prophet:
- The only companion to accompany the Prophet during Hijra
- Mentioned in the Quran: "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Mecca] as one of two, when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.'" (Quran 9:40)
- Known for his unwavering faith and support

Caliphate (632-634 CE):
- Became Caliph after the Prophet's death through consultation
- Faced the challenge of Ridda (apostasy) wars
- Successfully maintained unity of the Muslim state
- Initiated the compilation of the Quran into a single book

Major Achievements:
- Compilation of the Quran under Zaid ibn Thabit
- Defeated false prophets and apostate tribes
- Expanded Islamic state into Iraq and Syria
- Established the foundation for future conquests

Character and Legacy:
- Known for his humility despite being the most powerful man
- Continued his simple lifestyle as Caliph
- Famous for his emotional recitation of the Quran
- Died in 634 CE, having ruled for only 2 years and 3 months

His famous words: "I have been given the authority over you, and I am not the best of you. If I do well, help me; and if I do wrong, set me right."`
  },
  {
    id: 2,
    name: "Umar ibn Al-Khattab",
    arabic: "عمر بن الخطاب",
    title: "Al-Faruq (The Criterion)",
    period: "634-644 CE (13-23 AH)",
    achievements: "Expanded empire, established administrative system",
    shortDesc: "The second Caliph who greatly expanded the Islamic empire and established its administrative foundations.",
    fullBiography: `Umar ibn Al-Khattab (may Allah be pleased with him) was the second Caliph of Islam, known for his justice, administrative genius, and military conquests.

Early Life and Conversion:
- Born in 584 CE in Mecca into the Banu Adi clan
- Initially opposed Islam and was known for his strength and courage
- Converted to Islam in 616 CE after hearing Quranic verses
- His conversion strengthened the Muslim community significantly

Conversion Story:
- Set out to kill the Prophet but learned his sister had converted
- Heard Surah Ta-Ha being recited at his sister's house
- The beauty of the Quran touched his heart
- Immediately went to the Prophet and declared his faith

Caliphate (634-644 CE):
- Became Caliph after Abu Bakr's nomination
- Expanded the Islamic empire to unprecedented levels
- Conquered Persia, Egypt, and large parts of Byzantine Empire
- Established the Islamic calendar starting from Hijra

Administrative Genius:
- Created the Diwan (government departments)
- Established a pension system for Muslims
- Built roads, canals, and rest houses
- Introduced regular salaries for government officials

Justice and Character:
- Famous for his justice regardless of social status
- Would patrol the streets at night to check on his people
- Lived a simple life despite ruling a vast empire
- Known for his fear of Allah and accountability

Major Conquests:
- Jerusalem (638 CE) - personally received the keys
- Egypt under Amr ibn al-As
- Persia under Sa'd ibn Abi Waqqas
- Established Islamic rule from Spain to Central Asia

Martyrdom:
- Assassinated in 644 CE by Abu Lu'lu'a, a Persian slave
- Died after 3 days, having ruled for 10 years
- Buried next to the Prophet and Abu Bakr

His famous saying: "I fear the day when people will say 'Umar said this' and leave what Allah and His Messenger said."`
  },
  {
    id: 3,
    name: "Uthman ibn Affan",
    arabic: "عثمان بن عفان",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    period: "644-656 CE (23-35 AH)",
    achievements: "Standardized the Quran, Naval expansion",
    shortDesc: "The third Caliph who standardized the Quran and expanded the Islamic navy.",
    fullBiography: `Uthman ibn Affan (may Allah be pleased with him) was the third Caliph of Islam, known for standardizing the Quran and his generosity.

Early Life and Conversion:
- Born in 576 CE in Mecca into the wealthy Umayyad clan
- Was a successful merchant before Islam
- Converted to Islam through Abu Bakr's invitation
- Among the early converts to Islam

Title "Dhun-Nurayn":
- Married two daughters of Prophet Muhammad (peace be upon him)
- First married Ruqayyah, then after her death, married Umm Kulthum
- Called "Possessor of Two Lights" for this honor
- No other man was given this distinction

Generosity and Sacrifice:
- Financed the Muslim army during difficult times
- Bought the well of Rumah and made it public for Muslims
- Equipped the army for the Tabuk expedition
- Known for his immense charity and generosity

Caliphate (644-656 CE):
- Became Caliph through consultation after Umar's assassination
- Continued the expansion of the Islamic empire
- Conquered Cyprus, Rhodes, and parts of North Africa
- Established the first Islamic navy

Standardization of the Quran:
- Noticed differences in Quranic recitation across the empire
- Ordered the compilation of a standard Quranic text
- Distributed official copies to major cities
- Ordered the burning of variant texts to prevent confusion

Challenges and Trials:
- Faced internal opposition and accusations of nepotism
- Rebels besieged his house in Medina
- Refused to use force against Muslims
- Chose to endure rather than cause Muslim bloodshed

Martyrdom:
- Killed in 656 CE while reading the Quran
- His blood fell on the verse: "And Allah will suffice you against them"
- Died at the age of 82 after 12 years of Caliphate
- His martyrdom led to the first major fitna (trial) in Islam

Legacy:
- Preserved the Quran in its final form
- Expanded the Islamic empire significantly
- Known for his piety, generosity, and patience
- His sacrifice prevented greater bloodshed among Muslims`
  },
  {
    id: 4,
    name: "Ali ibn Abi Talib",
    arabic: "علي بن أبي طالب",
    title: "Al-Murtada (The Chosen One)",
    period: "656-661 CE (35-40 AH)",
    achievements: "Preserved Islamic unity, Known for justice and knowledge",
    shortDesc: "The fourth Caliph, cousin and son-in-law of Prophet Muhammad, known for his knowledge and bravery.",
    fullBiography: `Ali ibn Abi Talib (may Allah be pleased with him) was the fourth and final Rightly Guided Caliph, known for his knowledge, bravery, and justice.

Early Life and Relationship with the Prophet:
- Born in 601 CE in Mecca, cousin of Prophet Muhammad
- First male to accept Islam at a young age
- Raised in the Prophet's household from childhood
- Married Fatimah, the Prophet's daughter

Bravery and Devotion:
- Slept in the Prophet's bed during Hijra, risking his life
- Carried the Prophet's banner in most battles
- Known for his exceptional courage in combat
- Never turned his back in any battle

Knowledge and Wisdom:
- Called "Bab Madinat al-Ilm" (Gate to the City of Knowledge)
- The Prophet said: "I am the city of knowledge and Ali is its gate"
- Known for his deep understanding of Islamic law
- Famous for his eloquent speeches and wise judgments

Caliphate (656-661 CE):
- Became Caliph after Uthman's assassination
- Faced immediate challenges and civil wars (Fitna)
- Fought the Battle of the Camel against Aisha and others
- Faced Muawiya in the Battle of Siffin

Challenges During Caliphate:
- Inherited a divided Muslim community
- Dealt with the Kharijites who opposed his arbitration
- Struggled to maintain unity while upholding justice
- Faced political opposition from various factions

Justice and Character:
- Known for his unwavering commitment to justice
- Treated all people equally regardless of status
- Famous saying: "Be an enemy of the oppressor and a helper of the oppressed"
- Lived a simple life despite being the Caliph

Martyrdom:
- Assassinated in 661 CE by Ibn Muljam, a Kharijite
- Struck with a poisoned sword while praying in Kufa mosque
- Died two days later at the age of 63
- His last words emphasized forgiveness and justice

Legacy:
- Preserved Islamic principles during turbulent times
- His speeches and sayings compiled in "Nahj al-Balagha"
- Revered for his knowledge, piety, and justice
- His descendants (Ahl al-Bayt) hold special place in Islamic history

His famous saying: "Your remedy is within you, but you do not sense it. Your sickness is from you, but you do not perceive it."`
  }
];

export default function KhulfaRashideen() {
  const [selectedCaliph, setSelectedCaliph] = useState(null);

  const handleCaliphClick = (caliph) => {
    setSelectedCaliph(caliph);
  };

  const handleBackClick = () => {
    setSelectedCaliph(null);
  };

  if (selectedCaliph) {
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 transition-colors"
        >
          <FaArrowLeft size={16} />
          <span>Back to Khulfa-e-Rashideen</span>
        </button>

        {/* Caliph Details */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-800 mb-4 flex items-center gap-3">
              <FaCrown className="text-green-600" />
              {selectedCaliph.name}
            </h1>
            
            {/* Caliph Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-green-700">
                <span className="font-medium">Arabic:</span>
                <span className="text-lg" dir="rtl">{selectedCaliph.arabic}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <FaHeart size={16} />
                <span className="font-medium">Title:</span>
                <span>{selectedCaliph.title}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <FaCalendarAlt size={16} />
                <span className="font-medium">Period:</span>
                <span>{selectedCaliph.period}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <span className="font-medium">Key Achievements:</span>
                <span>{selectedCaliph.achievements}</span>
              </div>
            </div>
          </div>

          {/* Full Biography */}
          <div className="prose prose-green max-w-none">
            <div className="bg-white rounded-lg p-6 border border-green-100">
              <div className="whitespace-pre-line text-green-800 leading-relaxed">
                {selectedCaliph.fullBiography}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 flex items-center justify-center gap-3">
          <FaCrown className="text-green-600" />
          Khulfa-e-Rashideen
        </h2>
        <p className="text-green-600 max-w-2xl mx-auto">
          The four Rightly Guided Caliphs who led the Muslim community after Prophet Muhammad (peace be upon him). 
          Learn about their leadership, achievements, and lasting contributions to Islam.
        </p>
      </div>

      {/* Caliphs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {khulfaRashideen.map((caliph) => (
          <div
            key={caliph.id}
            onClick={() => handleCaliphClick(caliph)}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            {/* Caliph Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mb-4 mx-auto">
              <FaCrown className="text-white" size={20} />
            </div>

            {/* Caliph Name */}
            <h3 className="text-xl font-bold text-green-800 text-center mb-2">
              {caliph.name}
            </h3>

            {/* Arabic Name */}
            <div className="text-center mb-3">
              <span className="text-lg text-green-700" dir="rtl">{caliph.arabic}</span>
            </div>

            {/* Title */}
            <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
              <FaHeart size={14} />
              <span className="text-sm font-medium">{caliph.title}</span>
            </div>

            {/* Period */}
            <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
              <FaCalendarAlt size={14} />
              <span className="text-sm">{caliph.period}</span>
            </div>

            {/* Short Description */}
            <p className="text-green-700 text-sm text-center mb-4 leading-relaxed">
              {caliph.shortDesc}
            </p>

            {/* Achievements Badge */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {caliph.achievements}
              </span>
            </div>

            {/* Click indicator */}
            <div className="text-center mt-4">
              <span className="text-green-500 text-xs">Click to read full biography</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200 text-center">
        <p className="text-green-800 italic text-lg mb-2">
          "The best of people are those who benefit others."
        </p>
        <p className="text-green-600 text-sm">
          - Prophet Muhammad (peace be upon him)
        </p>
      </div>
    </div>
  );
}

