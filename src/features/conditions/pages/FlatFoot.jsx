import { ConditionDetailTemplate } from '../components/ConditionDetailTemplate'
import flatFootImg from '@/assets/images/flat foot.png'

export function FlatFoot() {
  return (
    <ConditionDetailTemplate
      slug="flat-foot"
      title="Flat Foot"
      heroEyebrow="Biomechanical & Arch Alignment Care"
      heroText="Flat feet, fallen arches, or “pes planus” is normally a symptomless and fortunately painless condition. It is characterized by the arch of the foot collapsing completely, which causes the entire sole of the foot to come into perfect contact with the ground. Flat feet become a problem if pain or discomfort is present in the foot or even around the knee and lower leg area."
      overviewImage={flatFootImg}
      overviewTitle="Custom biomechanical support for fallen arches and kinetic chain alignment."
      description="Flat feet, fallen arches, or “pes planus” is normally a symptomless and fortunately painless condition. It is characterized by the arch of the foot collapsing completely, which causes the entire sole of the foot to come into perfect contact with the ground. Flat feet become a problem if pain or discomfort is present in the foot or even around the knee and lower leg area. Pain around the knee and lower leg areas can arise because flat feet can alter proper foot and leg alignment, which will put unusual strain on the knee. When the arch collapses, the foot rolls excessively inward (overpronation), altering normal biomechanics all the way up through the ankles, shins, knees, and hips. Dr. Celine Soltani specializes in non-surgical biomechanical stabilization to alleviate strain, protect joints, and keep you moving comfortably."
      causesTitle="Common Causes & Kinetic Chain Factors"
      causes={[
        'Congenital foot architecture, genetic ligamentous laxity, and inherited fallen arches',
        'Adult-acquired flatfoot stemming from posterior tibial tendon dysfunction (PTTD) or tendon wear',
        'Repetitive high-impact athletic activities or prolonged occupational standing on hard surfaces',
        'Aging, weight changes, arthritis, or previous traumatic ankle/foot injuries',
      ]}
      symptomsText="While some flat feet cause no discomfort, symptomatic flat feet frequently lead to fatigue and radiating strain:"
      symptoms={[
        'Aching fatigue or tiredness in the arches and heels after standing or walking',
        'Pain radiating into the inside of the ankle, shin, or along the inner knee joint',
        'Swelling or tenderness along the pathway of the posterior tibial tendon',
        'Difficulty standing on tiptoes or maintaining balance on uneven ground',
        'Excessive wear on the inner edges of your shoes (inward tilt or pronation pattern)',
      ]}
      diagnosis="Dynamic gait and biomechanical analysis, functional arch flexibility testing, and in-office digital X-rays to assess bone alignment and joint integrity."
      treatmentTitle="Targeted Conservative & Biomechanical Solutions"
      treatmentText="Conservative therapies are exceptionally effective in realigning fallen arches and taking pressure off the knees and lower legs:"
      treatments={[
        'Custom functional prescription orthotics tailored to support the medial longitudinal arch and correct overpronation',
        'Motion-control and stability footwear recommendations suited to your daily routine',
        'Targeted physical therapy exercises for calf stretching and posterior tibial tendon strengthening',
        'Supportive strapping, athletic taping, or custom ankle gauntlets during acute flare-ups',
        'Anti-inflammatory modalities and activity modification guidance',
      ]}
      advancedTreatmentsTitle="Whole-Body Kinetic Chain Protection"
      advancedTreatments="By restoring the natural arch elevation with custom medical orthotics, we eliminate abnormal rotational torque on the knees, hips, and lower back, ensuring pain-free daily activity."
      highlights={[
        'Comprehensive biomechanical and gait analysis',
        'In-office digital X-rays for skeletal alignment evaluation',
        'Custom functional orthotics fabricated for your unique foot structure',
        'Conservative non-surgical relief for foot, ankle, and knee strain',
      ]}
    />
  )
}
