import { useState } from "react";
import { FaStar, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const ashraMushabara = [
  {
    id: 1,
    name: "Abu Bakr As-Siddiq",
    arabic: "أبو بكر الصديق",
    title: "As-Siddiq (The Truthful)",
    relation: "Best friend and first Caliph",
    shortDesc: "The closest companion of Prophet Muhammad (peace be upon him) and the first Caliph of Islam.",
    fullBiography: `Abu Bakr As-Siddiq (may Allah be pleased with him) was born as Abdullah ibn Abi Quhafa in 573 CE in Mecca. He was the closest companion of Prophet Muhammad (peace be upon him) and the first Caliph of Islam.

Early Life and Character:
- Born into the respected Taym tribe of Quraysh
- Known for his honesty, gentleness, and wisdom even before Islam
- A successful merchant with a reputation for fairness and integrity
- Never worshipped idols even during the pre-Islamic period

Acceptance of Islam:
- First adult male to accept Islam
- Accepted Islam immediately when the Prophet (peace be upon him) invited him
- Never doubted or hesitated in his faith
- Earned the title "As-Siddiq" (The Truthful) for his unwavering belief

Major Contributions:
- Accompanied the Prophet during the Hijra (migration) to Medina
- Spent his entire wealth for the cause of Islam
- Freed many slaves including Bilal ibn Rabah (may Allah be pleased with him)
- Participated in all major battles alongside the Prophet

The Hijra Companion:
- Chosen by Allah to accompany the Prophet during the historic migration
- Showed complete trust and courage during the dangerous journey
- His presence in the cave of Thawr is mentioned in the Quran
- Demonstrated perfect companionship and loyalty

As the First Caliph (632-634 CE):
- Became Caliph after the Prophet's death through consultation of the companions
- Successfully handled the crisis of apostasy (Ridda wars)
- Compiled the Quran into a single book to preserve it
- Initiated the expansion of Islam beyond Arabian Peninsula

Key Qualities According to Hanafi Understanding:
1. Complete submission to Allah and His Messenger
2. Generosity and sacrifice for the sake of Islam
3. Wisdom and sound judgment in leadership
4. Humility despite his high status
5. Unwavering faith during trials and tribulations

Famous Sayings:
- "If I were to take a friend other than my Lord, I would take Abu Bakr as a friend." - Prophet Muhammad (peace be upon him)
- "I was not created to be served, but to serve."
- "He is not of us who does not show mercy to our young ones and does not acknowledge the honor due to our elders."

Death and Legacy:
- Died in 634 CE at the age of 61
- Ruled for only 2 years and 3 months but left an indelible mark
- Buried next to the Prophet Muhammad (peace be upon him)
- His caliphate established the foundation for Islamic expansion

Lessons from His Life:
- True friendship means supporting in both ease and hardship
- Wealth should be spent in the path of Allah
- Leadership requires sacrifice and service to others
- Faith should remain constant regardless of circumstances
- Humility increases one's status in the sight of Allah

Quranic Reference:
"If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out as one of two, when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.'" (Quran 9:40)

Abu Bakr's life exemplifies perfect companionship, unwavering faith, and selfless service to Islam. His legacy continues to inspire Muslims in their relationship with Allah and His Messenger.`
  },
  {
    id: 2,
    name: "Umar ibn Al-Khattab",
    arabic: "عمر بن الخطاب",
    title: "Al-Faruq (The Criterion)",
    relation: "Second Caliph",
    shortDesc: "The second Caliph known for his justice, strength, and expansion of the Islamic empire.",
    fullBiography: `Umar ibn Al-Khattab (may Allah be pleased with him) was born in 584 CE in Mecca. He was the second Caliph of Islam and is known as Al-Faruq (The Criterion between right and wrong).

Early Life and Pre-Islam:
- Born into the Adi tribe of Quraysh
- Known for his physical strength, courage, and leadership qualities
- Was initially one of the fiercest opponents of Islam
- Worked as a merchant and was respected in Meccan society

Conversion to Islam:
- Converted to Islam in 616 CE, six years after the first revelation
- His conversion was a turning point for the Muslim community
- Converted after reading verses from Surah Ta-Ha
- The Prophet (peace be upon him) had prayed for either Umar or Abu Jahl to accept Islam

Impact of His Conversion:
- Muslims could pray openly at the Ka'bah for the first time
- Strengthened the Muslim community significantly
- His courage and determination became legendary
- Earned the title "Al-Faruq" for his ability to distinguish between right and wrong

During the Prophet's Lifetime:
- Participated in all major battles after his conversion
- Known for his strict adherence to Islamic principles
- Often consulted by the Prophet on important matters
- His suggestions were sometimes reflected in Quranic revelations

As the Second Caliph (634-644 CE):
Administrative Reforms:
- Established the first organized government system in Islam
- Created departments for different administrative functions
- Introduced the Hijri calendar
- Established a regular salary system for government officials

Military Expansion:
- Conquered the Sassanian Empire (Persia)
- Conquered most of the Byzantine territories in the Middle East
- Conquered Egypt, Syria, and parts of North Africa
- Established Islamic rule from Spain to Central Asia

Justice and Governance:
- Known for his strict justice regardless of social status
- Personally investigated complaints against officials
- Lived a simple life despite ruling a vast empire
- Established the principle that rulers are accountable to the people

Key Achievements:
- Conquered Jerusalem peacefully and guaranteed protection to Christians
- Established the first welfare state in history
- Created a system of stipends for the poor and needy
- Built roads, canals, and rest houses for travelers

Character and Qualities:
1. Uncompromising justice and fairness
2. Personal accountability and transparency
3. Simple lifestyle despite immense power
4. Courage in implementing difficult decisions
5. Deep concern for the welfare of his subjects

Famous Incidents:
- Refused to enter Jerusalem until the Patriarch handed over the keys personally
- Slept under a tree during his visit to Syria, impressing the Byzantine envoys
- Personally carried flour to a poor family during a famine
- Established the first public treasury (Bayt al-Mal)

Death and Martyrdom:
- Assassinated in 644 CE by Abu Lu'lu'a, a Persian slave
- Died while leading Fajr prayer in the Prophet's mosque
- His last words were about the prayer and the rights of people
- Buried next to the Prophet (peace be upon him) and Abu Bakr

Lessons from His Life:
- True leadership means serving the people, not being served
- Justice must be applied equally regardless of status
- Personal integrity is essential for effective governance
- Expansion should be coupled with good administration
- A leader must be accessible to the common people

Legacy:
- Established the foundation of Islamic jurisprudence and governance
- His administrative system influenced Islamic governments for centuries
- Known as one of the greatest rulers in human history
- His reign is considered the golden period of the Rashidun Caliphate

Quranic Connection:
Many of his suggestions were later revealed as Quranic verses, showing his deep understanding of Islamic principles and his closeness to divine guidance.

Umar's life demonstrates that true strength lies in justice, humility, and service to Allah and His creation. His legacy continues to inspire leaders and Muslims worldwide.`
  },
  {
    id: 3,
    name: "Uthman ibn Affan",
    arabic: "عثمان بن عفان",
    title: "Dhun-Nurayn (Possessor of Two Lights)",
    relation: "Third Caliph",
    shortDesc: "The third Caliph known for his generosity and compilation of the Quran into a single standard text.",
    fullBiography: `Uthman ibn Affan (may Allah be pleased with him) was born in 576 CE in Mecca. He was the third Caliph of Islam and earned the title "Dhun-Nurayn" (Possessor of Two Lights) for marrying two daughters of the Prophet.

Early Life and Character:
- Born into the wealthy Umayyad clan of Quraysh
- Known for his gentleness, generosity, and refined character
- Was a successful merchant with extensive trade networks
- Known for his modesty and shyness even before accepting Islam

Conversion to Islam:
- Among the earliest converts to Islam
- Converted through the invitation of Abu Bakr (may Allah be pleased with him)
- Immediately faced persecution from his clan for accepting Islam
- Remained steadfast despite family pressure and social ostracism

Marriage to the Prophet's Daughters:
- First married Ruqayyah, daughter of Prophet Muhammad (peace be upon him)
- After Ruqayyah's death, married Umm Kulthum, another daughter of the Prophet
- This unique honor earned him the title "Dhun-Nurayn"
- The Prophet said no one would have been more deserving if he had a third daughter

Migration and Sacrifices:
- Migrated to Abyssinia with his wife Ruqayyah during the first migration
- Later migrated to Medina during the Hijra
- Generously supported the Muslim community financially
- Purchased the well of Rumah and donated it for public use

Major Contributions During Prophet's Lifetime:
- Financed the expedition of Tabuk almost single-handedly
- The Prophet guaranteed him Paradise for this contribution
- Purchased land to expand the Prophet's mosque in Medina
- Known for his continuous charity and support for the poor

As the Third Caliph (644-656 CE):
Compilation of the Quran:
- Standardized the Quran into a single text (Mushaf Uthmani)
- Sent copies to all major Islamic centers
- Ordered the destruction of variant texts to prevent confusion
- This compilation is the same Quran used by Muslims today

Administrative Achievements:
- Continued the expansion of the Islamic empire
- Conquered Cyprus and established the first Muslim navy
- Extended Islamic rule into North Africa and Central Asia
- Established a more organized administrative system

Challenges During His Caliphate:
- Faced internal opposition and political unrest
- Accusations of nepotism for appointing Umayyad governors
- Economic disparities led to social tensions
- Regional rebellions challenged central authority

Character and Qualities:
1. Exceptional generosity and charity
2. Gentle and forgiving nature
3. Deep knowledge of the Quran and Islamic law
4. Modesty and humility despite wealth and power
5. Patience and perseverance during trials

Famous Acts of Generosity:
- Bought the well of Rumah for 20,000 dirhams and made it public
- Financed the army of Usrah (Tabuk expedition) with 10,000 dinars
- Provided 1,000 camels and 70 horses for the same expedition
- Regularly freed slaves and supported orphans and widows

The Siege and Martyrdom:
- Faced a 49-day siege at his home by rebels
- Refused to fight back to avoid bloodshed among Muslims
- Continued reading the Quran during the siege
- Martyred on 17 Dhul Hijjah 35 AH while reading the Quran

His Final Days:
- Showed remarkable patience and forgiveness toward his opponents
- Refused offers of help from supporters to avoid civil war
- Spent his last days in prayer and recitation of the Quran
- His blood fell on the verse: "And Allah will suffice you against them"

Lessons from His Life:
- Wealth should be used for the benefit of the Muslim community
- Gentleness and patience are signs of true strength
- Preserving Islamic knowledge is a sacred responsibility
- Leadership requires sacrifice and putting community interests first
- Forgiveness is better than revenge, even in the face of injustice

Legacy:
- The standardized Quran remains his greatest contribution to Islam
- His generosity set an example for wealthy Muslims
- His patience during trials demonstrates true Islamic character
- His martyrdom highlighted the importance of unity among Muslims

Quranic Preservation:
His compilation of the Quran ensured that the holy book would remain unchanged for all time, fulfilling Allah's promise: "Indeed, it is We who sent down the Quran and indeed, We will be its guardian." (Quran 15:9)

Uthman's life exemplifies how wealth, when used correctly, becomes a means of earning Allah's pleasure and serving humanity. His legacy in preserving the Quran makes him one of the greatest benefactors of the Muslim Ummah.`
  },
  {
    id: 4,
    name: "Ali ibn Abi Talib",
    arabic: "علي بن أبي طالب",
    title: "Asadullah (Lion of Allah)",
    relation: "Fourth Caliph and cousin",
    shortDesc: "The fourth Caliph, cousin and son-in-law of the Prophet, known for his courage, wisdom, and knowledge.",
    fullBiography: `Ali ibn Abi Talib (may Allah be pleased with him) was born in 601 CE in Mecca. He was the cousin and son-in-law of Prophet Muhammad (peace be upon him) and the fourth Caliph of Islam.

Early Life and Upbringing:
- Born to Abu Talib, uncle of Prophet Muhammad (peace be upon him)
- Raised in the Prophet's household from a young age
- First young person to accept Islam at approximately age 10
- Grew up under the direct guidance and training of the Prophet

Youth and Early Islam:
- Slept in the Prophet's bed during the Hijra, risking his life
- Known for his exceptional courage and fighting skills from a young age
- Participated in all major battles except Tabuk (stayed to protect Medina)
- Earned the title "Asadullah" (Lion of Allah) for his bravery

Marriage and Family:
- Married Fatimah, the beloved daughter of the Prophet
- Father of Hasan and Husayn, grandsons of the Prophet
- The Prophet said: "Ali is from me and I am from Ali"
- His lineage continued the blessed family of the Prophet

Military Prowess and Battles:
Battle of Badr:
- Killed several prominent Meccan warriors in single combat
- Showed exceptional bravery despite his young age
- His courage boosted Muslim morale significantly

Battle of Uhud:
- Remained steadfast when many Muslims scattered
- Protected the Prophet when he was injured
- Continued fighting despite multiple wounds

Battle of Khaybar:
- Conquered the fortress after receiving the banner from the Prophet
- The Prophet said: "Tomorrow I will give the banner to one whom Allah and His Messenger love"
- Single-handedly opened the heavy gate of the fortress

Battle of the Trench:
- Defeated Amr ibn Abd Wudd, the champion of the enemy
- The Prophet said this single combat was worth more than the worship of all mankind

Knowledge and Wisdom:
- Known as "Bab Madinat al-Ilm" (Gate of the City of Knowledge)
- The Prophet said: "I am the city of knowledge and Ali is its gate"
- Exceptional understanding of the Quran and Islamic jurisprudence
- Known for his eloquent speeches and wise judgments

During the First Three Caliphates:
- Served as advisor to Abu Bakr, Umar, and Uthman
- Resolved complex legal and theological issues
- Remained loyal to the community despite personal disappointments
- Focused on teaching and spreading Islamic knowledge

As the Fourth Caliph (656-661 CE):
Challenges Faced:
- Inherited a divided community after Uthman's assassination
- Faced three major civil wars (Fitnas)
- Battle of the Camel against Aisha, Talha, and Zubayr
- Battle of Siffin against Muawiya ibn Abi Sufyan

Administrative Reforms:
- Emphasized justice and equality in governance
- Removed corrupt governors appointed by previous administrations
- Established a more equitable distribution of state resources
- Maintained the highest standards of personal integrity

Character and Qualities:
1. Unmatched courage and bravery in battle
2. Deep knowledge and wisdom in Islamic sciences
3. Complete devotion to Allah and His Messenger
4. Justice and fairness in all dealings
5. Asceticism and simple lifestyle despite being Caliph

Famous Sayings:
- "Be like a flower that gives its fragrance even to the hand that crushes it"
- "Patience is of two kinds: patience over what pains you, and patience against what you covet"
- "The best deed of a great man is to forgive and forget"
- "Knowledge is better than wealth because it protects you while you have to guard wealth"

Martyrdom:
- Assassinated in 661 CE by Ibn Muljam, a Kharijite
- Struck with a poisoned sword while praying Fajr in Kufa mosque
- Died two days later, showing forgiveness toward his assassin
- Buried in Najaf, Iraq (according to most historical accounts)

Lessons from His Life:
- True courage combines physical bravery with moral strength
- Knowledge should be pursued and shared for the benefit of humanity
- Justice must be upheld even if it costs personal relationships
- Forgiveness and patience are signs of true strength
- Leadership is a trust that requires sacrifice and service

Legacy:
- Considered the father of Islamic theology and jurisprudence
- His speeches and letters (compiled in Nahj al-Balagha) remain influential
- Established principles of just governance that influenced Islamic political thought
- His descendants (Sayyids) are honored throughout the Muslim world

Relationship with the Prophet:
The Prophet (peace be upon him) said about Ali:
- "You are to me as Aaron was to Moses, except there is no prophet after me"
- "Whoever I am his master, Ali is his master"
- "Ali is from me and I am from Ali, and he is the guardian of every believer after me"

Ali's life represents the perfect combination of knowledge, courage, and devotion. His unwavering commitment to Islamic principles, even in the face of political opposition, makes him a model for all Muslims seeking to live according to divine guidance.`
  },
  {
    id: 5,
    name: "Talha ibn Ubaydullah",
    arabic: "طلحة بن عبيد الله",
    title: "Talha Al-Khayr (Talha the Good)",
    relation: "Companion and cousin of Abu Bakr",
    shortDesc: "Known for his generosity and bravery, he was one of the earliest converts and a successful merchant.",
    fullBiography: `Talha ibn Ubaydullah (may Allah be pleased with him) was born around 594 CE in Mecca. He was one of the earliest converts to Islam and among the ten companions promised Paradise.

Early Life and Character:
- Born into the Taym tribe of Quraysh, same tribe as Abu Bakr
- Known for his handsome appearance and noble character
- Successful merchant with extensive trade networks
- Known for his generosity even before accepting Islam

Conversion to Islam:
- Among the first eight people to accept Islam
- Converted through the invitation of Abu Bakr (may Allah be pleased with him)
- Immediately faced persecution from his family and tribe
- Remained steadfast in his faith despite social pressure

Early Persecution and Migration:
- Tortured along with other early Muslims in Mecca
- Migrated to Medina during the Hijra
- Established brotherhood with Ka'b ibn Malik in Medina
- Continued his trade while supporting the Muslim community

Military Service and Bravery:
Battle of Uhud:
- Showed exceptional courage when Muslims were scattered
- Protected the Prophet Muhammad (peace be upon him) with his own body
- Received multiple wounds while shielding the Prophet
- His hand was paralyzed while defending the Prophet

Other Military Campaigns:
- Participated in most battles during the Prophet's lifetime
- Known for his strategic thinking and battlefield courage
- Led various expeditions and raids successfully
- Earned respect from both Muslims and enemies for his valor

Exceptional Generosity:
- Known as "Talha Al-Khayr" (Talha the Good) for his charity
- Regularly distributed large amounts of wealth to the poor
- Freed numerous slaves and supported orphans and widows
- His daily charity was legendary among the companions

Famous Acts of Charity:
- Once distributed 400,000 dirhams in a single day
- Bought land and immediately donated it for public use
- Provided dowries for poor women to get married
- Supported the families of martyrs and veterans

Business Acumen:
- One of the wealthiest companions through honest trade
- Established trade routes across the Arabian Peninsula
- Known for fair dealing and ethical business practices
- Used his wealth primarily for charitable purposes

During the Prophet's Lifetime:
- Consulted by the Prophet on important matters
- Known for his sound judgment and wise counsel
- Participated in the Treaty of Hudaybiyyah
- Present during the Prophet's final pilgrimage

Role in Early Caliphates:
Under Abu Bakr:
- Supported Abu Bakr's caliphate wholeheartedly
- Participated in the Ridda wars against apostates
- Helped maintain unity among the Muslim community

Under Umar:
- Served as advisor and consultant
- Participated in the conquest of Iraq
- Continued his charitable activities and business

Under Uthman:
- Initially supported Uthman's policies
- Later became concerned about administrative issues
- Advocated for reforms while maintaining loyalty

Character and Qualities:
1. Exceptional generosity and charity
2. Courage and bravery in battle
3. Loyalty to the Prophet and Islamic principles
4. Business ethics and fair dealing
5. Concern for the welfare of the Muslim community

The Battle of the Camel:
- Joined Aisha and Zubayr in opposing Ali's caliphate
- Believed he was seeking justice for Uthman's assassination
- Participated in the Battle of the Camel (656 CE)
- Killed during the battle while fighting

Circumstances of His Death:
- Died at the Battle of the Camel near Basra
- His participation was motivated by seeking justice, not personal gain
- Recognized by Ali as a sincere companion despite their differences
- Ali personally ensured his proper burial and honored his memory

Lessons from His Life:
- Wealth should be used for the benefit of others
- True generosity means giving without expecting return
- Business success should be achieved through ethical means
- Courage in battle should be matched by courage in standing for principles
- Even sincere people can have different opinions on complex issues

Legacy and Impact:
- Remembered as one of the most generous companions
- His charitable works benefited thousands of people
- Set an example for wealthy Muslims in using their resources
- His business practices influenced Islamic commercial law

Relationship with Other Companions:
- Close friend of Abu Bakr and Umar
- Respected by all companions for his character
- Known for his humility despite his wealth and status
- Maintained good relationships across tribal lines

Famous Sayings:
- "The best of people are those who benefit others"
- "Wealth is not in having many possessions, but in having a generous heart"
- "A man's true worth is measured by his character, not his riches"

Recognition by the Prophet:
The Prophet (peace be upon him) said about Talha:
- Included him among the ten promised Paradise
- Praised his generosity and sacrifice
- Called him "Talha Al-Khayr" for his goodness
- Appreciated his protection during the Battle of Uhud

Talha's life demonstrates that material success, when combined with spiritual values and generosity, becomes a means of serving Allah and humanity. His legacy continues to inspire Muslims in their approach to wealth, charity, and community service.`
  },
  {
    id: 6,
    name: "Zubayr ibn Al-Awwam",
    arabic: "الزبير بن العوام",
    title: "Hawari Rasulullah (Disciple of the Messenger)",
    relation: "Cousin of the Prophet",
    shortDesc: "The cousin of Prophet Muhammad and one of his closest companions, known for his exceptional courage.",
    fullBiography: `Zubayr ibn Al-Awwam (may Allah be pleased with him) was born around 594 CE in Mecca. He was the cousin of Prophet Muhammad (peace be upon him) and one of the ten companions promised Paradise.

Family Background:
- Son of Al-Awwam ibn Khuwaylid and Safiyyah bint Abdul Muttalib
- Safiyyah was the aunt of Prophet Muhammad (peace be upon him)
- Born into the Asad clan of the Quraysh tribe
- Cousin to both the Prophet and Khadijah (may Allah be pleased with her)

Early Conversion and Persecution:
- Among the earliest converts to Islam, accepting at age 12
- One of the first ten people to embrace Islam
- Faced severe persecution from his uncle for accepting Islam
- His uncle would wrap him in a mat and light fire beneath to force him to renounce Islam
- Never wavered in his faith despite torture

Youth and Training:
- Trained in swordsmanship and horsemanship from a young age
- Known for his exceptional physical strength and agility
- Developed into one of the finest warriors of his generation
- Earned the title "Hawari Rasulullah" (Disciple of the Messenger)

Migration and Early Islamic Period:
- Migrated to Abyssinia during the first migration
- Later migrated to Medina during the Hijra
- Established brotherhood with Salama ibn Salama in Medina
- Quickly became one of the Prophet's most trusted companions

Military Excellence:
Battle of Badr:
- Participated in the first major Islamic victory
- Showed exceptional courage despite his young age
- His bravery inspired other Muslim fighters

Battle of Uhud:
- Remained steadfast when many Muslims scattered
- Fought valiantly to protect the Prophet
- Received multiple wounds while defending Islam

Conquest of Mecca:
- Led one of the four divisions entering Mecca
- Played a crucial role in the peaceful conquest
- Demonstrated strategic military leadership

Siege of Ta'if:
- Showed exceptional bravery during the siege
- First to scale the walls of the fortress
- His courage earned him special recognition from the Prophet

Special Missions and Expeditions:
- Led numerous reconnaissance missions
- Known for his ability to gather intelligence
- Participated in most major battles and expeditions
- Trusted by the Prophet with sensitive military operations

Character and Qualities:
1. Unwavering loyalty to the Prophet and Islam
2. Exceptional courage and military skill
3. Strategic thinking and leadership abilities
4. Humility despite his achievements
5. Deep devotion to worship and Islamic principles

Relationship with the Prophet:
- Called "Hawari" (Disciple) by the Prophet
- One of the inner circle of companions
- Frequently consulted on military matters
- Married to Asma bint Abi Bakr, daughter of Abu Bakr

During the Caliphates:
Under Abu Bakr:
- Supported Abu Bakr's caliphate
- Participated in the Ridda wars
- Helped maintain unity in the Muslim community

Under Umar:
- Continued military service
- Participated in the conquest of Egypt
- Served as a trusted advisor

Under Uthman:
- Initially supported Uthman's policies
- Later became concerned about administrative issues
- Advocated for reforms while maintaining loyalty

Family Life:
- Married to Asma bint Abi Bakr
- Father of Abdullah ibn Zubayr, who later became a prominent figure
- Known for his care and concern for his family
- Balanced his military duties with family responsibilities

Business and Wealth:
- Successful in trade and business ventures
- Known for his honest dealings
- Used his wealth to support the Muslim community
- Provided financial support for various Islamic causes

The Battle of the Camel:
- Joined Aisha and Talha in opposing Ali's caliphate
- Motivated by seeking justice for Uthman's assassination
- Participated in the Battle of the Camel (656 CE)
- Killed during the battle

Circumstances of His Death:
- Died at the Battle of the Camel near Basra
- His participation was based on his understanding of justice
- Recognized by Ali as a sincere companion despite their differences
- Ali ensured his proper burial and honored his memory

Lessons from His Life:
- Early acceptance of truth requires courage and conviction
- Physical strength should be used in service of righteousness
- Loyalty to principles sometimes leads to difficult decisions
- Military skill should be combined with moral character
- Family relationships are important even during times of conflict

Legacy and Impact:
- Remembered as one of the bravest companions
- His military strategies influenced Islamic warfare
- Set an example of unwavering faith from youth
- His descendants continued to serve Islam prominently

Recognition by the Prophet:
The Prophet (peace be upon him) said about Zubayr:
- "Every prophet has a disciple, and my disciple is Zubayr"
- Included him among the ten promised Paradise
- Praised his courage and dedication
- Trusted him with important military missions

Famous Incidents:
- Volunteered for dangerous reconnaissance missions
- First to reach the enemy in several battles
- Known for his fearlessness in face of overwhelming odds
- His presence on the battlefield boosted Muslim morale

Zubayr's life exemplifies the combination of early faith, unwavering courage, and dedicated service to Islam. His legacy as the "Disciple of the Messenger" continues to inspire Muslims in their commitment to Islamic principles and community service.`
  },
  {
    id: 7,
    name: "Abdur Rahman ibn Awf",
    arabic: "عبد الرحمن بن عوف",
    title: "As-Sadiq Al-Masdooq (The Truthful and Trusted)",
    relation: "Companion and successful merchant",
    shortDesc: "One of the wealthiest companions known for his business acumen and extraordinary generosity.",
    fullBiography: `Abdur Rahman ibn Awf (may Allah be pleased with him) was born around 580 CE in Mecca. He was one of the ten companions promised Paradise and among the most successful merchants in Islamic history.

Early Life and Background:
- Born into the Zuhrah clan of the Quraysh tribe
- Originally named Abd Amr, changed to Abdur Rahman after accepting Islam
- Known for his intelligence and business acumen from a young age
- Came from a family involved in trade and commerce

Conversion to Islam:
- Among the first eight people to accept Islam
- Converted through the invitation of Abu Bakr (may Allah be pleased with him)
- Immediately faced opposition from his family and tribe
- Remained steadfast despite economic and social pressure

Early Persecution and Sacrifice:
- Faced economic boycott for accepting Islam
- Lost significant business due to his conversion
- Endured physical and emotional persecution
- Never considered abandoning his faith for worldly gains

Migration to Medina:
- Migrated to Medina during the Hijra
- Established brotherhood with Sa'd ibn Rabi (may Allah be pleased with him)
- Sa'd offered to share his wealth and even divorce one of his wives for Abdur Rahman
- Declined the offer and asked to be shown the marketplace instead

Business Success in Medina:
- Started with small trade in the Medina marketplace
- Gradually built a vast commercial empire
- Known for his honest dealings and fair prices
- Became one of the wealthiest people in the Arabian Peninsula

Exceptional Generosity:
Major Charitable Contributions:
- Donated half his wealth (4,000 dinars) for the Tabuk expedition
- When Umar asked why he gave so much, he replied he kept the other half for his family
- Regularly provided for 100 families in Medina
- Freed over 30,000 slaves during his lifetime

Famous Acts of Charity:
- Donated 1,000 camels with their loads for the path of Allah
- Provided 1,000 horses for military expeditions
- Built and endowed numerous mosques and schools
- Established endowments for orphans and widows

Military Service:
- Participated in all major battles during the Prophet's lifetime
- Known for his courage despite not being primarily a warrior
- Provided financial support for military expeditions
- His contributions were crucial for the success of many campaigns

Role in the Community:
During the Prophet's Lifetime:
- Consulted on important economic and social matters
- Helped establish the economic foundation of the Islamic state
- Known for his wise counsel and sound judgment
- Respected by all companions for his integrity

Under Abu Bakr:
- Supported Abu Bakr's caliphate
- Provided financial assistance during the Ridda wars
- Helped maintain economic stability during transition

Under Umar:
- Served as advisor on economic policies
- His business expertise helped expand Islamic trade
- Continued his charitable activities on a larger scale

Selection of Uthman:
- Member of the six-person council to choose the third Caliph
- Played a crucial role in the selection process
- Withdrew his own candidacy to facilitate consensus
- Supported Uthman's appointment as Caliph

Character and Qualities:
1. Exceptional business acumen and integrity
2. Extraordinary generosity and charity
3. Wisdom in financial and social matters
4. Humility despite immense wealth
5. Complete dedication to Islamic principles

Business Ethics:
- Never engaged in dishonest practices
- Known for keeping his word in all transactions
- Treated employees and partners fairly
- Used his wealth primarily for charitable purposes

Family Life:
- Married multiple times as was customary
- Known for his care and provision for his families
- Ensured his children received proper Islamic education
- Balanced his business activities with family responsibilities

Relationship with Other Companions:
- Respected by all for his character and generosity
- Close friend of Abu Bakr and Umar
- Maintained good relationships across tribal lines
- Known for his ability to mediate disputes

Death and Legacy:
- Died in 32 AH (652 CE) during Uthman's caliphate
- Left behind immense wealth, most of which was distributed to charity
- His funeral was attended by thousands of people
- Buried in Baqi cemetery in Medina

Final Will and Testament:
- Freed all his remaining slaves
- Distributed his wealth among family and charity
- Established permanent endowments for the poor
- Ensured his business partners received their due shares

Lessons from His Life:
- Honest business practices lead to both worldly and spiritual success
- Wealth is a trust that should be used for the benefit of others
- Economic success should not compromise Islamic principles
- Generosity increases rather than decreases one's blessings
- Business acumen can be a form of service to the community

Recognition by the Prophet:
The Prophet (peace be upon him) said about Abdur Rahman:
- Included him among the ten promised Paradise
- Praised his generosity and business ethics
- Called him "As-Sadiq Al-Masdooq" (The Truthful and Trusted)
- Appreciated his financial support for Islamic causes

Famous Sayings:
- "I was tested with poverty and I was patient, and I was tested with wealth and I was grateful"
- "The best of wealth is that which preserves one's honor"
- "Trade honestly, for Allah blesses honest trade"

Economic Impact:
- Helped establish Islamic commercial law through his practices
- His business methods influenced Islamic economic principles
- Created employment for thousands of people
- His charitable endowments benefited generations

Abdur Rahman ibn Awf's life demonstrates that material success, when achieved through honest means and used for noble purposes, becomes a means of earning Allah's pleasure and serving humanity. His legacy continues to inspire Muslim entrepreneurs and philanthropists worldwide.`
  },
  {
    id: 8,
    name: "Sa'd ibn Abi Waqqas",
    arabic: "سعد بن أبي وقاص",
    title: "Faris Al-Islam (Knight of Islam)",
    relation: "Maternal uncle of the Prophet",
    shortDesc: "The conqueror of Persia and one of the greatest military commanders in Islamic history.",
    fullBiography: `Sa'd ibn Abi Waqqas (may Allah be pleased with him) was born around 595 CE in Mecca. He was one of the ten companions promised Paradise and the conqueror of the Sassanian Empire.

Family Background and Early Life:
- Born into the Zuhrah clan of the Quraysh tribe
- Maternal uncle of Prophet Muhammad (peace be upon him)
- Known for his physical strength and archery skills from youth
- Came from a family of warriors and was trained in combat

Conversion to Islam:
- Among the first people to accept Islam at age 17
- One of the earliest converts, accepting Islam through Abu Bakr's invitation
- Faced severe opposition from his mother who threatened to starve herself
- Remained firm in his faith despite family pressure

Early Persecution and Steadfastness:
- His mother carried out her threat and refused to eat or drink
- Sa'd remained patient and told her: "O mother, if you had a hundred souls and they departed one by one, I would not abandon my religion"
- Eventually his mother accepted his decision
- This incident led to the revelation of Quranic verses about kindness to parents

Military Excellence and Archery:
- First person to shoot an arrow in the path of Allah
- Exceptional archer, considered the best marksman among companions
- The Prophet (peace be upon him) said: "Shoot, Sa'd! May my father and mother be sacrificed for you"
- His archery skills were legendary in Arabian Peninsula

Major Military Campaigns:
Battle of Badr:
- Participated in the first major Islamic victory
- His archery skills were crucial in the Muslim victory
- Demonstrated exceptional courage and strategic thinking

Battle of Uhud:
- Remained steadfast when many Muslims scattered
- His arrows protected the Prophet during the retreat
- Continued fighting despite being wounded

Conquest of Persia:
- Appointed by Umar as commander of the army against Sassanians
- Led the decisive Battle of Qadisiyyah (636 CE)
- Conquered the entire Sassanian Empire
- Established Islamic rule from Iraq to Central Asia

Battle of Qadisiyyah:
- Faced the mighty Sassanian army led by Rustam
- Despite being outnumbered, achieved complete victory
- His strategic brilliance led to the fall of the Persian Empire
- This victory opened the path for Islamic expansion into Asia

Administrative and Leadership Skills:
Governor of Kufa:
- Appointed as the first governor of Kufa by Umar
- Established a just and efficient administration
- Built the city of Kufa as a major Islamic center
- Known for his fair treatment of both Arabs and Persians

Military Innovations:
- Developed new tactics for fighting against heavily armored cavalry
- Integrated Persian military techniques with Arab warfare
- Established military training schools
- Created an efficient supply system for long campaigns

Character and Qualities:
1. Exceptional military leadership and strategic thinking
2. Unwavering faith and dedication to Islam
3. Justice and fairness in governance
4. Humility despite great achievements
5. Deep respect for Islamic principles and law

Relationship with the Prophet:
- One of the closest companions to the Prophet
- The Prophet's maternal uncle through family ties
- Frequently consulted on military matters
- Received special prayers and blessings from the Prophet

During the Caliphates:
Under Abu Bakr:
- Participated in the Ridda wars against apostates
- Led expeditions into Iraq
- Helped establish Islamic authority in newly conquered territories

Under Umar:
- Appointed as supreme commander for the Persian campaign
- Conquered the entire Sassanian Empire
- Served as governor of Kufa
- Established Islamic administration in Persia

Under Uthman:
- Continued his administrative duties
- Supported Uthman's policies
- Focused on consolidating Islamic rule in Persia

Personal Characteristics:
- Known for his piety and regular worship
- Simple lifestyle despite his high position
- Generous to the poor and needy
- Maintained strong family relationships

Famous Incidents:
Mother's Opposition:
- When his mother threatened to starve herself, he remained firm in faith
- This led to Quranic revelation about obedience to parents in lawful matters
- Demonstrated the priority of faith over family pressure

The Prophet's Prayer:
- The Prophet prayed: "O Allah, make Sa'd's arrows hit their target and answer his prayers"
- This prayer was famously answered throughout his life
- His prayers were known to be quickly answered by Allah

Death and Legacy:
- Died in 55 AH (674 CE) in Medina
- Last surviving member of the ten promised Paradise
- His funeral was attended by thousands
- Buried in Baqi cemetery in Medina

Military Legacy:
- Conquered an empire larger than the Roman territories conquered by Muslims
- His military strategies influenced Islamic warfare for centuries
- Established the foundation for Islamic expansion into Asia
- Created a model for governing diverse populations

Lessons from His Life:
- Faith should take priority over family pressure when they conflict
- Military skill should be used in service of righteousness
- Leadership requires both courage and wisdom
- Success in this world should not make one forget the Hereafter
- Justice in governance wins the hearts of all people

Recognition by the Prophet:
The Prophet (peace be upon him) said about Sa'd:
- "This is my maternal uncle, so let everyone show me his maternal uncle"
- Included him among the ten promised Paradise
- Praised his archery skills and military leadership
- Made special prayers for his success

Conquest Achievements:
- Conquered the entire Sassanian Empire
- Captured the capital Ctesiphon
- Brought immense wealth to the Islamic treasury
- Established Islamic rule over millions of people

Sa'd ibn Abi Waqqas represents the perfect combination of military excellence, administrative skill, and unwavering faith. His conquest of Persia ranks among the greatest military achievements in history, while his character exemplifies the Islamic ideal of a warrior-scholar-administrator.`
  },
  {
    id: 9,
    name: "Sa'id ibn Zayd",
    arabic: "سعيد بن زيد",
    title: "Sahib Al-Jannah (Companion of Paradise)",
    relation: "Cousin and brother-in-law of Umar",
    shortDesc: "Early convert and cousin of Umar ibn Al-Khattab, known for his piety and role in Umar's conversion.",
    fullBiography: `Sa'id ibn Zayd (may Allah be pleased with him) was born around 593 CE in Mecca. He was one of the ten companions promised Paradise and played a crucial role in Umar's conversion to Islam.

Family Background:
- Born into the Adi clan of the Quraysh tribe
- Son of Zayd ibn Amr ibn Nufayl, a pre-Islamic monotheist (Hanif)
- Cousin of Umar ibn Al-Khattab
- Married to Fatimah bint Al-Khattab, Umar's sister

Early Life and Character:
- Raised in a family that rejected idol worship even before Islam
- His father Zayd was known for seeking the true religion
- Inherited his father's inclination toward monotheism
- Known for his honesty, integrity, and noble character

Conversion to Islam:
- Among the earliest converts to Islam
- Accepted Islam before Umar's conversion
- His conversion influenced his wife Fatimah to accept Islam
- Faced persecution from his tribe for accepting the new faith

Role in Umar's Conversion:
The Famous Incident:
- When Umar came to his house in anger to confront him about Islam
- Umar heard Quranic recitation from inside the house
- Sa'id and Fatimah were studying Surah Ta-Ha
- This incident led directly to Umar's conversion to Islam

Courage During Persecution:
- Continued practicing Islam despite tribal opposition
- Protected other early Muslims from persecution
- His house became a safe haven for Muslim gatherings
- Demonstrated remarkable courage in face of threats

Migration and Early Islamic Period:
- Migrated to Medina during the Hijra
- Established strong bonds with the Ansar (Helpers)
- Participated in building the first Muslim community
- Known for his dedication to Islamic principles

Military Service:
- Participated in most major battles during the Prophet's lifetime
- Known for his bravery and strategic thinking
- Fought at Badr, Uhud, and other significant battles
- Continued military service during the early Caliphates

Missed Battle of Badr:
- Was on a reconnaissance mission during the Battle of Badr
- Returned to find the battle had already concluded
- The Prophet assured him he would receive the same reward as the participants
- This demonstrated the importance of following orders even when missing glory

Character and Qualities:
1. Deep piety and devotion to worship
2. Courage in standing for Islamic principles
3. Loyalty to the Prophet and Islamic community
4. Wisdom in dealing with family and tribal relationships
5. Humility despite his high status

Relationship with Umar:
- Maintained close relationship despite initial opposition
- Served as advisor during Umar's caliphate
- His influence helped shape Umar's understanding of Islam
- Demonstrated how family bonds can be strengthened through faith

During the Caliphates:
Under Abu Bakr:
- Supported Abu Bakr's leadership
- Participated in maintaining community unity
- Continued his military and advisory roles

Under Umar:
- Served as trusted advisor to his cousin
- Participated in major policy decisions
- Helped in the expansion and administration of the Islamic state

Under Uthman:
- Continued his service to the Islamic community
- Known for his wise counsel and sound judgment
- Maintained his reputation for piety and integrity

Personal Characteristics:
Piety and Worship:
- Known for his regular prayers and Quranic recitation
- Spent long hours in meditation and remembrance of Allah
- His house was known as a center of Islamic learning
- Taught Quran and Islamic principles to new converts

Family Life:
- Maintained strong marriage with Fatimah bint Al-Khattab
- Known for his care and concern for family members
- Balanced his public duties with family responsibilities
- Set an example of Islamic family values

Business and Livelihood:
- Engaged in honest trade and commerce
- Known for his fair dealings and ethical practices
- Used his wealth to support the Islamic community
- Provided for the poor and needy regularly

Later Life and Death:
- Lived a long life dedicated to Islamic service
- Continued teaching and guiding new generations of Muslims
- Maintained his reputation for piety until his death
- Died during the caliphate of Muawiya

Legacy and Impact:
Role in Islamic History:
- His influence on Umar's conversion changed the course of Islamic history
- Demonstrated the importance of family influence in spreading Islam
- Set an example of courage during the early persecution period
- His house served as an important center for early Islamic activities

Lessons from His Life:
- Family relationships can be powerful tools for spreading truth
- Courage in faith sometimes requires standing against family initially
- Patience and wisdom can eventually win over opponents
- Personal example is more effective than arguments in convincing others
- True nobility comes from character, not just lineage

Recognition by the Prophet:
The Prophet (peace be upon him):
- Included him among the ten promised Paradise
- Praised his early acceptance of Islam
- Appreciated his role in Umar's conversion
- Recognized his contributions to the early Muslim community

Famous Incidents:
The Quranic Recitation:
- When Umar heard Quranic verses being recited in his house
- This moment changed the history of Islam
- Demonstrated the power of Quranic recitation in touching hearts
- Showed how Allah uses various means to guide people

Relationship with the Quran:
- Known for his beautiful recitation of the Quran
- Memorized large portions of the Quran
- Taught Quranic recitation to others
- His recitation was instrumental in Umar's conversion

Sa'id ibn Zayd's life exemplifies the importance of family influence, courage in faith, and the power of personal example in spreading Islamic values. His role in Umar's conversion alone makes him one of the most significant figures in early Islamic history, while his personal character serves as a model for all Muslims.`
  },
  {
    id: 10,
    name: "Abu Ubaydah ibn Al-Jarrah",
    arabic: "أبو عبيدة بن الجراح",
    title: "Amin Al-Ummah (Trustee of the Nation)",
    relation: "Companion and trusted general",
    shortDesc: "Known as the 'Trustee of the Nation' and one of the greatest military commanders in Islamic history.",
    fullBiography: `Abu Ubaydah ibn Al-Jarrah (may Allah be pleased with him) was born around 583 CE in Mecca. He was one of the ten companions promised Paradise and earned the title "Amin Al-Ummah" (Trustee of the Nation).

Early Life and Background:
- Born into the Fihr clan of the Quraysh tribe
- Originally named Amir ibn Abdullah ibn Al-Jarrah
- Known for his tall stature, handsome appearance, and noble character
- Came from a family of merchants and was involved in trade

Conversion to Islam:
- Among the earliest converts to Islam
- Accepted Islam through the invitation of Abu Bakr (may Allah be pleased with him)
- Converted on the same day as Uthman ibn Affan and Abdur Rahman ibn Awf
- Immediately faced opposition from his family and tribe

Early Persecution and Sacrifice:
- Endured severe persecution for accepting Islam
- Lost business opportunities due to his conversion
- Remained steadfast despite family pressure and economic hardship
- His faith only grew stronger through trials

Migration and Brotherhood:
- Migrated to Medina during the Hijra
- Established brotherhood with Muhammad ibn Maslamah
- Quickly integrated into the Medinan Muslim community
- Known for his humility and service to others

Military Excellence:
Battle of Badr:
- Participated in the first major Islamic victory
- Demonstrated exceptional courage and leadership
- His strategic thinking contributed to the Muslim victory

Battle of Uhud:
- Showed remarkable bravery during the difficult battle
- Helped protect the Prophet when Muslims were scattered
- Personally removed arrow fragments from the Prophet's face
- Lost his front teeth while extracting arrows from the Prophet's helmet

Conquest of Syria:
- Appointed as supreme commander of the Syrian campaign
- Led the conquest of Damascus and other major cities
- Demonstrated exceptional military strategy and leadership
- Established Islamic rule throughout the Levant

Siege of Damascus:
- Led the successful siege of the heavily fortified city
- Used innovative tactics to overcome Byzantine defenses
- Negotiated favorable surrender terms for the inhabitants
- Established a model for future Islamic conquests

Character and Qualities:
1. Complete trustworthiness and integrity
2. Exceptional military leadership and strategy
3. Humility and selflessness in service
4. Deep devotion to Islamic principles
5. Ability to unite diverse groups under Islamic banner

The Title "Amin Al-Ummah":
- Given this title by Prophet Muhammad (peace be upon him)
- Means "Trustee of the Nation" or "The Trusted One of the Community"
- Reflected his complete reliability and integrity
- This title was confirmed through his actions throughout his life

Relationship with Other Companions:
- Close friend of Abu Bakr and Umar
- Respected by all companions for his character
- Known for his ability to mediate disputes
- Maintained excellent relationships across tribal lines

During the Caliphates:
Under Abu Bakr:
- Participated in the Ridda wars against apostates
- Led expeditions into Syria and Iraq
- Helped establish Islamic authority in newly conquered territories

Under Umar:
- Appointed as supreme commander in Syria
- Successfully conquered most of the Levant
- Established efficient administration in conquered territories
- Balanced military leadership with administrative duties

Administrative Skills:
- Established just and efficient governance in Syria
- Integrated local populations into the Islamic system
- Maintained excellent relations with Christian and Jewish communities
- Created a model of Islamic administration that lasted for centuries

Personal Characteristics:
Humility and Simplicity:
- Lived a simple life despite his high position
- Known for his accessibility to common people
- Refused special privileges due to his status
- Maintained the same lifestyle whether in victory or difficulty

Generosity and Care:
- Known for his care of soldiers under his command
- Provided for the families of martyrs
- Established welfare systems in conquered territories
- Used his position to serve others rather than himself

Religious Devotion:
- Regular in prayers and worship
- Known for his Quranic knowledge and recitation
- Spent time in meditation and remembrance of Allah
- Balanced his military duties with spiritual obligations

The Plague of Amwas:
- Struck Syria during his governorship (638 CE)
- Refused to leave his post despite the danger
- Continued serving the people during the crisis
- Contracted the plague while caring for others

Death and Martyrdom:
- Died from the plague in 638 CE in Jordan
- His last words were prayers for the Muslim community
- Refused special treatment during his illness
- Buried in the Jordan Valley where he died

Final Testament:
- Advised his successors to maintain justice and integrity
- Emphasized the importance of caring for the people
- Requested simple burial without ostentation
- Left behind a legacy of service and sacrifice

Lessons from His Life:
- True leadership means serving others, not being served
- Trustworthiness is the foundation of all relationships
- Military success should be combined with administrative wisdom
- Humility increases rather than decreases one's status
- Personal sacrifice for the community is the mark of true leadership

Recognition by the Prophet:
The Prophet (peace be upon him) said about Abu Ubaydah:
- "Every nation has a trustee, and the trustee of this nation is Abu Ubaydah ibn Al-Jarrah"
- Included him among the ten promised Paradise
- Praised his military skills and character
- Trusted him with the most important military commands

Military Legacy:
- Conquered Syria and established Islamic rule in the Levant
- His military strategies influenced Islamic warfare for centuries
- Created a model for integrating conquered populations
- Established the foundation for Islamic expansion into Europe and Africa

Administrative Legacy:
- His governance of Syria became a model for other regions
- Established principles of justice and tolerance
- Created efficient systems that lasted for generations
- Demonstrated how Islamic principles could be applied in governance

Abu Ubaydah ibn Al-Jarrah represents the ideal combination of military excellence, administrative wisdom, and personal integrity. His title "Amin Al-Ummah" reflects not just the Prophet's recognition of his character, but also his lifelong demonstration of complete trustworthiness in service to Islam and humanity.`
  }
];

export default function AshraMushabara() {
  const [selectedCompanion, setSelectedCompanion] = useState(null);

  const handleCompanionClick = (companion) => {
    setSelectedCompanion(companion);
  };

  const handleBackClick = () => {
    setSelectedCompanion(null);
  };

  if (selectedCompanion) {
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 transition-colors"
        >
          <FaArrowLeft size={16} />
          <span>Back to Ashra Mubashra</span>
        </button>

        {/* Companion Details */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-800 mb-4 flex items-center gap-3">
              <FaStar className="text-green-600" />
              {selectedCompanion.name}
            </h1>
            
            {/* Companion Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-green-700">
                <span className="font-medium">Arabic:</span>
                <span className="text-lg" dir="rtl">{selectedCompanion.arabic}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <FaHeart size={16} />
                <span className="font-medium">Title:</span>
                <span>{selectedCompanion.title}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700 md:col-span-2">
                <span className="font-medium">Relation:</span>
                <span>{selectedCompanion.relation}</span>
              </div>
            </div>
          </div>

          {/* Full Biography */}
          <div className="prose prose-green max-w-none">
            <div className="bg-white rounded-lg p-6 border border-green-100">
              <div className="whitespace-pre-line text-green-800 leading-relaxed">
                {selectedCompanion.fullBiography}
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
          <FaStar className="text-green-600" />
          Ashra Mubashra
        </h2>
        <p className="text-green-600 max-w-2xl mx-auto">
          The ten companions promised Paradise by Prophet Muhammad (peace be upon him). 
          Learn about their lives, sacrifices, and contributions to Islam.
        </p>
      </div>

      {/* Companions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ashraMushabara.map((companion) => (
          <div
            key={companion.id}
            onClick={() => handleCompanionClick(companion)}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            {/* Companion Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mb-4 mx-auto">
              <FaStar className="text-white" size={20} />
            </div>

            {/* Companion Name */}
            <h3 className="text-xl font-bold text-green-800 text-center mb-2">
              {companion.name}
            </h3>

            {/* Arabic Name */}
            <div className="text-center mb-3">
              <span className="text-green-600 text-lg" dir="rtl">{companion.arabic}</span>
            </div>

            {/* Title */}
            <div className="flex items-center justify-center gap-2 text-green-600 mb-3">
              <FaHeart size={14} />
              <span className="text-sm font-medium">{companion.title}</span>
            </div>

            {/* Short Description */}
            <p className="text-green-700 text-sm text-center mb-4 leading-relaxed">
              {companion.shortDesc}
            </p>

            {/* Paradise Badge */}
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Promised Paradise
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
          "Abu Bakr is in Paradise, Umar is in Paradise, Uthman is in Paradise, Ali is in Paradise, Talha is in Paradise, Zubayr is in Paradise, Abdur Rahman ibn Awf is in Paradise, Sa'd ibn Abi Waqqas is in Paradise, Sa'id ibn Zayd is in Paradise, and Abu Ubaydah ibn Al-Jarrah is in Paradise."
        </p>
        <p className="text-green-600 text-sm">
          - Prophet Muhammad (peace be upon him)
        </p>
      </div>
    </div>
  );
}